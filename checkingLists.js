
function eoi_tatxa(etiqueta, numero=100){
	// document.getElementById(etiqueta).classList.toggle("tatxat")
	document.getElementsByTagName("label")[numero].classList.toggle("tatxat")
	document.getElementsByClassName("linia")[numero].classList.toggle("arxivat")
}

