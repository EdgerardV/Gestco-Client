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
import { EquipoMasInformacion } from './pages/equipoMasInformacion-Page';
import { SolicitudesEquipo } from './pages/solicitudesEquipo-Page';
import { SolicitarEquipo } from './pages/solicitarEquipo-Page';
import { SolicitudesMantenimiento } from './pages/solicitudesMantenimeinto-Page';
import { SolicitarMantenimiento } from './pages/solicitarMantenimiento-Page';
import { Reportes } from './pages/reportes-Page';
import { BitacoraCTC } from './pages/bitacoraCTC-Page';
import { RegistroCTC } from './pages/registroCTC-Page';
import { AdminPage } from './pages/admin-Page';

//Styles
import styles from './styles/index.css';


export function Root(){
	const [iniciosesion, setInicioSesion] = useState(false);
	return(
		<React.StrictMode>
			<BrowserRouter>
				<header className={styles.headerstyle}>
					<NavbarComp entrado={iniciosesion} setEntrar={setInicioSesion} />
				</header>

				<Routes>
					
					<Route path='/' element={<Home />} />
					<Route path='/log-in' element={<LogIn entrar={setInicioSesion} />} />
					<Route path='/menu-principal' element={<MenuPrincipal />} />
					<Route path='/equipos' element={<Equipos />} />
					<Route path='/equipos/:equipo' element={<EquipoMasInformacion />} />
					<Route path='/equipo/solicitudes' element={<SolicitudesEquipo />} />
					<Route path='/equipo/solicitar' element={<SolicitarEquipo />} />
					<Route path='/mantenimiento/solicitudes' element={<SolicitudesMantenimiento />} />
					<Route path='/mantenimiento/solicitar' element={<SolicitarMantenimiento />} />
					<Route path='/reportes' element={<Reportes />} />
					<Route path='/ctc/bitacora' element={<BitacoraCTC />} />
					<Route path='/ctc/registrar' element={<RegistroCTC />} />
					<Route path='/*' element={<div>404 not found</div>} />

					<Route path='/admin' element={<AdminPage />}/>
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}