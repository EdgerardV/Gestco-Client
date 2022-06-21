//	Dependencies
import { useNavigate } from "react-router-dom";

//	Styles
import styles from "../styles/solicitudesEquipo-Page.module.css"

export function SolicitudesEquipo(){
	const navigate = useNavigate();
	const toMenuPrincipal = () =>{
		navigate("/menu-principal")
	}

	const toSolicitarEquipo = () => {
		navigate("/equipo/solicitar")
	}


	return (
		<div className={styles.divContenedor}>
			<div className={styles.divPrincipal}>
				<div className={styles.divH3}>
					<h3>Equipo Solicitado</h3>
				</div>
				<table className={styles.tabla}>
					<thead>
						<tr>
							<th>Cantidad (Pzs)</th>
							<th>Descripción</th>
							<th>Justificación</th>
							<th>Fecha</th>
							<th>Cancelar Solicitud</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>5</td>
							<td>Descripción del material solicitado 1</td>
							<td>Justificación del material solicitado 1</td>
							<td>Fecha 1</td>
							<td><button type="button">Cancelar</button></td>
						</tr>
						<tr>
							<td>01</td>
							<td>Descripción del material solicitado 2</td>
							<td>Justificación del material solicitado 2</td>
							<td>Fecha 2</td>
							<td><button type="button">Cancelar</button></td>
						</tr>
						<tr>
							<td>15</td>
							<td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</td>
							<td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
							<td>18/06/2022</td>
							<td><button type="button">Cancelar</button></td>
						</tr>
						<tr>
							<td>1</td>
							<td>Descripción del material solicitado 4</td>
							<td>Justificación del material solicitado 4</td>
							<td>Fecha 4</td>
							<td><button type="button">Cancelar</button></td>
						</tr>
					</tbody>
				</table>

				<div className={styles.divBotones}>
					<button type="button" onClick={toSolicitarEquipo}>Nueva Solicitud</button>
					<button type="button" onClick={toMenuPrincipal}>Regresar</button>
				</div>
			</div>
		</div>
	);
}