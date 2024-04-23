import { useState } from "react";

import './Post.css';

import { FaRegGrinHearts } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";


export default function Post(props) {
    
        const [likes, setLikes] = useState(0);

        return (

        <div className="card Post">
            <div className="card-header">
                <h3>{props.title}</h3>
            </div>
            <div className="card-body">
                <img src={props.imgSrc} />

                <FaRegGrinHearts 
                    onClick={() => setLikes(likes + 1)} 
                    style={{color: likes % 2 === 0 ? 'black' : 'red',
                    cursor: 'pointer',
                    border: '1px solid red'}}/>
                <FiMessageCircle />
                <p>{props.body}</p>
            </div>
            <div className="card-footer">
            </div>
        </div>
    )
}