//	Dependencies
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//	Styles
import styles from "../styles/solicitarEquipo-Page.module.css"

//	Code
export function SolicitarEquipo(props){
	const navigate = useNavigate();

	const solicitarEquipo = async ev => {
		ev.preventDefault()
		let cuerpo = {
			idCuentaDeAcceso: props.sesion.idCuenta,
			cantidad: ev.target.cantidad.value,
			descripcion: ev.target.descripcion.value,
			justificacion: ev.target.justificacion.value,
			mes: ev.target.meses.value,
		}
		
		const res = await fetch('http://localhost:3001/solicitar/equipo',{
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
		
		ev.target.cantidad.value = 1;
		ev.target.descripcion.value = "";
		ev.target.justificacion.value = "";
		ev.target.meses.value = 1;
	}

	const cancelarSolicitud = () => {
		navigate("/equipo/solicitudes")
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
					<h3>Solicitar Equipo</h3>
				</div>
				<form className={styles.formulario} onSubmit={solicitarEquipo}>
					<div className={styles.formularioDiv}>
						<span>Para cuando se necesita:</span>
						<select name="meses">
							<option value="1">Enero</option>
							<option value="2">Febrero</option>
							<option value="3">Marzo</option>
							<option value="4">Abril</option>
							<option value="5">Mayo</option>
							<option value="6">Junio</option>
							<option value="7">Julio</option>
							<option value="8">Agosto</option>
							<option value="9">Septiembre</option>
							<option value="10">Octubre</option>
							<option value="11">Noviembre</option>
							<option value="12">Diciembre</option>
						</select>
					</div>
					<div className={styles.formularioDiv}>
						<span>Cantidad (Piezas):</span>
						<input name="cantidad" className={styles.cantidadInput} type="Number" />
					</div>
					<div className={styles.formularioDiv}>
						<div>Descripción:</div>
						<textarea name="descripcion" className={styles.largeText} />
					</div>
					<div className={styles.formularioDiv}>
						<div>Justificación:</div>
						<textarea name="justificacion" className={styles.largeText} />
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