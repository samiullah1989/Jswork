function logEach(array) {
	for (var i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
}

function logThem(value) {
	console.log(value);
}

function forEachArray(array, action) {
	for (var i = 0; i < array.length; i++) {
		action(array[i]);
	}
}

var numbers = [1,2,3,4,5,6], sum = 0;

forEachArray(numbers, function(number){
	sum += number;
});

console.log(sum);

function unless(test, then){
	if(!test) then();
}

function repeat(times, body) {
	for(var i=0; i<times; i++) body(i);
}

repeat(3, function(n){
	unless(n % 2, function(){
		console.log(n, "is even");
	});
});

var ancestory = JSON.parse(ANCESTORY_FILE);

function filter(array, test	) {
	var passed = [];
	for (var i = 0; i < array.length; i++) {
		if(test(array[i])){
			passed.push(array[i]);
		}
	}
	return passed;
}


function map(array, transform) {
	var mapped = [];
	for (var i = 0; i < array.length; i++) {
		mapped.push(transform(array[i]));		
	}
	return mapped;
}




