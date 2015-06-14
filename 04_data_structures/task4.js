var obj = {name: "sami", age: 1};
var obj2 = {here: {is: "an"}, object: 2};
var valuesInObject1 = 0, valuesInObject2 = 0;
var firstArrayKeys = [], secondArrayKeys = [];
var firstArrayValues = [], secondArrayValues = [];
var result = 0;

function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    result = base * power(base, exponent - 1);
	return result;
}

function deepEqual(val1,val2) {
	if(typeof val1 != typeof val2){
		return false;
	}
	
	if(typeof val1 == "object"){
		for(var items in val1){
			// do we have same number of properties
			valuesInObject1++;
			firstArrayKeys.push(items);
			firstArrayValues.push(val1[items]);
			
		}
		for(var items in val2){
			// do we have same number of properties
			valuesInObject2++;
			secondArrayKeys.push(items);
			secondArrayValues.push(val1[items]);
			
			
		}
		
		if(valuesInObject1 != valuesInObject2){
			return false;
		} else {
			for(var i=0; i<= valuesInObject1; i++){
				if(firstArrayKeys[i] != secondArrayKeys[i]){
					console.log("Both object dont have equal type of props");
					return false;
				}
			}
			
			for(var i=0; i<= valuesInObject1; i++){
				if(firstArrayValues[i] != secondArrayValues[i]){
					console.log("Both object dont have equal type of Values");
					return false;
				}
			}
			
			
		
			
		} 
	}
	
	
	//return val1 === val2 ? true : false;
}






