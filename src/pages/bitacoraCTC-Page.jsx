//	Dependencies
import { useNavigate } from "react-router-dom";

//	Styles
import styles from "../styles/bitacoraCTC-Page.module.css"

export function BitacoraCTC(){
	const navigate = useNavigate();
	const toMenuPrincipal = () =>{
		navigate("/menu-principal")
	}

	const registrarse = () => {
		navigate("/ctc/registrar")
	}


	return (
		<div className={styles.divContenedor}>
			<div className={styles.divPrincipal}>
				<div className={styles.divH3}>
					<h3>Bitácora CTC's</h3>
				</div>
				<table className={styles.tabla}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Licenciatura</th>
							<th>CTC</th>
							<th>Fecha</th>
							<th>Hora de entrada</th>
							<th>Hora de salida</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>00000001</td>
							<td>Nombre(s) aPaterno aMaterno</td>
							<td>Licenciatura 1</td>
							<td>CTC-1</td>
							<td>Fecha 1</td>
							<td>horaE 1</td>
							<td>horaS 1</td>
						</tr>
						<tr>
							<td>00000002</td>
							<td>Nombre(s) aPaterno aMaterno</td>
							<td>Licenciatura 2</td>
							<td>CTC-2</td>
							<td>Fecha 2</td>
							<td>horaE 2</td>
							<td>horaS 2</td>
						</tr>
						<tr>
							<td>00000003</td>
							<td>Nombre(s) aPaterno aMaterno</td>
							<td>Licenciatura 3</td>
							<td>CTC-3</td>
							<td>21/06/2022</td>
							<td>9:00</td>
							<td>10:00</td>
						</tr>
						<tr>
							<td>00000004</td>
							<td>Nombre(s) aPaterno aMaterno</td>
							<td>Ingeniería en sistemas Computacionales</td>
							<td>CTC-1</td>
							<td>21/06/2022</td>
							<td>16:00</td>
							<td><MarcarSalida /></td>
						</tr>
					</tbody>
				</table>

				<div className={styles.divBotones}>
					<button type="button" onClick={registrarse}>Registrarse</button>
					<button type="button" onClick={toMenuPrincipal}>Regresar</button>
				</div>
			</div>
		</div>
	);
}

function MarcarSalida(){
	return(
		<button type="button">Salir</button>
	);
}