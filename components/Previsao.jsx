import stylesLayout from '../src/styles/Layout.module.css'
import Link from "next/link";

export default function Previsao() {
    return (
        <div className={stylesLayout.body}>
            <div className={stylesLayout.topo}>
                <div className={stylesLayout.topoVermelho}>Gêmeo Digital</div>
                <div className={stylesLayout.topoAzul}>Planta de Manufatura Avançada</div>
                <div className={stylesLayout.ladoAzul}></div>
            </div>

            <div className={stylesLayout.wrapper}>
                <button className={stylesLayout.button}>Previsão</button>
            </div>
            <div className={stylesLayout.wrapperMenu}>
                <Link href={`telaMenu`}>
                    <button className={stylesLayout.menuBTN}>Menu</button>
                </Link>

            </div>
        </div>

    )
}