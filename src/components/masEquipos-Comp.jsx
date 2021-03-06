//	Dependencies
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//	Styles
import styles from "../styles/masEquipos-Comp.module.css"

export function MasEquipos(props){
	const [equipos,setEquipos] = useState([{}])
	const navigate = useNavigate();
	
	useEffect(()=>{		
		const peticion = async () =>{
			let res = await fetch(`http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/encargados`)
			const reslt = await res.json();
			setEquipos(reslt)
		}

		if(props.sesion.acceso){
			peticion()
		}else{
			navigate('/log-in/a')
		}
	},[navigate, props])

	if(equipos === undefined){
		return(
			<div>ups</div>
		)
	}else{
		return(
			<div className={styles.divPrincipal}>
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
						{
							equipos.map((value,index)=>{
								return(
									<tr key={index}>
										<td>{value.idEquipo}</td>
										<td>{value.nombres + " " + value.apellidoP + " " + value.apellidoM}</td>
										<td>{value.departamento}</td>
										<td>{value.puesto}</td>
										<td>
										<button className={styles.buton} type="button" onClick={()=>{
											props.setEquipo(value);
											props.seleccionarMasInformacion()
										}}>
											Más Información
										</button>
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		);
	}
}