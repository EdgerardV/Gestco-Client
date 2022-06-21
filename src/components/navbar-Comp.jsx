//	Dependencies
import { useNavigate } from 'react-router-dom';
import logoUNID from '../images/UNID_Logo_Fondo.png'
import { Cuenta } from './cuenta-Comp';

//	Styles
import styles from '../styles/navbar-Comp.module.css'

export function NavbarComp(props){	
	const navigate = useNavigate();
	const toHome = () =>{
		navigate("/");
	}

	return(
		<div className={styles.divPrincipal}>
			<img onClick={toHome} className={styles.img_logoUNID} src={logoUNID} alt="logo unid" />
			<div className={styles.divTItulo}>Gestco</div>
			<Cuenta ingreso={props.ingresado} />
		</div>
	);
}