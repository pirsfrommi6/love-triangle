/**
 * @param preferences -
 *            an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */


module.exports = function getLoveTrianglesCount(mass = []) {
 
	var count = 0;
	for(var arr=[], n=0; n < mass.length; n++){
		if(!(arrSet(arr, mass[n]) || mass[n]-1===n || mass[n] === mass[mass[n]-1])){
			var a = mass[n];
			var b = mass[a-1];
			var c = mass[b-1];
			var d = mass[c-1];
			if(a===d){
				arr[arr.length]=a;
				arr[arr.length]=b;
				arr[arr.length]=c;
				count++;		
			}
		}
	}
	return count;
	};


function arrSet(arr=[], elem){
	for(var is, k = 0; k < arr.length; k++){
		if(arr[k] === elem) {
			return true;
		}
	}
	return false;
}


