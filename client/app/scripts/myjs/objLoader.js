	//Loading Manager
function objLoader(objPath){

			var manager = new THREE.LoadingManager();
				manager.onProgress = function ( item, loaded, total ) {
					console.log( item, loaded, total );
				};
			 
     
        
            //Load image to create material
//            var texture = new THREE.Texture();
//            var imageLoader = new THREE.ImageLoader(manager);
//            imageLoader.load('./textures/diamond.jpg', function ( image ) {
//                texture.image = image;
//                texture.needsUpdate = true;
//  
//            } );
    
//           var carTexture = new THREE.Texture();
//           var loader = new THREE.ImageLoader( manager );
//				loader.load( './textures/gray-paint.jpg', function ( image ) {
//					carTexture.image = image;
//					carTexture.needsUpdate = true;
//
//				} );

			// Load OBJ Model
			
				var loader = new THREE.OBJLoader( manager );
                objVerts=[];
                objBboxVerts=[];
				loader.load(objPath, function ( object ) {
					object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
				        child.material.color.setRGB (0.55, 0.75, 0.15);   
						child.material.side = THREE.DoubleSide;
                        //child.material.map = carTexture;
                        child.material.needsUpdate = true;
                        child.geometry.computeFaceNormals();    
                         var tempV= $.extend(true,{},child.geometry.vertices);
				         for(var i=0; i<child.geometry.vertices.length;i++){
                             objVerts.push([tempV[i].x,tempV[i].y,tempV[i].z]);
                         }
                        
						}
					} );
                    object.scale.set(1,1,1);
					object.position.x = 0;
                    object.position.y = 0;               
                    object.name =  parseObjName(objPath);
					
                    scene.add( object );	
                    
                    // Create and Update the bbox
                    bBoxHelper = new THREE.BoundingBoxHelper(object, 0x000000);    
                    bBoxHelper.update();
                    
                    
                    // Translate to center
                    var dX = - (bBoxHelper.box.max.x + bBoxHelper.box.min.x)/2;
                    var dY = - (bBoxHelper.box.max.y + bBoxHelper.box.min.y)/2;
                    var dZ = - (bBoxHelper.box.max.z + bBoxHelper.box.min.z)/2;
                    object.applyMatrix( new THREE.Matrix4().makeTranslation(dX,dY,dZ));
                    bBoxHelper.update();
                    
                    //Copy original bbox 
                    var tempBbox= $.extend(true,{},bBoxHelper.box);
                    var bminX = tempBbox.min.x;
                    var bminY = tempBbox.min.y;
                    var bminZ = tempBbox.min.z;
                    var bmaxX = tempBbox.max.x;
                    var bmaxY = tempBbox.max.y;
                    var bmaxZ = tempBbox.max.z;
       
                    objBboxVerts.push([bminX, bminY,bminZ]);
                    objBboxVerts.push([bminX, bminY, bmaxZ]);
                    objBboxVerts.push([bminX, bmaxY, bminZ]);
                    objBboxVerts.push([bminX, bmaxY, bmaxZ]);   
                    objBboxVerts.push([bmaxX, bminY, bminZ]); 
                    objBboxVerts.push([bmaxX, bminY, bmaxZ]);  
                    objBboxVerts.push([bmaxX, bmaxY, bminZ]);
                    objBboxVerts.push([bmaxX, bmaxY, bmaxZ]);
                    
                    // Initialze morphed Bounding Box Verts
                    objMorphBboxVerts = zeros([8, 3]); 
              
//                    /scene.add(bBoxHelper);
                    
                    // Create boundingBox Spheres 
                    createBoxSpheres();
                    
                    //Add line to visualize deformation
                    createBoxLines();
                               
                    //Initialize sphere morph values to zero on object load
                    sphereMorphVals = zeros([8, 3]); 
                    
                    //Calculate initial weight matrix;
                    calcVertWeights();
                } );


}




