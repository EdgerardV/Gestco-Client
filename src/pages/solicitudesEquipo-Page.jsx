//	Dependencies
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//	Styles
import styles from "../styles/solicitudesEquipo-Page.module.css"
import { extraerFecha } from "../utils/fecha";

export function SolicitudesEquipo(props){
	const [solicitudes, setSolicitudes] = useState([{}]);
	const [refrescar, setRefrescar] = useState(false);

	const navigate = useNavigate();
	const toMenuPrincipal = () =>{
		navigate("/menu-principal")
	}

	const toSolicitarEquipo = () => {
		navigate("/equipo/solicitar")
	}

	useEffect(()=>{
		const peticion = async () => {
			let res = await fetch(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/solicitudes/equipo`,{
				method: "GET",
				headers : {
					idcuenta: props.sesion.idCuenta
				}
			})
			let data = await res.json();
			setSolicitudes(data);
		}

		if(props.sesion.acceso){
			peticion()
		}else{
			navigate("/log-in/a");
		}
	},[props, navigate, refrescar])

	if(solicitudes === undefined){
		return(
			<div>Cargando</div>
		);
	}
	return (
		<div className={styles.divContenedor}>
			<div className={styles.divBotones}>
				<button type="button" onClick={toSolicitarEquipo}>Nueva Solicitud</button>
				<button type="button" onClick={toMenuPrincipal}>Regresar</button>
			</div>
			<div className={styles.divPrincipal}>
				<div className={styles.divH3}>
					<h3>Equipo Solicitado</h3>
				</div>
				<div className={styles.divTabla}>
					<Informacion solis={solicitudes} refrescar={refrescar} setRefrescar={setRefrescar} />
				</div>
			</div>
		</div>
	);
}

function Informacion(props){
	if(props.solis.length > 0){
		return(
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
					{
						props.solis.map((value,index)=>{
							return(
								<tr key={index}>
									<td>{value.cantidad}</td>
									<td>{value.descripcion}</td>
									<td>{value.justificacion}</td>
									<td className={styles.fechaRow}>{extraerFecha(value.date)}</td>
									<td><button type="button" onClick={()=>{
										eliminarSolicitud(value.idSolicitudesDeEquipo)
										props.setRefrescar(!props.refrescar);
									}}>Cancelar</button></td>
								</tr>		
							);
						})
					}
				</tbody>
			</table>
		);
	}else{
		return(
			<p><strong>No hay Solicitudes</strong></p>
		);
	}
}

async function eliminarSolicitud(idEliminar){
	let res = await fetch(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/solicitar/equipo`,{
		method: "DELETE",
		headers : {
			id: idEliminar
		}
	})

	if(res.ok > 0){
		alert("Eliminado");
	}else{
		alert("No se eliminó ningun elemento")
	}
}