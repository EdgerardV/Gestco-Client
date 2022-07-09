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

	const registrarse = async ev => {
		ev.preventDefault();
		console.log(
			
		)
		let cuerpo = {
			matricula: ev.target.matricula.value,
			nombres: ev.target.nombres.value + " " + ev.target.aPaterno.value + " " + ev.target.aMaterno.value,
			CTC: ev.target.CTC.value,
			licenciatura: ev.target.licenciatura.value
		}
		
		const res = await fetch('http://localhost:3001/bitacoraCTC/registrar',{
			method: "POST",
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			 },
			body: JSON.stringify(cuerpo)
		})
		const data = await res.json()
		if(data.exito){
			alert("La solicitud se realizó con éxito!");
			ev.target.matricula.value = ""
			ev.target.nombres.value = ""
			ev.target.aPaterno.value = ""
			ev.target.aMaterno.value = ""
		}
	}

	return(
		<div className={styles.divContenedor}>
			<div className={styles.divPrincipal}>
				<div className={styles.divH3}>
					<h3>Bitácora CTC's</h3>
				</div>

				<form onSubmit={registrarse}>
					<table className={styles.tabla}>
						<tbody>
							<tr>
								<td>ID</td>
								<td><input name="matricula" type="number" placeholder="00000000" autoComplete="off" required/></td>
							</tr>
							<tr>
								<td>Nombre(s)</td>
								<td><input name="nombres" type="text" autoComplete="off" required /></td>
							</tr>
							<tr>
								<td>Apellido Paterno</td>
								<td><input name="aPaterno" type="text" autoComplete="off"  required/></td>
							</tr>
							<tr>
								<td>Apellido Materno</td>
								<td><input name="aMaterno" type="text" autoComplete="off"  required/></td>
							</tr>
							<tr>
								<td>CTC</td>
								<td>
									<select name="CTC">
										<option value="CTC-1">CTC-1</option>
										<option value="CTC-2">CTC-2</option>
										<option value="CTC-3">CTC-3</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>Licenciatura</td>
								<td>
									<select name="licenciatura">
										<option value="Ingenieria en sistemas">Ingenieria en sistemas</option>
										<option value="Comunicación">Comunicación</option>
										<option value="Derecho">Derecho</option>
									</select>
								</td>
							</tr>
						</tbody>
					</table>
					<div className={styles.divBotones}>
						<button className={styles.botonRegistrar} type="submit">Registrarse</button>
						<button className={styles.botonRegresar} type="button" onClick={toMenuPrincipal}>Regresar</button>
					</div>
				</form>
			</div>
		</div>
	);
}