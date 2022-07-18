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
		case 0:
			return "Enero";
		case 1:
			return "Febrero";
		case 2:
			return "Marzo";
		case 3:
			return "Abril";
		case 4:
			return "Mayo";
		case 5:
			return "Junio";
		case 6:
			return "Julio";
		case 7:
			return "Agosto";
		case 8:
			return "Septiembre";
		case 9:
			return "Octubre";
		case 10:
			return "Noviembre";
		case 11:
			return "Diciembre";
		default:
			return "Inexistente";
	}
}

module.exports = {
	extraerFecha,
	extraerHora,
	getMes
}