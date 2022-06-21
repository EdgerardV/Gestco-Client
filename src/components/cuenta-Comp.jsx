//	Dependencies
import { useNavigate } from 'react-router-dom';

//	Styles
import styles from '../styles/cuenta-Comp.module.css'
import imagenUsuario from '../images/logo512.png'

export function Cuenta(props){

	const navigate = useNavigate();
	const toLogin = () =>{
		navigate("/log-in");
	}

	const toHome = () =>{
		navigate("/");
	}

	if(props.ingreso){
		return(
			<div className={styles.divPerfil}>
				<img className={styles.imgUser} src={imagenUsuario} alt="imagen del usuario" />
				<button className={styles.btnUsuario} type="button">Usuario x</button>
				<button className={styles.btnSalir} type="button" onClick={toHome}>Salir</button>
			</div>
		);
	}else{
		return(
			<button className={styles.butonLogin} onClick={toLogin}>Iniciar sesión</button>
		)
	}
}