//	Dependencies
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

//	Styles
import styles from "../styles/solicitudesMantenimiento-Page.module.css"

export function SolicitudesMantenimiento(props){
	const [solicitudes, setSolicitudes] = useState();
	const [refrescar, setRefrescar] = useState(false);

	const navigate = useNavigate();
	
	const toMenuPrincipal = () =>{
		navigate("/menu-principal")
	}

	const toSolicitarMantenimiento = () => {
		navigate("/mantenimiento/solicitar")
	}

	useEffect(()=>{
		const peticion = async () => {
			let res = await fetch(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/solicitudes/mantenimiento`,{
				method: "GET",
				headers : {
					idpersonal: props.sesion.idPersonal
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
		return(<div>Cargando...</div>)
	}

	return (
		<div className={styles.divContenedor}>
			<div className={styles.divBotones}>
				<button type="button" onClick={toSolicitarMantenimiento}>Nueva Solicitud</button>
				<button type="button" onClick={toMenuPrincipal}>Regresar</button>
			</div>
			<div className={styles.divPrincipal}>
				<div className={styles.divH3}>
					<h3>Mantenimiento Solicitado</h3>
				</div>
				<div className={styles.divTabla}>
					<table className={styles.tabla}>
						<thead>
							<tr>
								<th>Tipo de Problema</th>
								<th>Condición</th>
								<th>Descripción</th>
								<th>Cancelar Solicitud</th>
							</tr>
						</thead>
						<tbody>
							{
								solicitudes.map((value,index)=>{
									return(
										<tr key={index}>
											<td>{value.problema}</td>
											<td>{value.condicion}</td>
											<td>{value.descripcion}</td>
											<td><button type="button" onClick={()=>{
												eliminarSolicitud(value.idInformeMantenimiento)
												setRefrescar(!refrescar);
											}}>Cancelar</button></td>
										</tr>		
									);
								})
							}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

async function eliminarSolicitud(idEliminar){
	let res = await fetch(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/solicitar/mantenimiento`,{
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