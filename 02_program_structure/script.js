var total=0,
		count=0,
		output = document.getElementById('output');

	function addAction(){
		while(count <= 10){
			total += count;
			count++;
		}
		output.innerHTML = total;
	}

	var result = addAction;