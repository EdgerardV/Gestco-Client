// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
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

import { RegistroCTC } from './pages/registroCTC-Page';

//Styles
import './styles/index.css';
import { MiEquipo } from './pages/miEquipo-Page';
import { MasEquipos } from './pages/masEquipos-Page';
import { EquipoMasInformacion } from './pages/equipoMasInformacion-Page';
import { SolicitudesEquipo } from './pages/solicitudesEquipo-Page';
import { SolicitarEquipo } from './pages/solicitarEquipo-Page';
import { SolicitudesMantenimiento } from './pages/solicitudesMantenimeinto-Page';
import { SolicitarMantenimiento } from './pages/solicitarMantenimiento-Page';
import { Reportes } from './pages/reportes-Page';
import { BitacoraCTC } from './pages/bitacoraCTC-Page';

//Code 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<header>
				<NavbarComp />
			</header>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/log-in' element={<LogIn />} />
					<Route path='/menu-principal' element={<MenuPrincipal />} />
					<Route path='/equipos' element={<Equipos />} />
					<Route path='/equipos/mi-equipo' element={<MiEquipo />} />
					<Route path='/equipos/mas-equipos' element={<MasEquipos />} />
					<Route path='/equipos/mas-equipos/mas-infomracion' element={<EquipoMasInformacion />} />
					<Route path='/equipo/solicitudes' element={<SolicitudesEquipo />} />
					<Route path='/equipo/solicitar' element={<SolicitarEquipo />} />
					<Route path='/mantenimiento/solicitudes' element={<SolicitudesMantenimiento />} />
					<Route path='/mantenimiento/solicitar' element={<SolicitarMantenimiento />} />
					<Route path='/reportes' element={<Reportes />} />
					<Route path='/ctc/bitacora' element={<BitacoraCTC />} />
					<Route path='/ctc/registrar' element={<RegistroCTC />} />
				</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
