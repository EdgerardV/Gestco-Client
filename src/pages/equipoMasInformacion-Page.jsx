//	Dependencies
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//	Styles
import styles from "../styles/equipoMasInformacion-Page.module.css"

export function EquipoMasInformacion(props){
	const [dispositivos, setDispositivos] = useState([]);
	const navigate = useNavigate();

	useEffect(()=>{
		const peticion = async () =>{
			let res = await fetch('http://localhost:3001/equipo',{
				method: "GET",
				headers : {
					id: props.equipo.idEquipo
				}
			})
			const reslt = await res.json();
			setDispositivos(reslt)
		}

		if(props.sesion.acceso){
			peticion()
		}else{
			navigate('/log-in/a')
		}
	},[navigate, props])


	if(props.equipo === undefined){
		return(<div>equipo undefined</div>)
	}else{
		return (
			<div className={styles.divPrincipal}>
				<div className={styles.divEncargado}>
					<div className={styles.divContenedor}>
						<div><b>Equipo</b></div>
						<div>{props.equipo.idEquipo}</div>
					</div>
					<div className={styles.divContenedor}>
						<div><b>Encargado</b></div>
						<div>{props.equipo.nombres + " " + props.equipo.apellidoP + " " + props.equipo.apellidoM}</div>
					</div>
					<div className={styles.divContenedor}>
						<div><b>Departamento</b></div>
						<div>{props.equipo.departamento}</div>
					</div>
					<div className={styles.divContenedor}>
						<div><b>Puesto</b></div>
						<div>{props.equipo.puesto}</div>
					</div>
				</div>
				<div className={styles.divTabla}>
					<table className={styles.tabla}>
						<thead>
							<tr>
								<th>Id</th>
								<th>Dispositivo</th>
								<th>Marca</th>
								<th>Modelo</th>
								<th>Fecha de adquisición</th>
							</tr>
						</thead>
						<tbody>
							{
								dispositivos.map((value,index)=>{
									let fechaAdqui;
									if(value.fechaAdquisición === null){
										fechaAdqui = "indefinido";
									}else{
										fechaAdqui = value.fechaAdquisición
									}
									return(
										<tr key={index}>
											<td>{value.idDispositivo}</td>
											<td>{value.descripcion}</td>
											<td>{value.marca}</td>
											<td>{value.modelo}</td>
											<td>{fechaAdqui}</td>
										</tr>
									)
								})								
							}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
