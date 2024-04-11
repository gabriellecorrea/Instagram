import logo from './logo.svg';
import './App.css';
import ConteudoLateralEsquerda from './ConteudoLateralEsquerda';
import img from './imagens/img_tec.jpg';


function App() {
  return (
    <div>
      < ConteudoLateralEsquerda />
      < img src={img} alt='imagem'/>
      <div className='ConteudoLateralEsquerda'>

        {/* 
      Logo
      Menu
      */}
      </div>
      <div className='ConteudoCentral'>
        sei
        {/* 
      
      */}
      </div>
      <div className='ConteudoLateralDireita'>
        nao
        {/* 
      Login
      Sugestões de Amigos
      Sugestões 
      */}
      </div>
    </div>

  );
}

export default App;
