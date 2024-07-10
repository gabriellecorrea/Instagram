import Story from "./Story"
import './Stories.css'
import foto1 from "../../imagens/gru.jpg"
import foto2 from "../../imagens/bob.jpg"
import foto3 from "../../imagens/edith.jpg"
import foto4 from "../../imagens/margo.jpg"
import foto5 from "../../imagens/stuart.jpg"
import foto6 from "../../imagens/agnes.jpg"
import foto7 from "../../imagens/kevin.jpg"
import foto8 from "../../imagens/minion.jpg"

var listaUsuarios = [
    {
        nome: "gru",
        foto: foto1
    },
    {
        nome: "bob",
        foto: foto2
    },
    {
        nome: "margo",
        foto: foto4
    },
    {
        nome: "edith",
        foto: foto3
    },
    {
        nome: "stuart",
        foto: foto5
    },
    {
        nome: "agnes",
        foto: foto6
    },
    {
        nome: "kevin",
        foto: foto7
    },
    {
        nome: "minion",
        foto: foto8
    }
]

export default function Stories() {
    return (
        <div className="Stories">
            {
                // Iteração -> Para cada usuário na lista de usuários, renderize um Story
                listaUsuarios.map((usuario) => {
                    return <Story nomeUsuario={usuario.nome} caminhoDaImagem={usuario.foto} />
                })
            }

        </div>
    )
}