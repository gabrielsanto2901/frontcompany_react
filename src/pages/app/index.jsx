
import './index.scss';

export default function Home() {
  return (
   <div className='pag-inicial'>
      <header className='navegacao'>
        <a href="">Sobre Nós</a>
        <img src="/assets/images/download_1.png" alt=""  width={175}/>
        <a href="">Contato</a>
      </header> 

      <div className='info'>
        <div className='texto'>
          <h1>Sejam Bem-Vindos a FrontCompany</h1>
          <h3>A melhor empresa de desenvolvimento de sites para autônomos, onde podemos cubrir todas suas atividades através de um site</h3>
        </div>
        <img src="/assets/images/primeiraimg.png" alt="" />
      </div>

      
      <footer className='rodape'>
          <h6>Front Company </h6>
      </footer>
   </div>
  );
}

 
