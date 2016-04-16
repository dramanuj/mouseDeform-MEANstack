function morphVertices(scale,coord) {  
  if(isSliderContextSet){    
    scene.traverse (function (object){
    if (object.name == 'mouse'){
        var carMesh = object.children;
        morphMesh(carMesh,scale,coord);
    }
});

updateBoxSpheres();
  }
}


function morphMesh(myMesh,scale,coord){
        
    //Update on slider move
        myMesh[0].geometry.verticesNeedUpdate = true;
        myMesh[0].geometry.dynamic = true;
      
    // Translate bounding box vertices
           
if(coord<2){    
    switch (selectedSphereId){
            
                        case 0:        
                            objMorphBboxVerts[0][coord] = objBboxVerts[0][coord]*(0.5*scale) ;
                            objMorphBboxVerts[4][coord] = objBboxVerts[4][coord]*(0.5*scale) ;
                            sphereMorphVals[4][coord] =  sphereMorphVals[0][coord];
                            break;
                        
                        case 1:
                            objMorphBboxVerts[1][coord] = objBboxVerts[1][coord]*(0.5*scale) ;
                            objMorphBboxVerts[5][coord] = objBboxVerts[5][coord]*(0.5*scale) ;
                            sphereMorphVals[5][coord] =  sphereMorphVals[1][coord];
                            break;
                            
                         case 2:
                            objMorphBboxVerts[2][coord] = objBboxVerts[2][coord]*(0.5*scale) ;
                            objMorphBboxVerts[6][coord] = objBboxVerts[6][coord]*(0.5*scale) ;
                            sphereMorphVals[6][coord] =  sphereMorphVals[2][coord];
                            break;   
                            
                         case 3:
                            objMorphBboxVerts[3][coord] = objBboxVerts[3][coord]*(0.5*scale) ;
                            objMorphBboxVerts[7][coord] = objBboxVerts[7][coord]*(0.5*scale) ;
                              sphereMorphVals[7][coord] =  sphereMorphVals[3][coord];
                            break;       
                        
                        case 4:        
                            objMorphBboxVerts[0][coord] = objBboxVerts[0][coord]*(0.5*scale);
                            objMorphBboxVerts[4][coord] = objBboxVerts[4][coord]*(0.5*scale);
                              sphereMorphVals[0][coord] =  sphereMorphVals[4][coord];
                            break;
                    
                        case 5:
                            objMorphBboxVerts[1][coord] = objBboxVerts[1][coord]*(0.5*scale) ;
                            objMorphBboxVerts[5][coord] = objBboxVerts[5][coord]*(0.5*scale) ; 
                              sphereMorphVals[1][coord] =  sphereMorphVals[5][coord];
                            break;
                            
                         case 6:
                            objMorphBboxVerts[2][coord] = objBboxVerts[2][coord]*(0.5*scale) ;
                            objMorphBboxVerts[6][coord] = objBboxVerts[6][coord]*(0.5*scale) ;
                              sphereMorphVals[2][coord] =  sphereMorphVals[6][coord];
                            break;  
                            
                         case 7:
                            objMorphBboxVerts[3][coord] = objBboxVerts[3][coord]*(0.5*scale) ;
                            objMorphBboxVerts[7][coord] = objBboxVerts[7][coord]*(0.5*scale) ;
                              sphereMorphVals[3][coord] =  sphereMorphVals[7][coord];
                            break;
                        
                        default:    
                }}
    
      if (coord ==2){
          switch (selectedSphereId){
                        case 0:        
                            objMorphBboxVerts[0][coord] = objBboxVerts[0][coord]*(0.5*scale) ;
                            objMorphBboxVerts[1][coord] = objBboxVerts[1][coord]*(0.5*scale) ;
                            objMorphBboxVerts[4][coord] = objBboxVerts[4][coord]*(0.5*scale) ;
                            objMorphBboxVerts[5][coord] = objBboxVerts[5][coord]*(0.5*scale) ;
                            sphereMorphVals[1][coord] =  sphereMorphVals[0][coord];
                            sphereMorphVals[4][coord] =  sphereMorphVals[0][coord];
                            sphereMorphVals[5][coord] =  sphereMorphVals[0][coord];
                            break;
                        
                        case 1:
                           objMorphBboxVerts[0][coord] = objBboxVerts[0][coord]*(0.5*scale) ;
                            objMorphBboxVerts[1][coord] = objBboxVerts[1][coord]*(0.5*scale) ;
                            objMorphBboxVerts[4][coord] = objBboxVerts[4][coord]*(0.5*scale) ;
                            objMorphBboxVerts[5][coord] = objBboxVerts[5][coord]*(0.5*scale) ;
                            sphereMorphVals[0][coord] =  sphereMorphVals[1][coord];
                            sphereMorphVals[4][coord] =  sphereMorphVals[1][coord];
                            sphereMorphVals[5][coord] =  sphereMorphVals[1][coord];
                            break;
                            
                         case 2:
                            objMorphBboxVerts[2][coord] = objBboxVerts[2][coord]*(0.5*scale) ;
                            objMorphBboxVerts[3][coord] = objBboxVerts[3][coord]*(0.5*scale) ;
                            objMorphBboxVerts[6][coord] = objBboxVerts[6][coord]*(0.5*scale) ;
                            objMorphBboxVerts[7][coord] = objBboxVerts[7][coord]*(0.5*scale) ;
                            sphereMorphVals[3][coord] =  sphereMorphVals[2][coord];
                            sphereMorphVals[6][coord] =  sphereMorphVals[2][coord];
                            sphereMorphVals[7][coord] =  sphereMorphVals[2][coord]; 
                            break;
                            
                         case 3:
                           objMorphBboxVerts[2][coord] = objBboxVerts[2][coord]*(0.5*scale) ;
                            objMorphBboxVerts[3][coord] = objBboxVerts[3][coord]*(0.5*scale) ;
                            objMorphBboxVerts[6][coord] = objBboxVerts[6][coord]*(0.5*scale) ;
                            objMorphBboxVerts[7][coord] = objBboxVerts[7][coord]*(0.5*scale) ;
                            sphereMorphVals[2][coord] =  sphereMorphVals[3][coord];
                            sphereMorphVals[6][coord] =  sphereMorphVals[3][coord];
                            sphereMorphVals[7][coord] =  sphereMorphVals[3][coord];
                            break;       
                        
                        case 4:        
                           objMorphBboxVerts[0][coord] = objBboxVerts[0][coord]*(0.5*scale) ;
                            objMorphBboxVerts[1][coord] = objBboxVerts[1][coord]*(0.5*scale) ;
                            objMorphBboxVerts[4][coord] = objBboxVerts[4][coord]*(0.5*scale) ;
                            objMorphBboxVerts[5][coord] = objBboxVerts[5][coord]*(0.5*scale) ;
                            sphereMorphVals[1][coord] =  sphereMorphVals[4][coord];
                            sphereMorphVals[0][coord] =  sphereMorphVals[4][coord];
                            sphereMorphVals[5][coord] =  sphereMorphVals[4][coord];
                            break;
                    
                        case 5:
                           objMorphBboxVerts[0][coord] = objBboxVerts[0][coord]*(0.5*scale) ;
                            objMorphBboxVerts[1][coord] = objBboxVerts[1][coord]*(0.5*scale) ;
                            objMorphBboxVerts[4][coord] = objBboxVerts[4][coord]*(0.5*scale) ;
                            objMorphBboxVerts[5][coord] = objBboxVerts[5][coord]*(0.5*scale) ;
                            sphereMorphVals[1][coord] =  sphereMorphVals[5][coord];
                            sphereMorphVals[4][coord] =  sphereMorphVals[5][coord];
                            sphereMorphVals[0][coord] =  sphereMorphVals[5][coord];
                            break;
                            
                         case 6:
                            objMorphBboxVerts[2][coord] = objBboxVerts[2][coord]*(0.5*scale) ;
                            objMorphBboxVerts[3][coord] = objBboxVerts[3][coord]*(0.5*scale) ;
                            objMorphBboxVerts[6][coord] = objBboxVerts[6][coord]*(0.5*scale) ;
                            objMorphBboxVerts[7][coord] = objBboxVerts[7][coord]*(0.5*scale) ;
                            sphereMorphVals[3][coord] =  sphereMorphVals[6][coord];
                            sphereMorphVals[2][coord] =  sphereMorphVals[6][coord];
                            sphereMorphVals[7][coord] =  sphereMorphVals[6][coord];
                            break;  
                            
                         case 7:
                            objMorphBboxVerts[2][coord] = objBboxVerts[2][coord]*(0.5*scale) ;
                            objMorphBboxVerts[3][coord] = objBboxVerts[3][coord]*(0.5*scale) ;
                            objMorphBboxVerts[6][coord] = objBboxVerts[6][coord]*(0.5*scale) ;
                            objMorphBboxVerts[7][coord] = objBboxVerts[7][coord]*(0.5*scale) ;
                            sphereMorphVals[3][coord] =  sphereMorphVals[7][coord];
                            sphereMorphVals[6][coord] =  sphereMorphVals[7][coord];
                            sphereMorphVals[2][coord] =  sphereMorphVals[7][coord];
                            break;
                        
                        default:    
                }
          
          
            
      }
    
    
            // Update vertices in X and Y directions
    
            var deltaWeightMatrix = multiplyMatrices(objVertWeights,objMorphBboxVerts);
            for(var i=0;i<myMesh[0].geometry.vertices.length;i++){ 
                myMesh[0].geometry.vertices[i].x = objVerts[i][0] + 1.25*deltaWeightMatrix[i][0]; 
                myMesh[0].geometry.vertices[i].y = objVerts[i][1] + 1.25*deltaWeightMatrix[i][1];       
                myMesh[0].geometry.vertices[i].z = objVerts[i][2]*(1+0.05*deltaWeightMatrix[i][2]);    
            }
    
    //}
    
//    else if (coord ==2){
//         for(var i=0;i<myMesh[0].geometry.vertices.length;i++){ 
//                myMesh[0].geometry.vertices[i].z = objVerts[i][2]*(1+0.5*scale) ;
//         }
//        
//        objMorphBboxVerts[1][coord] = objBboxVerts[1][coord]*scale;
//        objMorphBboxVerts[5][coord] = objBboxVerts[5][coord]*scale;
//        objMorphBboxVerts[3][coord] = objBboxVerts[3][coord]*scale;
//        objMorphBboxVerts[7][coord] = objBboxVerts[7][coord]*scale;
//                
//    }
                    
    
    
    
    bBoxHelper.update();
}   


