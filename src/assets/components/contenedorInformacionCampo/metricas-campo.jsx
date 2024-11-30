import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function MetricasCampo() {
    const semanaTerminada = 50; // Progreso en porcentaje
    const tareasTerminadas = 25;
    const tareas = 5;
    return(
        <section className='flex flex-row items-center justify-center h-screen gap-8'>
           <div>
                <p>Semana terminada</p>
                <div className='w-32 h-32'>
                <CircularProgressbar
                    value={semanaTerminada}
                    text={`${semanaTerminada}%`}
                    styles={buildStyles({
                        textColor: "white", // Color del texto
                        pathColor: "black", // Color del progreso
                        trailColor: "#D6D6D6", // Color del fondo
                    })}
                />
                </div>
            </div>
            <div>
                <p>Tareas terminadas</p>
                <div className='w-32 h-32'>
                    <CircularProgressbar
                    value={tareasTerminadas}
                    text={`2/${tareas}`}
                    styles={buildStyles({
                        textColor: "white", // Color del texto
                        pathColor: "black", // Color del progreso
                        trailColor: "#D6D6D6", // Color del fondo
                    })}
                />
                </div>
                
            </div>
        </section>
    )
}
export default MetricasCampo;