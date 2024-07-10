import { useState } from "react";

import './Post.css';
import { FaRegHeart } from "react-icons/fa6";
import { PiChatCircleBold } from "react-icons/pi";


/*
var likes = 0;
function setLikes (valor){
    likes = valor;
} 
*/
var color;

export default function Post(props) {

    // useState é uma forma de armazenar estados dentro de um componente.
    const [likes, setLikes] = useState(0);

    // Nosso objetivos aqui: 
    // Vamos armazenar a quantidade de Likes
    // Vamos alterar a cor do coração quando o usuário clicar

    return (
        <div className="card Post">
            <div className="card-header">
                <img src={props.imgpost} className='foto'/>
                <h3>{props.title}</h3>
            </div>
            <div className="card-body">
                <img src={props.imgSrc} />

                {/*
                Arrow Functions são outra forma de criar funções em JavaScript.
                isso -> 

                    var a = () => setLikes(likes + 1)
                    
                    é equivalente a isso 
                    
                    function(){
                        setLikes(likes + 1);
                    }

                    var a = function() {}
                */}

                {
                    // Operador ternários

                    // isso -> likes % 2 === 0 ? 'black' : 'red'

                    // é o mesmo que isso:

                    // if(likes % 2 === 0){
                    //     'black'
                    // } else {
                    //     'red'
                }
                
                <FaRegHeart 
                    onClick={() => setLikes(likes + 1)} 
                    style={{color: likes % 2 === 0 ? 'black' : 'red',
                    cursor: 'pointer',
                    }} 
                />

                <PiChatCircleBold />
            </div>
            <div className="card-footer">
            <h3>{props.title}{props.descricao}</h3>
            <p>Ver todos os {props.numero} comentários</p>
            </div>
        </div>
    )
}