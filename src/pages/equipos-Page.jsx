//	Styles
import { useState } from "react";
import { EquipoSideBar } from "../components/equipoSideBar-Comp";
import { MasEquipos } from "../components/masEquipos-Comp";
import { MiEquipo } from "../components/miEquipo-Comp";
import styles from "../styles/equipos-Page.module.css"

export function Equipos(){
	const [seleccion, setSeleccion] = useState(0)

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

	const DivRespuesta = () =>{
		switch(seleccion){
			case 1:
				return(<MiEquipo />);
			case 2:
				return(<MasEquipos />);
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