//function morphMesh(myMesh,scale,coord){
//        
//    //Update on slider move
//        myMesh[0].geometry.verticesNeedUpdate = true;
//        myMesh[0].geometry.dynamic = true;
//      
//    // Translate bounding box vertices
//           
//if(coord!=2){    
//    switch (selectedSphereId){
//            
//                        case 0:        
//                            objMorphBboxVerts[0][coord] = objBboxVerts[0][coord]*(0.5*scale) ;
//                            objMorphBboxVerts[4][coord] = objBboxVerts[4][coord]*(0.5*scale) ;
//                            sphereMorphVals[4][coord] =  sphereMorphVals[0][coord];
//            
//                            break;
//                        
//                        case 1:
//                            objMorphBboxVerts[1][coord] = objBboxVerts[1][coord]*(0.5*scale) ;
//                            objMorphBboxVerts[5][coord] = objBboxVerts[5][coord]*(0.5*scale) ;
//                            sphereMorphVals[5][coord] =  sphereMorphVals[1][coord];
//                            break;
//                            
//                         case 2:
//                            objMorphBboxVerts[2][coord] = objBboxVerts[2][coord]*(0.5*scale) ;
//                            objMorphBboxVerts[6][coord] = objBboxVerts[6][coord]*(0.5*scale) ;
//                            sphereMorphVals[6][coord] =  sphereMorphVals[2][coord];
//                            break;   
//                            
//                         case 3:
//                            objMorphBboxVerts[3][coord] = objBboxVerts[3][coord]*(0.5*scale) ;
//                            objMorphBboxVerts[7][coord] = objBboxVerts[7][coord]*(0.5*scale) ;
//                              sphereMorphVals[7][coord] =  sphereMorphVals[3][coord];
//                            break;       
//                        
//                        case 4:        
//                            objMorphBboxVerts[0][coord] = objBboxVerts[0][coord]*(0.5*scale);
//                            objMorphBboxVerts[4][coord] = objBboxVerts[4][coord]*(0.5*scale);
//                              sphereMorphVals[0][coord] =  sphereMorphVals[4][coord];
//                            break;
//                    
//                        case 5:
//                            objMorphBboxVerts[1][coord] = objBboxVerts[1][coord]*(0.5*scale) ;
//                            objMorphBboxVerts[5][coord] = objBboxVerts[5][coord]*(0.5*scale) ; 
//                              sphereMorphVals[1][coord] =  sphereMorphVals[5][coord];
//                            break;
//                            
//                         case 6:
//                            objMorphBboxVerts[2][coord] = objBboxVerts[2][coord]*(0.5*scale) ;
//                            objMorphBboxVerts[6][coord] = objBboxVerts[6][coord]*(0.5*scale) ;
//                              sphereMorphVals[2][coord] =  sphereMorphVals[6][coord];
//                            break;  
//                            
//                         case 7:
//                            objMorphBboxVerts[3][coord] = objBboxVerts[3][coord]*(0.5*scale) ;
//                            objMorphBboxVerts[7][coord] = objBboxVerts[7][coord]*(0.5*scale) ;
//                              sphereMorphVals[3][coord] =  sphereMorphVals[7][coord];
//                            break;
//                        
//                        default:    
//                }
//    
//    
//            // Update vertices in X and Y directions
//    
//            var deltaWeightMatrix = multiplyMatrices(objVertWeights,objMorphBboxVerts);
//            for(var i=0;i<myMesh[0].geometry.vertices.length;i++){ 
//                myMesh[0].geometry.vertices[i].x = objVerts[i][0] + deltaWeightMatrix[i][0]; 
//                myMesh[0].geometry.vertices[i].y = objVerts[i][1] + deltaWeightMatrix[i][1];       
//            }
//    
//    }
//    
//    else if (coord ==2){
//         for(var i=0;i<myMesh[0].geometry.vertices.length;i++){ 
//                myMesh[0].geometry.vertices[i].z = objVerts[i][2]*(1+0.5*scale) ;
//         }
//        
//        objMorphBboxVerts[1][coord] = objBboxVerts[1][coord]*scale;
//        objMorphBboxVerts[5][coord] = objBboxVerts[5][coord]*scale;
//        objMorphBboxVerts[3][coord] = objBboxVerts[3][coord]*scale;
//        objMorphBboxVerts[7][coord] = objBboxVerts[7][coord]*scale;
//                
//    }
//                    
//    
//    
//    
//    bBoxHelper.update();
//}   





    
    
