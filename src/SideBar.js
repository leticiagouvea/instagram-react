import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";

export default function SideBar() {
    return (
        <div class="sidebar">
            <Usuario />
            <Sugestoes />

            <p class="infos">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags •
                Idioma
            </p>
            <p class="infos">© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    )
}