const prompt = require('prompt-sync')()
function trafficLight(checkTrafficLight) {

let colour = prompt('Enter Colour: ');

   if (colour.trim().toLowerCase() === "red") {
 
        console.log("Stop");

    }else if(colour.trim().toLowerCase() === "yellow") {

        console.log("Wait");

     }else{

	console.log("Go");
	}


}
 trafficLight();



