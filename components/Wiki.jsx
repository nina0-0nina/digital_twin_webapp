import stylesWiki from "../src/styles/Wiki.module.css"
import Link from "next/link"

export default function Wiki(){
    return(
        <div>
            <div className={stylesWiki.wiki}>
                <iframe src="https://sesibahia-my.sharepoint.com/personal/marina_oliveira_fbter_org_br/_layouts/15/Doc.aspx?sourcedoc={dbf090c9-e59c-4e5c-aae0-b95b1f5aef8b}&amp;action=embedview&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1" width="1000px" height="750px" frameborder="0">Este é um apresentação do <a target="_blank" href="https://office.com">Microsoft Office</a> incorporado, da plataforma <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
            </div>

            <div className={stylesWiki.wrapperMenu}>
                <Link href={`telaMenu`}>
                    <button className={stylesWiki.menuBTN}>Menu</button>
                </Link>

            </div>
        </div>
        
        
       
    )
} 