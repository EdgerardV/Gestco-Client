//	Dependencies
import { useNavigate } from "react-router-dom"

//	Styles
import styles from "../styles/equipoSideBar-Comp.module.css"

export function EquipoSideBar(props){
	const navigate = useNavigate();

	const toMenuPrincipal = () => {
		navigate("/menu-principal")
	}

	const elegirDiseñoMiEquipo = () =>{
		if(props.styleSeleccion === 1){
			return styles.botonSelect
		}else{
			return styles.botones
		}
	}
	
	const elegirDiseñoMasEquipos = () => {
		if(props.styleSeleccion === 2){
			return styles.botonSelect
		}else{
			return styles.botones
		}
	}

	return(
		<div className={styles.divBotones}>
			<button className={elegirDiseñoMiEquipo()} type="button" onClick={props.seleccionarMiEquipo}>
				Mi Equipo
			</button>
			<button className={elegirDiseñoMasEquipos()} type="button" onClick={props.seleccionarMasEquipos}>
				Más Equipos
			</button>
			<button className={styles.botones} type="button" onClick={toMenuPrincipal}>
				Volver
			</button>
		</div>
	);
}