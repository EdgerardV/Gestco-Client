function extraerFecha(fecha){
	let fechaTmp = new Date(fecha);
	let tmp = fechaTmp.getDate() + " / " + getMes(fechaTmp.getMonth()) + " / " +fechaTmp.getFullYear()
	return tmp
}

function extraerHora(hora){
	let p = hora.split(":")

	return p[0] + ":" + p[1];
}

function getMes(numero){
	switch(numero){
		case 1:
			return "Enero";
		case 2:
			return "Febrero";
		case 3:
			return "Marzo";
		case 4:
			return "Abril";
		case 5:
			return "Mayo";
		case 6:
			return "Junio";
		case 7:
			return "Julio";
		case 8:
			return "Agosto";
		case 9:
			return "Septiembre";
		case 10:
			return "Octubre";
		case 11:
			return "Noviembre";
		case 12:
			return "Diciembre";
		default:
			return "Inexistente";
	}
}

module.exports = {
	extraerFecha,
	extraerHora
}