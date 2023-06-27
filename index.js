let outputEl = document.getElementById("output");
let btn = document.querySelectorAll("button");
let bArr = Array.from(btn)
let emt = ""
bArr.forEach(btn => {
	btn.addEventListener("click" , (e) => {
	if(e.target.innerHTML == "="){
		emt = eval(emt)
		outputEl.value = emt
	}
	else if(e.target.innerHTML == "AC"){
		emt = " ";
		outputEl.value = emt
	}
	else if(e.target.innerHTML == "C"){
		emt = emt.slice(0, -1);
		outputEl.value = emt
	}
	else{
		emt += e.target.innerHTML
		outputEl.value = emt
	}

})

})

