import {useEffect, useState} from 'react';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../Corpo.css';
import {FiSend} from 'react-icons/fi';
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import PessoalForm from '../../components/Form/PessoalForm';
import VeiculoForm from '../../components/Form/VeiculoForm';
import FormForm from '../../components/Form/FormForm';
import TipoVeiculo from '../../components/Form/TipoVeiculo';
import Steps from '../../components/Form/Steps';
import FormFinal from '../../components/Form/FormFinal';
import './Vender.css';
import '../../components/Form/Form.css';
import axios from 'axios';

const formTemplate = {
  name: '',
  email: '',
  tipo: '',
  marca: '',
  modelo: '',
  ano: '',
  km: '',
  cor: '',
  foto: '',
  preco: '',
};

export default function Vender() {
  const [data, setData] = useState(formTemplate);
  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value};
    })
  }

  const formComponents = [ 
  <FormForm data={data} />, 
  <PessoalForm data={data} updateFieldHandler={updateFieldHandler} />, 
  <TipoVeiculo data={data} updateFieldHandler={updateFieldHandler} />, 
  <VeiculoForm data={data} updateFieldHandler={updateFieldHandler} />, 
  <FormFinal data={data} updateFieldHandler={updateFieldHandler} />
  ];
  const {currentStep, currentComponent, changeStep, isLastStep, firstStep} = useForm(formComponents);
  
  const navigate = useNavigate()
  const vendeCarro = async(e) => {
    e.preventDefault();

    const marca = data.marca;
    const modelo = data.modelo;
    const ano = data.ano;
    const preço = data.preco;
    const km = data.km;
    const cor = data.cor;
    const img = data.foto;
    const post = {
      marca,
      modelo,
      ano,
      preço,
      km,
      cor,
      img
    }  
    await axios.post(`https://concessionaria.onrender.com/${data.tipo}`, post)
    navigate('/finalizar');
  }
  function precoCarro() {
    const vendeHatch = 80000;
    const vendeSedan = 100000;
    const vendeSUV = 130000;
    const kmCarro = data.km;
    const anoCarro = data.ano;
    const anoAtual = 2023;

    const calculaAno = anoAtual - anoCarro;
    const precoAno = calculaAno * 1000;
    let precoFinal = 0;

    if(data.tipo === 'Hatch'){ precoFinal = vendeHatch - kmCarro - precoAno}
    if(data.tipo === 'Sedan'){ precoFinal = vendeSedan - kmCarro - precoAno}
    if(data.tipo === 'SUV'){ precoFinal = vendeSUV - kmCarro - precoAno}
    data.preco = precoFinal;
  }

  useEffect(() =>{
    precoCarro();
  });
  return (
    <div className='divisao'>
      <Header/>
      <div className="corpo">
        <div className="form-container">
          <Steps currentStep={currentStep} />
          <form onSubmit={(e) => changeStep(currentStep +1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!firstStep && (
                <button type="button" onClick={() => changeStep(currentStep -1)}>
                  <GrFormPrevious/>
                  <span>Voltar</span>
                </button>)}
              {!isLastStep ? (
                <button type='submit'>
                  <span>Avançar</span>
                  <GrFormNext/>
                </button>
              ):(
                <button type='submit' onClick={(e) => vendeCarro(e)}>
                  <span>Vender</span>
                  <FiSend/>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}