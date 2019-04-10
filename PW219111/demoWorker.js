var i = 0;

function cuenta(){
	i = i + 1;
	// Manda mensaje a la pagina
	postMessage(i);
	// Cada 500 milisegundos ejecuta la cuenta() de nuevo
	setTimeout("cuenta()", 500);
}
cuenta();