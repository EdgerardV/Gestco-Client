//	Dependencies
import { useEffect, useState } from 'react';

//Styles
import styles from '../styles/login-Page.module.css'

//Functions
export function LogIn(){
	const [cuenta, setCuenta] = useState(["",""]);

	const [textoP, setTextoP] = useState("");

	useEffect(() => {
		const peticion = async () =>{
			let res = await fetch('http://localhost:3001/login',{
				method: "GET",
				headers : {
					usuario : cuenta[0],
					password : cuenta[1]
				}
			})
			let coincide = await res.json();
	
			if(coincide.respuesta){
				console.log("entras " + coincide.respuesta);
			}else{
				setTextoP("Usuario o contraseña incorrectos");
			}
		}

		if(cuenta[0] !== "" && cuenta[1] !== ""){
			peticion()
		}

		return() =>{}
	},[cuenta])
	
	const handleSubmit = async ev => {
		ev.preventDefault()
		if(ev.target.usuario.value === "" || ev.target.password.value === ""){
			setTextoP("Ingrese el usuario y la contraseña");
			console.log("no hay texto")
		}else{
			setCuenta([ev.target.usuario.value, ev.target.password.value])
		}
	}
	
	return(
		<div className={styles.fondo}>
			<div>
				<h1>Inicio</h1>
			</div>
			<p>Ingrese sus credenciales</p>
			<div className={styles.divBotones}>
				<form onSubmit={handleSubmit}>
					<input name='usuario' type="text" placeholder="Usuario" autoComplete="off"/>
					<input name='password' type="password" placeholder="Contraseña" autoComplete="off" />
					<button className={styles.botones} type='submit'>Iniciar Sesión</button>
				</form>
			</div>
			<p className={styles.pOutput}>{textoP}</p>
			<p><strong>¿Olvidó su contraseña?</strong> <br /> Consulte al asesor de cómputo</p>
		</div>
	);
}