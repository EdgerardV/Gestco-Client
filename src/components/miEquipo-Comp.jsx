//	Styles
import styles from "../styles/miEquipo-Comp.module.css"

export function MiEquipo(){
	return (
		<table className={styles.tabla}>
			<thead>
				<tr>
					<th>Id</th>
					<th>Dispositivo</th>
					<th>Marca</th>
					<th>Modelo</th>
					<th>Fecha de Adquisición</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>id 1</td>
					<td>Dispositivo 1</td>
					<td>Marca 1</td>
					<td>Modelo 1</td>
					<td>Fecha 1</td>
				</tr>
				<tr>
					<td>id 2</td>
					<td>Dispositivo 2</td>
					<td>Marca 2</td>
					<td>Modelo 2</td>
					<td>Fecha 2</td>
				</tr>
				<tr>
					<td>id 3</td>
					<td>Dispositivo 3</td>
					<td>Marca 3</td>
					<td>Modelo 3</td>
					<td>Fecha 3</td>
				</tr>
			</tbody>
		</table>
	);
}