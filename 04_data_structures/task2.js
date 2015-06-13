function reverseArray(array) {
	var out = 0, 
		arrayLength = array.length,
		resultantArray = []
	for(var i=0; i<arrayLength; i++){
		out = array.shift();
		resultantArray.unshift(out);
	}
	
	return resultantArray;
}

