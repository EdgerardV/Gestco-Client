//	Dependencies
import { useNavigate } from 'react-router-dom';

//	Styles
import styles from '../styles/cuenta-Comp.module.css'
import imagenUsuario from '../images/logo512.png'

// Ubicacion = 0 : Menu principal
// Ubicacion = 1 : Navbar
export function Cuenta(props){
	let estilosPerfil = [styles.divPerfil,styles.divPerfilNavbar];
	let estilosUsuario = [styles.btnUsuario,styles.btnUsuarioNavbar];
	let estilosSalir = [styles.btnSalir,styles.btnSalirNavbar];
	let estilosFoto = [styles.imgUser,styles.imgUserNavbar];

	const navigate = useNavigate();
	const toLogin = () =>{
		navigate("/log-in");
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
				<img className={estilosFoto[props.ubicacion]} src={imagenUsuario} alt="imagen del usuario" />
				<div className={styles.botones}>
					<button className={estilosUsuario[props.ubicacion]} type="button">{props.sesion.nombres}</button>
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