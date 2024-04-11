import Menu from './TextMenu';
import logo from './imagens/images.png'
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiPlusSquare } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import perfil from './imagens/perfil.png';

export default function ConteudoLateralEsquerda() {
    return (
        <div className='ConteudoLateralEsquerda'>
            <img src={logo} alt='Logo' />
            <ul>
                <Menu nome=' Home' icone={<GoHome />} icone2={<IoIosArrowDown />} />
                <Menu nome=' Buscar' icone={<IoSearch />} />
                <Menu nome=' Mensagens' icone={<LuMessageCircle />} />
                <Menu nome=' Notificações' icone={<IoMdNotificationsOutline />} />
                <Menu nome=' Criar' icone={<FiPlusSquare />} icone2={<IoIosArrowDown />} />
            </ul>

            <div className='perfil'>
                <img src={perfil} alt='Perfil' />
                <p>Perfil</p>
            </div>
        </div>
    );

}