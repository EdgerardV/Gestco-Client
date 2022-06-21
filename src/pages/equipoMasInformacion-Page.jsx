//	Dependencies
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

//	Styles
import styles from "../styles/equipoMasInformacion-Page.module.css"

export function EquipoMasInformacion(){
	const navigate = useNavigate();
	const { equipo } = useParams();

	const toEquipo = () =>{
		navigate("/equipos")
	}

	return (
		<div className={styles.divPrincipal}>
			<div className={styles.divBotones}>
				<button type="button" onClick={toEquipo}>
					Volver
				</button>
			</div>
			<div className={styles.divContent}>
				<div className={styles.divInformacion}>
					<div className={styles.divContenedor}>
						<div><b>Equipo</b></div>
						<div>{equipo}</div>
					</div>
					<div className={styles.divContenedor}>
						<div><b>Encargado</b></div>
						<div>Encargado 1</div>
					</div>
					<div className={styles.divContenedor}>
						<div><b>Departamento</b></div>
						<div>Departamento 1</div>
					</div>
					<div className={styles.divContenedor}>
						<div><b>Puesto</b></div>
						<div>Puesto 1</div>
					</div>
				</div>

				<table className={styles.tabla}>
					<thead>
						<tr>
							<th>Id</th>
							<th>Dispositivo</th>
							<th>Marca</th>
							<th>Modelo</th>
							<th>Fecha de adquisición</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Id1</td>
							<td>Dispositivo1</td>
							<td>Marca1</td>
							<td>Modelo1</td>
							<td>Fecha1</td>
						</tr>
						<tr>
							<td>Id2</td>
							<td>Dispositivo2</td>
							<td>Marca2</td>
							<td>Modelo2</td>
							<td>Fecha2</td>
						</tr>
						<tr>
							<td>Id3</td>
							<td>Dispositivo3</td>
							<td>Marca3</td>
							<td>Modelo3</td>
							<td>Fecha3</td>
						</tr>
						<tr>
							<td>Id4</td>
							<td>Dispositivo4</td>
							<td>Marca4</td>
							<td>Modelo4</td>
							<td>Fecha4</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}