import { useState } from "react";

export default function Usuario() {
    const [usuario, setUsuario] = useState("Inserir usuário");
    const [nome, setNome] = useState("Editar perfil");
    const [foto, setFoto] = useState("https://guiabrasileiroemisrael.com.br/wp-content/uploads/2017/06/sem-foto.png");

    function editarPerfil() {
        const user = prompt("Digite o seu usuário:");
        setUsuario(user);
        const name = prompt("Digite seu nome:");
        setNome(name);
        const img = prompt("Insira a url da sua foto de perfil");
        setFoto(img);
    }

    return (
        <div class="perfil">
            <img src={foto} alt="" />
            <div class="user-perfil">
                <p><strong>{usuario}</strong></p>
                <div class="editar-user">
                    <p class="nome-perfil">{nome}</p>
                    <ion-icon onClick={editarPerfil} class="icon-editar" name="pencil-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}