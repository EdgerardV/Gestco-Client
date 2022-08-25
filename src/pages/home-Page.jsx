//	Dependencies
import { useNavigate } from 'react-router-dom';

//	Styles
import styles from '../styles/home-Page.module.css'

export function Home(){
	const navigate = useNavigate();
	
	const toLogin = () => {
		navigate("/log-in");
	}

	const toBitacoraCTC = () => {
		navigate("/ctc/bitacora");
	}

	return (
		<div className={styles.fondo}>
			<div>
				<h1>Inicio</h1>
			</div>
			<div className={styles.divBotones}>
				<button className={`${styles.botones} ${styles.loginBtn}`} type='button' onClick={toLogin}>Iniciar Sesión</button>
				<button className={`${styles.botones} ${styles.registrarBtn}`} type='button' onClick={toBitacoraCTC}>Bitácora de CTCs</button>
			</div>
		</div>
	);
}