//	Dependencies
import { useNavigate } from "react-router-dom"

//	Styles
import styles from "../styles/solicitarMantenimiento-Page.module.css"

//	Code
export function SolicitarMantenimiento(){
	const hintDescripcion = "Describa el problema de forma detallada"

	const navigate = useNavigate();

	const solicitarMantenimiento = () => {
		navigate("/mantenimiento/solicitudes")
	}

	const cancelarSolicitud = () => {
		navigate("/mantenimiento/solicitudes")
	}

	return (
		<div className={styles.divContenedor}>
			<div className={styles.divPrincipal}>
				<div className={styles.divH3}>
					<h3>Solicitar Mantenimiento</h3>
				</div>
				<form className={styles.formulario}>
					<div className={styles.formularioDiv}>
						<span>Tipo de Problema:</span>
						<select>
							<option value="1">Mecánico</option>
							<option value="2">Electrónico</option>
							<option value="3">Software</option>
						</select>
					</div>
					<div className={styles.formularioDiv}>
						<span>Cantidad (Piezas):</span>
						<select>
							<option value="1">Normal</option>
							<option value="2">Media</option>
							<option value="3">Crítica</option>
						</select>
					</div>
					<div className={styles.formularioDiv}>
						<div>
							Descripción:
						</div>
						<textarea className={styles.largeText} placeholder={hintDescripcion} />
					</div>
					<div className={styles.divBotones}>
						<button type="button" onClick={solicitarMantenimiento}>Solicitar</button>
						<button type="button" onClick={cancelarSolicitud}>Cancelar</button>
					</div>
				</form>
			</div>
		</div>
	);
}