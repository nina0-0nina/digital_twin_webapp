import stylesButton from '../src/styles/Button.module.css'
import stylesLayout from '../src/styles/Layout.module.css'

export default function Menu(){
    return(

         <div className={stylesLayout.body}>
            <div className={stylesLayout.topoVermelho}>Gêmeo Digital</div>        
            <div className={stylesLayout.topoAzul}>Planta de Manufatura Avançada</div>
            <div className={stylesLayout.ladoAzul}></div>

            <div className={stylesButton.wrapper}>
                <button className={stylesButton.button}>Wiki</button>
                <button className={stylesButton.button}>Previsão</button>
            </div>
                
         </div>

    )
}