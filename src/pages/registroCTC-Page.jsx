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

		let cuerpo = {
			matricula: ev.target.matricula.value,
			nombres: ev.target.nombres.value + " " + ev.target.aPaterno.value + " " + ev.target.aMaterno.value,
			CTC: ev.target.CTC.value,
			licenciatura: ev.target.licenciatura.value
		}
		
		const res = await fetch(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/bitacoraCTC/registrar`,{
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
										<option value="Administración de Empresas">Administración de Empresas</option>
										<option value="Administración de Empresas Turísticas">Administración de Empresas Turísticas</option>
										<option value="Administración de Negocios">Administración de Negocios</option>
										<option value="Administración Empresarial">Administración Empresarial</option>
										<option value="Administración y Dirección Empresarial">Administración y Dirección Empresarial</option>
										<option value="Arquitectura">Arquitectura</option>
										<option value="Ciencias y Técnicas de la Comunicación">Ciencias y Técnicas de la Comunicación</option>
										<option value="Comercio y Negocios Internacionales">Comercio y Negocios Internacionales</option>
										<option value="Contabilidad Financiera">Contabilidad Financiera</option>
										<option value="Contabilidad y Finanzas">Contabilidad y Finanzas</option>
										<option value="Derecho">Derecho</option>
										<option value="Derecho y Ciencias Jurídicas">Derecho y Ciencias Jurídicas</option>
										<option value="Diseño Gráfico Digital">Diseño Gráfico Digital</option>
										<option value="Educación">Educación</option>
										<option value="Educación Física, Recreación y Deporte">Educación Física, Recreación y Deporte</option>
										<option value="Educación y Tecnologías para el Aprendizaje">Educación y Tecnologías para el Aprendizaje</option>
										<option value="Ingeniería de Software y Sistemas Computacionales">Ingeniería de Software y Sistemas Computacionales</option>
										<option value="Juicios Orales">Juicios Orales</option>
										<option value="Mercadotecnia">Mercadotecnia</option>
										<option value="Mercadotécnia Estratégica">Mercadotécnia Estratégica</option>
										<option value="Mercadotecnia y Medios Digitales">Mercadotecnia y Medios Digitales</option>
										<option value="Negocios Internacionales">Negocios Internacionales</option>
										<option value="Psicología">Psicología</option>
										<option value="Tecnologías de la Información y Comunicación">Tecnologías de la Información y Comunicación</option>
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