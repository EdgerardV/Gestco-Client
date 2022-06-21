//	Dependencies
import { useNavigate } from "react-router-dom";

//	Styles
import styles from "../styles/solicitarEquipo-Page.module.css"

//	Code
export function SolicitarEquipo(){
	const navigate = useNavigate();

	const solicitarEquipo = () => {
		navigate("/equipo/solicitudes")
	}

	const cancelarSolicitud = () => {
		navigate("/equipo/solicitudes")
	}

	return (
		<div className={styles.divContenedor}>
			<div className={styles.divPrincipal}>
				<div className={styles.divH3}>
					<h3>Solicitar Equipo</h3>
				</div>
				<form className={styles.formulario}>
					<div className={styles.formularioDiv}>
						<span>Para cuando se necesita:</span>
						<select>
							<option value="1">Enero</option>
							<option value="2">Febrero</option>
							<option value="3">Marzo</option>
							<option value="4">Abril</option>
							<option value="5">Mayo</option>
							<option value="6">Junio</option>
							<option value="7">Julio</option>
							<option value="8">Agosto</option>
							<option value="9">Septiembre</option>
							<option value="10">Octubre</option>
							<option value="11">Noviembre</option>
							<option value="12">Diciembre</option>
						</select>
					</div>
					<div className={styles.formularioDiv}>
						<span>Cantidad (Piezas):</span>
						<input type="Number" />
					</div>
					<div className={styles.formularioDiv}>
						<div>
							Descripción:
						</div>
						<textarea className={styles.largeText} />
					</div>
					<div className={styles.formularioDiv}>
						<div>
							Justificación:
						</div>
						<textarea className={styles.largeText} />
					</div>
				</form>

				<div className={styles.divBotones}>
					<button type="button" onClick={solicitarEquipo}>Solicitar</button>
					<button type="button" onClick={cancelarSolicitud}>Cancelar</button>
				</div>
			</div>
		</div>
	);
}