function objLoader2(objPath){
            
			var manager = new THREE.LoadingManager();
				manager.onProgress = function ( item, loaded, total ) {
					console.log( item, loaded, total );
				};
			 
            var handMaterial = new THREE.MeshLambertMaterial({color: 0xffdfc4, transparent: true, opacity: 0.5});
            var loader = new THREE.OBJLoader( manager );
				loader.load(objPath, function ( object ) {
					object.traverse( function ( child ) {
						if ( child instanceof THREE.Mesh ) {
				        child.material = handMaterial;
                        child.geometry.computeFaceNormals();    
                       
                        
						}
				});
                
                object.name =  parseObjName(objPath);
                object.position.setZ(0);
                object.position.setY(0);
                scene.add( object );
                 object.visible = false;
                });

    
    
    
}



function updatehumanLocation(dir){
    
  // Distance to move is along y and Z after deformation
    
        scene.traverse (function (object){
        if (object.name == 'hand'){
            if(dir == 1)  object.position.setY(bBoxHelper.box.max.y - objBboxVerts[2][1]);
            if(dir == 2) object.position.setZ(bBoxHelper.box.max.z- objBboxVerts[1][2]);
  
            
                          }});
    
}


function toggleHuman(){
    humanVisible = !humanVisible;
      scene.traverse (function (object){
        if (object.name == 'hand') object.visible = humanVisible;
      });
        
isScalePressed = true;
}






function parseObjName(myPath){
    var objName = myPath.split("/");
    objName =objName[objName.length-1].split(".");  
    return objName[0];   
}



function createBoxSpheres(){
    
//Create sphere group
sphereGroup = new THREE.Object3D();
    
// Get coordinates from bounding box
var bminX = bBoxHelper.box.min.x;
var bminY = bBoxHelper.box.min.y;
var bminZ = bBoxHelper.box.min.z;
var bmaxX = bBoxHelper.box.max.x;
var bmaxY = bBoxHelper.box.max.y;
var bmaxZ = bBoxHelper.box.max.z;
    
// Make spheres and add them to gorup

var sphereRad = 5;    
    
var sph1 = drawSphere(bminX, bminY,bminZ, sphereRad);
sph1.name = "sph1";    
var sph2 = drawSphere(bminX, bminY, bmaxZ, sphereRad);
sph2.name = "sph2"; 
var sph3 = drawSphere(bminX, bmaxY, bminZ, sphereRad);
sph3.name = "sph3"; 
var sph4 = drawSphere(bminX, bmaxY, bmaxZ, sphereRad);
sph4.name = "sph4";     
var sph5 = drawSphere(bmaxX, bminY, bminZ, sphereRad);
sph5.name = "sph5";     
var sph6 = drawSphere(bmaxX, bminY, bmaxZ, sphereRad);  
sph6.name = "sph6"; 
var sph7 = drawSphere(bmaxX, bmaxY, bminZ,  sphereRad);
sph7.name = "sph7"; 
var sph8 = drawSphere(bmaxX, bmaxY, bmaxZ, sphereRad);
sph8.name = "sph8"; 

sphereGroup.add(sph1); 
sphereGroup.add(sph2);  
sphereGroup.add(sph3);  
sphereGroup.add(sph4);  
sphereGroup.add(sph5);  
sphereGroup.add(sph6);  
sphereGroup.add(sph7);  
sphereGroup.add(sph8);  
    
scene.add(sphereGroup);    
  
}



function drawSphere(x,y,z,r){
 var sphGeom = new THREE.SphereGeometry(r,64,64)
 var sphere = new THREE.Mesh(sphGeom);
 sphere.position.x = x;
 sphere.position.y = y;
 sphere.position.z = z;  
 sphere.material.transparent = true;
 sphere.material.opacity = 0.75;    
 sphere.material.color.setRGB (0.25, 0.75, 1);  
 sphere.geometry.computeFaceNormals();    
 return sphere;
}


