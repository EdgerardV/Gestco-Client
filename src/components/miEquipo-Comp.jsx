//	Dependencies
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//	Styles
import styles from "../styles/miEquipo-Comp.module.css"

export function MiEquipo(props){
	const [equipo, setEquipo] = useState(["","","",""]);
	const navigate = useNavigate()
	useEffect(()=>{
		const peticion = async () =>{
			let res = await fetch('http://localhost:3001/miequipo',{
				method: "GET",
				headers : {
					id: props.sesion.idPersonal
				}
			})
			const reslt = await res.json();
			setEquipo(reslt)
		}

		if(props.sesion.acceso){
			peticion()
		}else{
			navigate('/log-in/a')
		}
	},[navigate,props])

	return (
		<table className={styles.tabla}>
			<thead>
				<tr>
					<th>Id</th>
					<th>Dispositivo</th>
					<th>Marca</th>
					<th>Modelo</th>
					<th>Fecha de Adquisición</th>
				</tr>
			</thead>
			<tbody>
				{
					equipo.map((value,index)=>{
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
	);
}
