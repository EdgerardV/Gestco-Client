//	Styles
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EquipoSideBar } from "../components/equipoSideBar-Comp";
import { MasEquipos } from "../components/masEquipos-Comp";
import { MiEquipo } from "../components/miEquipo-Comp";
import styles from "../styles/equipos-Page.module.css"
import { EquipoMasInformacion } from "./equipoMasInformacion-Page";

export function Equipos(props){
	const [seleccion, setSeleccion] = useState(0)
	const [equipo,setEquipo] = useState([{}])

	const navigate = useNavigate();

	const estiloDivInfo = () => {
		if(seleccion === 0){
			return styles.divInfoNoneSelected;
		}else{
			return styles.divInfoSelected;
		}
	}

	const seleccionarMiEquipo = () =>{
		setSeleccion(1)
	}

	const seleccionarMasEquipos = () =>{
		setSeleccion(2)
	}
	
	const seleccionarMasInformacion = () =>{
		setSeleccion(3)
	}

	useEffect(()=>{
		if(!props.sesion.acceso){
			navigate("/log-in/a")
		}
	},[navigate,props]);

	const DivRespuesta = () =>{
		switch(seleccion){
			case 1:
				return(<MiEquipo sesion={props.sesion} />);
			case 2:
				return(<MasEquipos sesion={props.sesion} seleccionarMasInformacion={seleccionarMasInformacion} setEquipo={setEquipo} />);
			case 3:
				return(<EquipoMasInformacion equipo={equipo} sesion={props.sesion}/>)
			default:
				return(
					<p>
						Seleccione una opción de la barra izquierda
					</p>
				);
		}
	}

	return(
		<div className={styles.divPrincipal}>
			<EquipoSideBar seleccionarMiEquipo={seleccionarMiEquipo} seleccionarMasEquipos={seleccionarMasEquipos} styleSeleccion={seleccion} />
			<div className={estiloDivInfo()}>
				<DivRespuesta />
			</div>
		</div>
	);
}
