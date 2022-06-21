//	Styles
import { useNavigate } from 'react-router-dom';
import styles from '../styles/home-Page.module.css'

export function Home(){
	const navigate = useNavigate();
	const toLogin = () => {
		navigate("/log-in");
	}

	const toRegistrarCTC = () => {
		navigate("/ctc/registrar");
	}
	return (
		<div className={styles.fondo}>
			<h1>Iniciar Sesión</h1>
			<div className={styles.divBotones}>
				<button className={styles.botones} type='button' onClick={toLogin}>Iniciar Sesión</button>
				<button className={styles.botones} type='button' onClick={toRegistrarCTC}>Registrar CTC</button>
			</div>
		</div>
	);
}