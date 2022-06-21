//	Dependencies
import { useNavigate } from "react-router-dom";

//	Styles
import styles from "../styles/masEquipos-Comp.module.css"

export function MasEquipos(){
	const navigate = useNavigate();
	let idElement = "equipo1";
	return(
		<table className={styles.tabla}>
			<thead>
				<tr>
					<th>Id</th>
					<th>Encargado</th>
					<th>Departamento</th>
					<th>Puesto</th>
					<th>Más Información</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>id 1</td>
					<td>Encargado 1</td>
					<td>Departamento 1</td>
					<td>Puesto 1</td>
					<td>
						<button type="button" onClick={() => {
							navigate("/equipos/" + idElement)
						}}>
						Más Información
						</button>
					</td>
				</tr>
				<tr>
					<td>id 2</td>
					<td>Encargado 2</td>
					<td>Departamento 2</td>
					<td>Puesto 2</td>
					<td><button type="button">Más Información</button></td>
				</tr>
				<tr>
					<td>id 3</td>
					<td>Encargado 3</td>
					<td>Departamento 3</td>
					<td>Puesto 3</td>
					<td><button type="button">Más Información</button></td>
				</tr>
				<tr>
					<td>id 4</td>
					<td>Encargado 4</td>
					<td>Departamento 4</td>
					<td>Puesto 4</td>
					<td><button type="button">Más Información</button></td>
				</tr>
			</tbody>
		</table>
	);
}