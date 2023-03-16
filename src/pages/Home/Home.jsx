import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../Corpo.css';
import './Home.css';
import fotinha from '../../assets/ccce.jpg';
import fotinha2 from '../../assets/foto2.jpeg';

export default function Home() {
  return (
    <div className='divisao'>
      <Header/>
      <div className="corpo">
        <div className="corpoMsg">
          <Carousel pause="hover" controls={false}>
            <Carousel.Item interval={2500}>
              <img
              className='d-block w-100'
              src={fotinha}
              alt="Image One"
              />
              <Carousel.Caption>
                <p className='carrosselTexto'>Carros</p>
                <p className='carrosselTexto'>Seminovos a um clique!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
              className='d-block w-100'
              src={fotinha2}
              alt="Image Two"
              />
              <Carousel.Caption>
                <p className='carrosselTexto'>Avaliamos seu Carro</p>
                <p className='carrosselTexto'>sem sair de casa!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
