function makeSlider(){
        $("#sliderOne").ionRangeSlider({
            min: -100,
            max: 100,
            from:0,
            postfix: "%",
            type: 'single',
            step: 5,
            prettify: true,
            hasGrid: false,
            hideMinMax: false,
		onChange: function (obj) { if(isSliderContextSet){morphVertices(obj.fromNumber/obj.max,'0');sphereMorphVals[selectedSphereId][0] = obj.fromNumber;}},
        onFinish: function (obj) { if(isSliderContextSet){writeStateValues();}},    
	  });

    
    $("#sliderTwo").ionRangeSlider({
            min: -100,
            max: 100,
            from:0,
            postfix: "%",
            type: 'single',
            step: 5,
            prettify: true,
            hasGrid: false,
            hideMinMax: false,
		onChange: function (obj) {if(isSliderContextSet){morphVertices(obj.fromNumber/obj.max,'1');  sphereMorphVals[selectedSphereId][1] = obj.fromNumber;}},
        onFinish: function (obj) { if(isSliderContextSet){updatehumanLocation(1); writeStateValues();}}, 
	  });
    
    $("#sliderThree").ionRangeSlider({
            min: -100,
            max: 100,
            from:0,
            postfix: "%",
            type: 'single',
            step: 5,
            prettify: true,
            hasGrid: false,
            hideMinMax: false,
		onChange: function (obj) {if(isSliderContextSet){morphVertices(obj.fromNumber/obj.max,'2');  sphereMorphVals[selectedSphereId][2] = obj.fromNumber;}},
                                                        //{if(isSliderContextSet){morphVertices(obj.fromNumber/obj.max,'2');
                                                        // for (var i=0;i<8;i++){
                                                       //  sphereMorphVals[i][2] = obj.fromNumber;
                                                       //  }}},
         onFinish: function (obj) { if(isSliderContextSet){updatehumanLocation(2); writeStateValues();}}, 
	  });
    
updateSlider();    

};
            



function setSliderContext(sphereDigitString){
    var thisSphMorphVals = sphereMorphVals[parseInt(sphereDigitString)-1];
    selectedSphereId = parseInt(sphereDigitString)-1;
    isSliderContextSet = true;
    $("#sliderOne").ionRangeSlider("update",{from:thisSphMorphVals[0]});
    $("#sliderTwo").ionRangeSlider("update",{from:thisSphMorphVals[1]});
    $("#sliderThree").ionRangeSlider("update",{from:thisSphMorphVals[2]});
     
}