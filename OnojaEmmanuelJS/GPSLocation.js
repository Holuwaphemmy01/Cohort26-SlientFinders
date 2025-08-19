function gPSFilter(gpsInput){

let newGPSRECORD = [];
for (let wrongInput in gpsInput) {
  if (gpsInput[wrongInput] !== null || gpsInput[wrongInput] !== undefined  ) {
    newGPSRECORD.push(gpsInput[wrongInput]);
	  }
	}

return [newGPSRECORD]
}

let gpsInput = [ "34_43_43", null, undefined, "34_43_43", null, undefined, "34_43_43", null, undefined, "34_43_43", null, undefined, "34_465_43", null, undefined, ];
let result = gPSFilter(gpsInput);

console.log(result);

