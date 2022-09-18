function Perfil(props) {
    return (
        <div class="perfil">
            <img src={props.img} alt=""/>
            <div class="user-perfil">
                <p><strong>{props.user}</strong></p>
                <div class="editar-user">
                    <p>{props.name}</p>
                    <ion-icon class="icon-editar" name="pencil-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default function Usuario() {

    const usuario = [
        {img: "./imgs/catanacomics 1.png", user: "catanacomics", name: "Catana"}
    ]

    return (
        <div>
            {usuario.map((i) => (
                <Perfil img={i.img} user={i.user} name={i.name}/>
            ))}
        </div>
    )
}