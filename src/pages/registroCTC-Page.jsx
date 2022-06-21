//	Dependencies
import { useNavigate } from "react-router-dom";

//	Styles
import styles from "../styles/registroCTC-Page.module.css"

//	Code 
export function RegistroCTC(){
	const navigate = useNavigate();
	const toMenuPrincipal = () =>{
		navigate("/ctc/bitacora")
	}

	const registrarse = () => {
		navigate("/ctc/bitacora")
	}

	return(
		<div className={styles.divContenedor}>
			<div className={styles.divPrincipal}>
				<div className={styles.divH3}>
					<h3>Bitácora CTC's</h3>
				</div>

				<form>
					<table className={styles.tabla}>
						<tbody>
							<tr>
								<td>ID</td>
								<td><input type="number" placeholder="00000000" autoComplete="off" /></td>
							</tr>
							<tr>
								<td>Nombre(s)</td>
								<td><input type="text" autoComplete="off"  /></td>
							</tr>
							<tr>
								<td>Apellido Paterno</td>
								<td><input type="text" autoComplete="off" /></td>
							</tr>
							<tr>
								<td>Apellido Materno</td>
								<td><input type="text" autoComplete="off" /></td>
							</tr>
							<tr>
								<td>CTC</td>
								<td>
									<select>
										<option value="1">CTC-1</option>
										<option value="2">CTC-2</option>
										<option value="3">CTC-3</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>Licenciatura</td>
								<td>
									<select>
										<option value="1">Ingenieria en sistemas</option>
										<option value="2">Comunicación</option>
										<option value="3">Derecho</option>
									</select>
								</td>
							</tr>
						</tbody>
					</table>
					<div className={styles.divBotones}>
						<button type="button" onClick={registrarse}>Registrarse</button>
						<button type="button" onClick={toMenuPrincipal}>Regresar</button>
					</div>
				</form>
			</div>
		</div>
	);
}