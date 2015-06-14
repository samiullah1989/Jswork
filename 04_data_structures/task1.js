function range(start,end,step){
	var result = [];

	if( step == undefined){
		if(end > start){
			for(start; start<=end; start+=1){
				result.push(start);
			}
		} else {
			for(start; start>=end; start-=1){
				result.push(start);
			}
		}
	} else {
		if(end>start){
			for(start; start<=end; start+=step){
				result.push(start);
			}
		} else{
			step = step > 0 ? step : -(step);
			for(start; start>=end; start-=step){
				result.push(start);
			}
		}
	}
	
	return result;
}

function sum(numbersArray){
	var result = 0;
	for(var i=0; i<numbersArray.length; i++){
		result += numbersArray[i]; 
	}
	
	return result;
}