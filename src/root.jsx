import React, { useState } from 'react';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";

//Components
import { Home } from './pages/home-Page';
import { LogIn } from './pages/login-Page';
import { NavbarComp } from './components/navbar-Comp';
import { MenuPrincipal } from './pages/menuPrincipal-Page';
import { Equipos } from './pages/equipos-Page';
import { SolicitudesEquipo } from './pages/solicitudesEquipo-Page';
import { SolicitarEquipo } from './pages/solicitarEquipo-Page';
import { SolicitudesMantenimiento } from './pages/solicitudesMantenimeinto-Page';
import { SolicitarMantenimiento } from './pages/solicitarMantenimiento-Page';
import { Reportes } from './pages/reportes-Page';
import { BitacoraCTC } from './pages/bitacoraCTC-Page';
import { RegistroCTC } from './pages/registroCTC-Page';

//Styles
import styles from './styles/index.css';

export function Root(){
	const [sesion, setSesion] = useState({
		idCuenta: "",
		idPersonal: "",
		nombres: "",
		aPaterno: "",
		aMaterno: "",
		acceso: false
	});

	return(
		<React.StrictMode>
			<BrowserRouter>
				<header className={styles.headerstyle}>
					<NavbarComp sesion={sesion} setSesion={setSesion} />
				</header>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/log-in' element={<LogIn setSesion={setSesion} />} />
					<Route path='/log-in/:redireccion' element={<LogIn setSesion={setSesion} />} />
					<Route path='/menu-principal' element={<MenuPrincipal sesion={sesion} setSesion={setSesion} />} />
					<Route path='/equipos' element={<Equipos sesion={sesion} />} />
					<Route path='/equipo/solicitudes' element={<SolicitudesEquipo sesion={sesion} />} />
					<Route path='/equipo/solicitar' element={<SolicitarEquipo sesion={sesion} />} />
					<Route path='/mantenimiento/solicitudes' element={<SolicitudesMantenimiento sesion={sesion} />} />
					<Route path='/mantenimiento/solicitar' element={<SolicitarMantenimiento sesion={sesion} />} />
					<Route path='/reportes' element={<Reportes sesion={sesion} />} />
					<Route path='/ctc/bitacora' element={<BitacoraCTC sesion={sesion} />} />
					<Route path='/ctc/registrar' element={<RegistroCTC />} />
					<Route path='/*' element={<div>404 not found</div>} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}