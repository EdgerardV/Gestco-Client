//	Dependencies
import { useNavigate } from 'react-router-dom';

//Styles
import styles from '../styles/login-Page.module.css'

//Functions
export function LogIn(){

	// Solo para desarrollo
	const navigate = useNavigate();
	const toMainMenu = () =>{
		navigate("/menu-principal");
	}
	//------------------------------
	return(
		<div className={styles.fondo}>
			<h1>Inicio</h1>
			<p>Ingrese sus credenciales</p>
			<div className={styles.divBotones}>
				<form onSubmit={
					ev => {
						ev.preventDefault();
						alert(ev.target.usuario.value);
					}
				}>
					<input name='usuario' type="text" placeholder="Usuario" autoComplete="off"/>
					<input name='password' type="password" placeholder="Contraseña" autoComplete="off" />
					<button className={styles.botones} type='submit'>Iniciar Sesión</button>
				</form>
			</div>
			<p><strong>¿Olvidó su contraseña?</strong> <br /> Consulte al asesor de cómputo</p>
			
			{/* Solo para desarrollo */}
			<button type="button" onClick={toMainMenu}>Menú principal</button>
			{/*----------------------*/}
		</div>
	);
}