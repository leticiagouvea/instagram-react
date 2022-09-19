import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default function Corpo() {
    return (
        <div class="conteudo">
            <Stories />
            <Posts />
            <SideBar />
        </div>
    );
}