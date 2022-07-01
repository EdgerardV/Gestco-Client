//Modules
import { useNavigate } from "react-router-dom";
import { Cuenta } from "../components/cuenta-Comp";

// Styles
import styles from "../styles/menuPrincipal-Page.module.css"

// icons
import equiposIcon from "../images/equipos_icon.png"
import solicitudesEquipoIcon from "../images/SolicitudesEquipo_icon.png"
import solicitudesMantenimientoIcon from "../images/SolicitudesMantenimiento_icon.png"
import GenerarReportesIcon from "../images/GenerarReportes_icon.png"
import BitacoraCTCsIcon from "../images/BitacoraCTCs_icon.png"
import { useEffect } from "react";

// Code
export function MenuPrincipal(props){
	const navigate = useNavigate();
	const toEquipos = () =>{
		navigate("/equipos")
	}

	const toSoliEquip = () =>{
		navigate("/equipo/solicitudes")
	}

	const toSoliMante = () =>{
		navigate("/mantenimiento/solicitudes")
	}

	const toReportes = () =>{
		navigate("/reportes")
	}

	const toBitacoraCTC = () =>{
		navigate("/ctc/bitacora")
	}
	
	useEffect(()=>{
		if(!props.sesion.acceso){
			navigate("/log-in/a")
		}
		return ()=>{}
	},[navigate,props])

	return(
		<div className={styles.divPrincipal}>
			<div className={styles.divOpciones}>
				<button className={styles.botones} type="button" onClick={toEquipos}>
					<span>Equipos</span>
					<img className={styles.icon} src={equiposIcon} alt="Icono Equipos"/>
				</button>
				<button className={styles.botones} type="button" onClick={toSoliEquip}>
					<span>Solicitudes de equipo</span>
					<img className={styles.icon} src={solicitudesEquipoIcon} alt="Icono Solicitudes de Equipo"/>
				</button>
				<button className={styles.botones} type="button" onClick={toSoliMante}>
					<span>Solicitudes de mantenimiento</span>
					<img className={styles.icon} src={solicitudesMantenimientoIcon} alt="Icono Solicitudes de Mantnimiento" />
				</button>
				<button className={styles.botones} type="button" onClick={toReportes}>
					<span>Generar Reportes</span>
					<img className={styles.icon} src={GenerarReportesIcon} alt="Icono Generar Reportes"/>
				</button>
				<button className={styles.botones} type="button" onClick={toBitacoraCTC}>
					<span>Bitácora de CTC's</span>
					<img className={styles.icon} src={BitacoraCTCsIcon} alt="Icono Bitácora de CTCs"/>
				</button>
			</div>
			<div className={styles.divPerfil}>
				<Cuenta sesion={props.sesion} setSesion={props.setSesion} ubicacion="0" />
			</div>
		</div>
	);
}