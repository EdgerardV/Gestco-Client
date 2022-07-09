//	Dependencies
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

//	Styles
import styles from "../styles/solicitarMantenimiento-Page.module.css"

//	Code
export function SolicitarMantenimiento(props){
	const hintDescripcion = "Describa el problema de forma detallada"

	const navigate = useNavigate();

	const solicitarMantenimiento = async ev => {
		ev.preventDefault()

		let cuerpo = {
			idPersonal: props.sesion.idPersonal,
			problema: ev.target.tipoProblema.value,
			condicion: ev.target.condicion.value,
			descripcion: ev.target.descripcion.value
		}
		
		const res = await fetch(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/solicitar/mantenimiento`,{
			method: "POST",
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			 },
			body: JSON.stringify(cuerpo)
		})
		const data = await res.json()
		if(data.exito){
			alert("La solicitud se realizó con éxito!");
		}
	}

	const cancelarSolicitud = () => {
		navigate("/mantenimiento/solicitudes")
	}

	useEffect(()=>{
		if(!props.sesion.acceso){
			navigate("/log-in/a");
		}
	},[props, navigate])

	return (
		<div className={styles.divContenedor}>
			<div className={styles.divPrincipal}>
				<div className={styles.divH3}>
					<h3>Solicitar Mantenimiento</h3>
				</div>
				<form className={styles.formulario} onSubmit={solicitarMantenimiento}>
					<div className={styles.formularioDiv}>
						<span>Tipo de Problema:</span>
						<select name="tipoProblema">
							<option value="Mecánico">Mecánico</option>
							<option value="Electrónico">Electrónico</option>
							<option value="Software">Software</option>
						</select>
					</div>
					<div className={styles.formularioDiv}>
						<span>Condición:</span>
						<select name="condicion">
							<option value="Normal">Normal</option>
							<option value="Media">Media</option>
							<option value="Crítica">Crítica</option>
						</select>
					</div>
					<div className={styles.formularioDiv}>
						<div>
							Descripción:
						</div>
						<textarea name="descripcion" className={styles.largeText} placeholder={hintDescripcion} />
					</div>
					<div className={styles.divBotones}>
						<button className={styles.botonSolicitar} type="submit">Solicitar</button>
						<button className={styles.botonRegresar} type="button" onClick={cancelarSolicitud}>Regresar</button>
					</div>
				</form>
			</div>
		</div>
	);
}