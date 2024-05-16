import logo from '../../imagens/images.png';

import Menu from '../../TextMenu';
import './ConteudoLateralEsquerda.css'
import { IoIosArrowDown } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { PiMessengerLogoBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LuPlusSquare } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo' />
            
            <ul>
                <Menu nome="Página inicial" icone1={<IoIosArrowDown/>} classe = "text-menu" icone={<GoHomeFill />} />

                <Menu nome="Pesquisa" classe = "text-menu" icone = {<IoSearch/>} />

                <Menu nome="Explorar" classe = "text-menu" icone = {<MdOutlineExplore />} />

                <Menu nome="Reels" classe = "text-menu" icone = {<BiMoviePlay />} />

                <Menu nome = "Mensagens" classe = "text-menu" icone = {<PiMessengerLogoBold />}/>

                <Menu nome = "Notificações" classe = "text-menu" icone = {<FaRegHeart />}/>
                
                <Menu nome = "Criar" classe = "text-menu" icone = {<LuPlusSquare />}/>

                <Menu className='Profile' nome = "Perfil" classe = "text-menu" icone = {<FaUserAlt/>}/>

                <Menu nome = "Mais" classe = "text-menu" icone = {<LuMenu />}/>
            </ul>
        </div>
    )
}

// export default ConteudoLateralEsquerda;