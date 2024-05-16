import Story from "./Story"
import './Stories.css'

var listaUsuarios = [
    {
        nome: "gerisvaldo",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "jailson",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "arthur",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "papai",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "minions",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "minions",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "minions",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "minions",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    }
]

export default function Stories() {
    return (
        <div className="Stories">
            {
                // Iteração -> Para cada usuário na lista de usuários, renderize um Story
                listaUsuarios.map((usuario) => {
                    return <Story nomeUsuario={usuario.nome} caminhoDaImagem={usuario.url} />
                })
            }

        </div>
    )
}