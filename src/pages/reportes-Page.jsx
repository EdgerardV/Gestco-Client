//	Dependencies
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

//	Styles
import styles from "../styles/reportes-Page.module.css"

//	Code
export function Reportes(props){
	const navigate = useNavigate();

	const toMenuPrincipal = () => {
		navigate("/menu-principal")
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
					<div>Periodo:</div>
					<table className={styles.tabla}>
						<tbody>
							<tr>
								<td>desde: </td>
								<td><input type="date" /></td>
							</tr>
							<tr>
								<td>hasta:</td>
								<td><input type="date" /></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles.seccionDiv}>
					<div>
						Reporte
					</div>
					<table className={styles.tabla}>
						<thead>
							<tr>
								<th>Descripción</th>
								<th>Generar</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Personal</td>
								<td><button type="button">Generar</button></td>
							</tr>
							<tr>
								<td>Equipos</td>
								<td><button type="button">Generar</button></td>
							</tr>
							<tr>
								<td>Solicitudes de equipo</td>
								<td><button type="button">Generar</button></td>
							</tr>
							<tr>
								<td>Solicitudes de mantenimiento</td>
								<td><button type="button">Generar</button></td>
							</tr>
							<tr>
								<td>Bitácoras de CTC's</td>
								<td><button type="button">Generar</button></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}