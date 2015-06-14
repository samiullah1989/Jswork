function multiplier(factor){
	return function (number) {
		return factor * number;
	}
}

var twice = multiplier(2);
console.log(twice(5));

	var result = document.getElementById('result');
	var resultEven = document.getElementById('resultEven');
	var resultCountBs = document.getElementById('resultCountBs');
	var resultCountChars = document.getElementById('resultCountChars');
document.forms.calculateMin.addEventListener("submit", function  (evt) {
	evt.preventDefault();
	var value1 = document.getElementById('value1').value;
	var value2 = document.getElementById('value2').value;
	result.innerHTML = min(parseInt(value1,10), parseInt(value2,10));

});

document.forms.isEven.addEventListener("submit", function  (evt) {
	evt.preventDefault();
	var value1 = document.getElementById('valueEven').value;
	resultEven.innerHTML = isEven(value1);

});
document.forms.countBs.addEventListener("submit", function  (evt) {
	evt.preventDefault();
	var value1 = document.getElementById('countBs').value;
	resultCountBs.innerHTML = countBs(value1);

});

document.forms.countChars.addEventListener("submit", function  (evt) {
	evt.preventDefault();
	var value1 = document.getElementById('charString').value;
	var value2 = document.getElementById('charCount').value;
	resultCountChars.innerHTML = countChars(value1, value2);

});

function min(value_1, value_2){
	if(value_1 < value_2){
		return value_1;
	} else{
		return value_2;
	}
}

function isEven (number) {
	return -number % 2 == 0 ? true : false;
}

function countBs (string) {
	var i, count=0;
	for (var i = string.length - 1; i >= 0; i--) {
		if(string[i] == "B"){
			count++;
		}
	};

	return count;
}

function countChars (string, char) {
	var i, count=0;
	for (var i = string.length - 1; i >= 0; i--) {
		if(string[i] == char){
			count++;
		}
	};

	return count;
}

