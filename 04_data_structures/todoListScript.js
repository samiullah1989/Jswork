var todoList = ["Hair Cut", "Brush"];
var listContainer = document.getElementById('list');

function rememberTo(task){
	todoList.push(task);
	reloadList();
}

function whatIsNext(){
	todoList.shift();
	reloadList();
}

function urRememberTo(task){
	todoList.unshift(task);
	reloadList();
}

function reloadList(){
	listContainer.innerHTML = "";
	
	if(todoList.length !== 0){
		var ul = document.createElement('ul');
		for(var list in todoList){
			console.log(todoList[list]); 
			var el = document.createElement('li');
			el.innerText = todoList[list];
			ul.appendChild(el);
		}
		
		listContainer.appendChild(ul);		
	} else {
		listContainer.innerHTML = "<li class='empty'>There is no task to do.<li>";
	}
	
	
}

window.addEventListener('load', reloadList);