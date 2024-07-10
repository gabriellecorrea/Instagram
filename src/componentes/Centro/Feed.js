import './Feed.css';
import Post from './Post/Post';
import vespa from "../../imagens/vespa.jpg"
import foto2 from "../../imagens/foto2.jpg"
import foto3 from "../../imagens/edith.jpg"
import foto4 from "../../imagens/minion.jpg"
import casamento from "../../imagens/casamento.jpg"
import gru from "../../imagens/gru.jpg"
import neve from "../../imagens/neve.jpg"
import bob from "../../imagens/bob.jpg"


export default function Feed() {
    return (
        <div className="Feed">
            <Post
                imgpost={foto3} 
                title="edith"
                imgSrc={foto2} 
                descricao="😆😛"
                numero="105" />
            <Post
                imgpost={foto4}
                title="minion"
                imgSrc={vespa} 
                descricao="🛵🌴"
                numero="387" />
            <Post
                imgpost={gru}
                title="gru"
                imgSrc={casamento} 
                descricao="❤️😍🥰"
                numero="2549" />
            <Post
                imgpost={bob}
                title="bob"
                imgSrc={neve} 
                descricao="❄️☃️"
                numero="64" />
        </div>
        
    )
}