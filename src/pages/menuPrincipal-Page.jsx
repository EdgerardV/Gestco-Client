// Styles
import { useNavigate } from "react-router-dom";
import { Cuenta } from "../components/cuenta-Comp";
import styles from "../styles/menuPrincipal-Page.module.css"
// Code
export function MenuPrincipal(){
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

	return(
		<div className={styles.divPrincipal}>
			<div className={styles.divOpciones}>
				<button className={styles.botones} type="button" onClick={toEquipos}>Equipos</button>
				<button className={styles.botones} type="button" onClick={toSoliEquip}>Solicitudes de equipo</button>
				<button className={styles.botones} type="button" onClick={toSoliMante}>Solicitudes de mantenimiento</button>
				<button className={styles.botones} type="button" onClick={toReportes}>Generar Reportes</button>
				<button className={styles.botones} type="button" onClick={toBitacoraCTC}>Bitácora de CTC's</button>
			</div>
			<div className={styles.divPerfil}>
				<Cuenta ingreso={true} />
			</div>
		</div>
	);
}