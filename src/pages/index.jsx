import styles from '../styles/Menu.module.css'

export default function Menu(){
    return(
        <div className={styles.body}>
            <div className={styles.topoVermelho}>Gêmeo Digital</div>        
            <div className={styles.topoAzul}>Planta de Manufatura Avançada</div>
            <div className={styles.ladoAzul}></div>

            <div style={{flexDirection:"column"}}>
                <button className={styles.wiki}>Wiki</button>
                <button className={styles.previsao}>Previsão</button>
            </div>
            

        </div>
    )
}