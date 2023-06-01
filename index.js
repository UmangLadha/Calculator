let outputEl = document.getElementById("output");
let btn = document.querySelectorAll("button");
let btnArr = Array.from(btn);
let Str = "";
btnArr.forEach(button =>{
	button.addEventListener('click', (e) => {
	if(e.target.innerHTML == "="){
		Str = eval(Str);
		outputEl.value = Str;
	}
	else if(e.target.innerHTML = "AC"){
		Str = "";
		outputEl.value = Str;
	}
	else if(e.target.innerHTML = "DEL"){
		outputEl.value = "";}

	else{
		Str += e.target.innerHTML;
		outputEl.value = Str;
	}

})

})

