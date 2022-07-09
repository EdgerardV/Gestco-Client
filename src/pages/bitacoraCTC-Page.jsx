//	Dependencies
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//	Styles
import styles from "../styles/bitacoraCTC-Page.module.css"
import { extraerHora } from "../utils/fecha";

export function BitacoraCTC(props){
	const [solicitudes, setSolicitudes] = useState();
	const [refrescar, setRefrescar] = useState(false);

	const navigate = useNavigate();
	const regresar = () =>{
		if(props.sesion.acceso){
			navigate("/menu-principal");
		}else{
			navigate("/");
		}
	}

	const registrarse = () => {
		navigate("/ctc/registrar")
	}

	useEffect(()=>{
		const peticion = async () => {
			let res = await fetch(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/bitacoraCTC/registros`,{
				method: "GET"
			})
			let data = await res.json();
			setSolicitudes(data);
		}

		peticion()
	},[props, navigate, refrescar])

	if(solicitudes === undefined){
		return(<div>Cargando...</div>)
	}

	return (
		<div className={styles.divContenedor}>
			<div className={styles.divBotones}>
				<button type="button" onClick={registrarse}>Registrarse</button>
				<button type="button" onClick={regresar}>Regresar</button>
			</div>
			<div className={styles.divPrincipal}>
				<div className={styles.divH3}>
					<h3>Bitácora CTC's</h3>
				</div>
				<div className={styles.divTabla}>
					<table className={styles.tabla}>
						<thead>
							<tr>
								<th>ID</th>
								<th>Nombre</th>
								<th>Licenciatura</th>
								<th>CTC</th>
								<th>Hora de entrada</th>
								<th>Hora de salida</th>
							</tr>
						</thead>
						<tbody>
							{
								solicitudes.map((value,index)=>{
									return(
										<tr key={index}>
											<td>{value.matricula}</td>
											<td>{value.nombres}</td>
											<td>{value.licenciatura}</td>
											<td>{value.idCTC}</td>
											<td>{extraerHora(value.horaEntrada)}</td>
											<td><HoraSalidaComp id={value.idBitacoraCTCs} hora={value.horaSalida} setRefrescar={setRefrescar} refrescar={refrescar} /></td>
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

function HoraSalidaComp(props){
	if(props.hora === null){
		return(
			<button type="button" onClick={()=>{
				registrarSalida(props.id)
				props.setRefrescar(!props.refrescar);
			}}>Salir</button>
		);
	}else{
		return(
			extraerHora(props.hora)
		);
	}
}

async function registrarSalida(registro){
	let tmp = {
		id: registro
	}
	let res = await fetch(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/bitacoraCTC/salir`,{
		method: "PUT",
		headers: {
			'Content-Type': 'application/json'
		},
		body : JSON.stringify(tmp)
	})

	return res.ok;
}
