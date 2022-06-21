//	Dependencies
import { useNavigate } from "react-router-dom"

//	Styles
import styles from "../styles/solicitudesMantenimiento-Page.module.css"

export function SolicitudesMantenimiento(){
	const navigate = useNavigate();
	
	const toMenuPrincipal = () =>{
		navigate("/menu-principal")
	}

	const toSolicitarMantenimiento = () => {
		navigate("/mantenimiento/solicitar")
	}


	return (
		<div className={styles.divContenedor}>
			<div className={styles.divPrincipal}>
				<div className={styles.divH3}>
					<h3>Mantenimiento Solicitado</h3>
				</div>
				<table className={styles.tabla}>
					<thead>
						<tr>
							<th>Tipo de Problema</th>
							<th>Condición</th>
							<th>Descripción</th>
							<th>Fecha</th>
							<th>Cancelar Solicitud</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Mecánico</td>
							<td>Crítico</td>
							<td>Descripción del material solicitado 1</td>
							<td>Fecha 1</td>
							<td><button type="button">Cancelar</button></td>
						</tr>
						<tr>
							<td>Eléctrico</td>
							<td>Medio</td>
							<td>Descripción del material solicitado 2</td>
							<td>Fecha 2</td>
							<td><button type="button">Cancelar</button></td>
						</tr>
						<tr>
							<td>Software</td>
							<td>Normal</td>
							<td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</td>
							<td>18/06/2022</td>
							<td><button type="button">Cancelar</button></td>
						</tr>
					</tbody>
				</table>

				<div className={styles.divBotones}>
					<button type="button" onClick={toSolicitarMantenimiento}>Nueva Solicitud</button>
					<button type="button" onClick={toMenuPrincipal}>Regresar</button>
				</div>
			</div>
		</div>
	);
}