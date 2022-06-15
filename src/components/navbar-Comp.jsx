//Dependencies
import {	Link } from "react-router-dom";

// Styles
import styles from '../styles/navbar.module.css'

export function NavbarComp(){
	return(
		<div className={styles.divPrincipal}>
			<ul>
				<li>
					<Link to="/"><h1>Home</h1></Link>
				</li>
				<li>
					<Link to="/log-in"><h1>Ingresar</h1></Link>
				</li>
				<li>
					<Link to="/menu-principal"><h1>Menú Principal</h1></Link>
				</li>
				<li>
					<Link to="/equipos"><h1>Equipos</h1></Link>
				</li>
				<li>
					<Link to="/equipos/mi-equipo"><h1>Mi Equipo</h1></Link>
				</li>
				<li>
					<Link to="/equipos/mas-equipos"><h1>Más Equipos</h1></Link>
				</li>
				<li>
					<Link to="/equipos/mas-equipos/mas-infomracion"><h1>Más Equipos | Más Información</h1></Link>
				</li>
				<li>
					<Link to="/equipo/solicitudes"><h1>Solicitudes de equipo</h1></Link>
				</li>
				<li>
					<Link to="/equipo/solicitar"><h1>Solicitar equipo</h1></Link>
				</li>
				<li>
					<Link to="/mantenimiento/solicitudes"><h1>Solicitudes de mantenimiento</h1></Link>
				</li>
				<li>
					<Link to="/mantenimiento/solicitar"><h1>Solicitar mantenimiento</h1></Link>
				</li>
				<li>
					<Link to="/reportes"><h1>Generar Reportes</h1></Link>
				</li>
				<li>
					<Link to="/ctc/bitacora"><h1>Bitácora CTC</h1></Link>
				</li>
				<li>
					<Link to="/ctc/registrar"><h1>Registrar CTC</h1></Link>
				</li>
			</ul>
		</div>
	);
}