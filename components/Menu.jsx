import stylesLayout from '../src/styles/Layout.module.css'
import Link from "next/link";

export default function Menu() {
    return (
        <div className={stylesLayout.body}>
            <div className={stylesLayout.topo}>
                <div className={stylesLayout.topoVermelho}>Gêmeo Digital</div>
                <div className={stylesLayout.topoAzul}>Planta de Manufatura Avançada</div>
                <div className={stylesLayout.ladoAzul}></div>
            </div>

            <div className={stylesLayout.wrapper}>
                <Link href={`telaWiki`}>
                    <button className={stylesLayout.button}>Wiki</button>
                </Link>
                <Link href={`telaPrevisao`}>
                    <button className={stylesLayout.button}>Previsão</button>
                </Link>

            </div>
        </div>

    )
}