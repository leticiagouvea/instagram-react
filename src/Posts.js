function Post(props) {
    return (
        <div class="post">
            <div class="post-topo">
                <img class="userfoto" src={props.imgUser} alt=""/>
                <p class="usernome">{props.userName}</p>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <img class="imgpost" src={props.imgPost} alt=""/>

            <div class="post-interacoes">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>

            <div class="curtidas">
                <img src={props.imgLike} alt=""/>
                <div class="numero-curtidas">
                    Curtido por <strong>{props.userLike}</strong> e <strong>outras {props.numberLike} pessoas</strong>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    const posts = [
        {
            imgUser: "./imgs/meowed 1.png",
            userName: "meowed",
            imgPost: "./imgs/gato-telefone 1.png",
            imgLike: "./imgs/respondeai 1.png",
            userLike: "respondeai",
            numberLike: "99.159"
        }, 
        {
            imgUser: "./imgs/barked 1.png",
            userName: "barked",
            imgPost: "./imgs/dog 1.png",
            imgLike: "./imgs/adorableanimals 1.png",
            userLike: "adorableanimals",
            numberLike: "102.956"
        },
        {
            imgUser: "./imgs/nathanwpylestrangeplanet 1.png",
            userName: "nathanwpylestrangeplanet",
            imgPost: "./imgs/cats-nathanwpyle.jpg",
            imgLike: "./imgs/adorableanimals 1.png",
            userLike: "adorableanimals",
            numberLike: "50.135"
        }
    ]

    return (
        <div>
            {posts.map((i) => (
                <Post imgUser={i.imgUser} userName={i.userName} imgPost={i.imgPost} imgLike={i.imgLike} userLike={i.userLike} numberLike={i.numberLike}/>
            ))}
        </div>
    )
}