function updateBoxSpheres(){

sphereGroup.traverse( function (sphere){
    var sphID = parseInt(sphere.name.slice(-1));
    if(isNaN(sphID) == false){    
     sphere.position.x =  objBboxVerts[sphID-1][0]+objMorphBboxVerts[sphID-1][0];
     sphere.position.y =  objBboxVerts[sphID-1][1]+objMorphBboxVerts[sphID-1][1];
     sphere.position.z =  objBboxVerts[sphID-1][2]+objMorphBboxVerts[sphID-1][2];
    }});

updateBoxLines();
}




function createBoxLines(){

//Create line group
lineGroup = new THREE.Object3D();


var line12 = drawLine(1,2);
line12.name = "line12";
line12.dynamic = true;
line12.verticesNeedUpdate = true;

var line26 = drawLine(2,6);
line26.name = "line26";

var line56 = drawLine(5,6);
line56.name = "line56";

var line15 = drawLine(1,5);
line15.name = "line15";

var line34 = drawLine(3,4);
line34.name = "line34";

var line48 = drawLine(4,8);
line48.name = "line48";

var line78 = drawLine(7,8);
line78.name = "line78";

var line37 = drawLine(3,7);
line37.name = "line37";
    
var line15 = drawLine(1,5);
line15.name = "line15";

var line13 = drawLine(1,3);
line13.name = "line13";

var line57 = drawLine(5,7);
line57.name = "line57";

var line24 = drawLine(2,4);
line24.name = "line24";

var line68 = drawLine(6,8);
line68.name = "line68"; 
     
lineGroup.add(line12);
lineGroup.add(line26);
lineGroup.add(line56);
lineGroup.add(line15);
lineGroup.add(line34);
lineGroup.add(line48);
lineGroup.add(line78);
lineGroup.add(line37);
lineGroup.add(line15);
lineGroup.add(line13);
lineGroup.add(line57);
lineGroup.add(line24);    
lineGroup.add(line68);    


scene.add(lineGroup);
    
}



function updateBoxLines(){
    lineGroup.traverse(function (line){  
        var name = line.name;
        var fromVertex = parseInt(name.slice(-2)[0]);
        var toVertex = parseInt(name.slice(-1));
            if(isNaN(fromVertex)==false && isNaN(toVertex)==false){
                line.geometry.vertices[0] = sphereGroup.getObjectByName("sph"+fromVertex.toString()).position;
                line.geometry.vertices[1] = sphereGroup.getObjectByName("sph"+toVertex.toString()).position;     
                line.geometry.verticesNeedUpdate = true;    
            }
    });
    
 
    
}





function drawLine(i,j){
var material = new THREE.LineBasicMaterial({
        color: 0x000000
    });  
var geometry = new THREE.Geometry();
   
geometry.vertices.push(new THREE.Vector3(objBboxVerts[i-1][0],objBboxVerts[i-1][1],objBboxVerts[i-1][2]));
geometry.vertices.push(new THREE.Vector3(objBboxVerts[j-1][0],objBboxVerts[j-1][1],objBboxVerts[j-1][2]));
var line = new THREE.Line(geometry, material);    
line.geometry.dynamic = true;        
return line; 
 
}






function calcVertWeights(){
var gamma = 0.00015; 
objVertWeights =zeros([objVerts.length,8]);  

for (var i=0; i<objVerts.length; i++){
    for ( var j=0; j<8;j++){
        objVertWeights[i][j] = calcVertDistance(gamma, objVerts[i], objBboxVerts[j]);
    }
 //Normalize row
    //var objRowMax = getMaxOfArray(objVertWeights[i])
    //for ( var j=0; j<8;j++){ objVertWeights[i][j] =  objVertWeights[i][j]/objRowMax;}
         }
 }


 function calcVertDistance(g,V,B){
    var dist = (V[0]-B[0])*(V[0]-B[0]) + (V[1]-B[1])*(V[1]-B[1]) + (V[2]-B[2])*(V[2]-B[2]);
    dist = Math.exp(-g*dist);
    return dist;    
    }
    



// Helper functions

function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }

    return array;
}


function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}