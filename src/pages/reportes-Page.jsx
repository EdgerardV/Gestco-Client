//	Dependencies
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

//	Styles
import styles from "../styles/reportes-Page.module.css"

//	Code
export function Reportes(props){
	const [fechaIni, setFechaIni] = useState(null);
	const [fechaFin, setFechaFin] = useState(null);

	const navigate = useNavigate();

	const toMenuPrincipal = () => {
		navigate("/menu-principal")
	}

	const reportePersonal = async () =>{
		window.open(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/reportes/personal`);
	}
	
	const reporteEquipos = async () =>{
		window.open(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/reportes/equipos`);
	}
	
	const reporteSolicitudesEquipo = async () =>{
		if(fechaIni === null || fechaFin === null){
			alert('ingrese Fechas de inicio y fin')
		}else{
			window.open(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/reportes/solicitudes/equipo/${fechaIni}/${fechaFin}`);
		}
	}
	
	const reporteSolicitudesMantenimiento = async () =>{
		if(fechaIni === null || fechaFin === null){
			alert('ingrese Fechas de inicio y fin')
		}else{
			window.open(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/reportes/solicitudes/mantenimiento/${fechaIni}/${fechaFin}`);
		}
	}

	const reporteBitacoraCTCs = async () =>{
		if(fechaIni === null || fechaFin === null){
			alert('ingrese Fechas de inicio y fin')
		}else{
			window.open(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/reportes/solicitudes/bitacoraCTC/${fechaIni}/${fechaFin}`);
		}
	}
	
	const fechaIniChange = (ev) => {
		setFechaIni(ev.target.value)
	}

	const fechaFinChange = (ev) => {
		setFechaFin(ev.target.value)
	}

	useEffect(()=>{
		if(!props.sesion.acceso){
			navigate("/log-in/a");
		}
	},[props, navigate])

	return (
		<div className={styles.divContenedor}>
			<div className={styles.divBotones}>
				<button type="button" onClick={toMenuPrincipal}>Regresar</button>
			</div>
			<div className={styles.divPrincipal}>
				<div className={styles.divH3}>
					<h3>Generar Reportes</h3>
				</div>
				<div className={styles.seccionDiv}>
					<h4>Reporte general</h4>
					<table className={styles.tabla}>
						<thead>
							<tr>
								<th>Reporte</th>
								<th>Generar</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Personal</td>
								<td><button type="button" onClick={reportePersonal}>Generar</button></td>
							</tr>
							<tr>
								<td>Equipos</td>
								<td><button type="button" onClick={reporteEquipos}>Generar</button></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles.seccionDiv}>
					<h4>Por Fecha</h4>
					<table className={styles.tabla}>
						<thead>
							<tr>
								<th>desde</th>
								<th>hasta</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><input onChange={fechaIniChange} type="date" /></td>
								<td><input onChange={fechaFinChange} type="date" /></td>
							</tr>
						</tbody>
					</table>
					<table className={styles.tabla}>
						<thead>
							<tr>
								<th>Reporte</th>
								<th>Generar</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Solicitudes de equipo</td>
								<td><button onClick={reporteSolicitudesEquipo} type="button">Generar</button></td>
							</tr>
							<tr>
								<td>Solicitudes de mantenimiento</td>
								<td><button onClick={reporteSolicitudesMantenimiento} type="button">Generar</button></td>
							</tr>
							<tr>
								<td>Bitácoras de CTC's</td>
								<td><button onClick={reporteBitacoraCTCs} type="button">Generar</button></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}