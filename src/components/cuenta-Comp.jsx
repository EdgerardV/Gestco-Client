//	Dependencies
import { useNavigate } from 'react-router-dom';

//	Styles
import styles from '../styles/cuenta-Comp.module.css'

// Ubicacion = 0 : Menu principal
// Ubicacion = 1 : Navbar
export function Cuenta(props){
	let estilosPerfil = [styles.divPerfil,styles.divPerfilNavbar];
	let estilosUsuario = [styles.btnUsuario,styles.btnUsuarioNavbar];
	let estilosSalir = [styles.btnSalir,styles.btnSalirNavbar];

	const navigate = useNavigate();
	const toLogin = () =>{
		navigate("/log-in");
	}

	const toMenuPrincipal = () =>{
		navigate("/menu-principal")
	}

	const toHome = () =>{
		props.setSesion({
			idCuenta: "",
			idPersonal: "",
			nombres: "",
			aPaterno: "",
			aMaterno: "",
			acceso: false
		});
		navigate("/");
	}

	if(props.sesion.acceso){
		return(
			<div className={estilosPerfil[props.ubicacion]}>
				<div className={styles.botones}>
					<button className={estilosUsuario[props.ubicacion]} type="button" onClick={toMenuPrincipal}>{props.sesion.nombres}</button>
					<button className={estilosSalir[props.ubicacion]} type="button" onClick={toHome}>Salir</button>
				</div>
			</div>
		);
	}else{
		return(
			<button className={styles.butonLogin} onClick={toLogin}>Iniciar sesión</button>
		)
	}
}