import {useEffect, useState} from 'react'
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../Corpo.css';
import './Comprar.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SpeedIcon from '@mui/icons-material/Speed';
import { Link } from 'react-router-dom';

export default function SUV() {
  const [listaCarros, setCarros] = useState([]);

  const getCarros = async () => {
    const resposta = await axios.get(
      "https://concessionaria.onrender.com/SUV"
    );
    const data = resposta.data;
    setCarros(data);
  };
  useEffect(() =>{
    getCarros();
  }, []);

  return (
    <div className='divisao'>
      <Header/>
      <div className="corpo">
        <div className='corpoGrid'>
          <div className="comprarTitulo">Seminovos SUV</div>
          <div className="comprarCarros">
            {listaCarros.length === 0 ? (<div className="c-loader"></div>) : (
              listaCarros.map((carros) => (
                <div className="cardCarros" key={carros.id}>
                  <div className='dimgCarro'><img className='imgCarro' src={carros.img} alt=""/></div>
                  <span className="cimaNomeCarro">{carros.modelo}</span>
                  <span className="cimaMarcaCarro">{carros.marca}</span>
                  <span className="meioPreco">R$ {carros.preço}</span>
                  <span className="meioKm"><SpeedIcon/>&nbsp; {carros.km} Km</span>
                  <span className="meioAno"><CalendarMonthIcon/>&nbsp; {carros.ano}</span>
                  <div className="baixoLinkBotao">
                    <Link className='linklink' to={`${carros.id}`}><button className="baixoBotao">Comprar</button></Link>
                    <Link className='linklink' to={`/adm/suv/${carros.id}`}><button className="baixoBotao">Editar</button></Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div></div>
      <Footer/>
    </div>
  )
}