function setMorphSphere(sphName){
    
    sphereGroup.traverse(function(child){ 
    
    if (child instanceof THREE.Mesh){     
    child.material.color.setRGB(0.25, 0.75, 1);
    if (child.name == sphName){            
          child.material.color.setRGB(1,0,0);
          setSliderContext(child.name.slice(-1)); //sliders.js
          
        }}
        
    });
        
}
function resetMorphData(){
   console.log('ping');
   if(confirm("Do you really want to reset? All changes will be lost!")){
          $("#sliderOne").ionRangeSlider("update",{from:0});
          $("#sliderTwo").ionRangeSlider("update",{from:0});
          $("#sliderThree").ionRangeSlider("update",{from:0});
       
        //Initialize sphere morph values to zero on object load
         sphereMorphVals = zeros([8, 3]); 
       
        scene.traverse (function (object){
        if (object.name == 'mouse'){
        var carMesh = object.children;
        carMesh[0].geometry.verticesNeedUpdate = true;
        carMesh[0].geometry.dynamic = true;         
        for(var i=0;i<carMesh[0].geometry.vertices.length;i++){ 
                carMesh[0].geometry.vertices[i].x = objVerts[i][0];
                carMesh[0].geometry.vertices[i].y = objVerts[i][1] ;
                carMesh[0].geometry.vertices[i].z = objVerts[i][2] ;    
        }
    }});
    bBoxHelper.update();
    objMorphBboxVerts = zeros([8,3])
    updateBoxSpheres();   
    var downloadLink = document.getElementById('downloadlink');
    downloadLink.style.display = 'none';
    updatehumanLocation(1);
    updatehumanLocation(2);
   }
}



// Helper functions

function multiplyMatrices(first, second) {
    var newMatrix = [],
        newWidth = second[0].length,
        newHeight = first.length;
    //iterating through first matrix rows
    for (var row = 0; row < newHeight; row++) {
        newMatrix[row] = [];
        //iterating through second matrix columns
        for (var column = 0; column < newWidth; column++) { 
            var sum = 0;
            //calculating sum of pairwise products
            for (var index = 0; index < first[0].length; index++) {
                sum += first[row][index] * second[index][column];
            }
            newMatrix[row][column] = sum;
        }
    }
    return newMatrix;
}