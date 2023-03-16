import axios from 'axios';
import { useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import '../../Corpo.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SpeedIcon from '@mui/icons-material/Speed';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import './Carro.css';

export default function CarroSedan() {
    const [listaCarros, setCarros] = useState([]);
    const navigate = useNavigate();
    const parametros = useParams();
    //mostra
    const carros = async () => {
        const resposta = await axios.get(
            "https://concessionaria.onrender.com/Sedan"
        );
        const data = resposta.data;
        setCarros(data);
    };
    //compra
    const comprarCarro = async() => {
        await axios.delete(
            `https://concessionaria.onrender.com/Sedan/${carro.id}`
        );
        navigate('/finalizar');
    };
    const carro = listaCarros.find((carro) => {
        return carro.id === Number(parametros.id)
    })
    //troca
    const [trocaMarca, setTrocaMarca] = useState()
    const [trocaModelo, setTrocaModelo] = useState()
    const [trocaAno, setTrocaAno] = useState()
    const [trocaKm, setTrocaKm] = useState()
    const [trocaCor, setTrocaCor] = useState()
    const [trocaFoto, setTrocaFoto] = useState()

    const trocarCarro = async(e) =>{
        e.preventDefault();
        const vende = 100000;
        const kmCarro = trocaKm;
        const anoCarro = trocaAno;
        const anoAtual = 2023;
        const calculaAno = anoAtual - anoCarro;
        const precoAno = calculaAno * 1000;
        const trocaPreco = vende - kmCarro - precoAno;

        const marca = trocaMarca;
        const modelo = trocaModelo;
        const ano = trocaAno;
        const preço = trocaPreco;
        const km = trocaKm;
        const cor = trocaCor;
        const img = trocaFoto;
        const put = {marca, modelo, ano, preço, km, cor, img};
        await axios.put(
            `https://concessionaria.onrender.com/Sedan/${carro.id}`, put
        );
        navigate('/finalizar');
    }

    useEffect(() => {
        carros()
    }, []) 
    return (
        <div className='divisao'>
            <Header/>
            <div className="corpo">
                {listaCarros.length === 0 ? (<div className="c-loader"></div>) : 
                (<div className='corpo-carro-container'>
                    <div className="carro-container">
                        <div className='carro-img'><img className='carro-img-tag' src={carro.img} alt=""/></div>
                        <div className='carro-nome-preco'>
                            <span className="carro-modelo">{carro.modelo}</span>
                            <span className="carro-preco">R$ {carro.preço}</span>
                        </div>
                        <span className="carro-marca">{carro.marca}</span>
                        <div className='carro-infos-container'>
                            <div className='carro-infos'>
                                <span className="carro-km"><SpeedIcon/>{carro.km} Km</span>
                                <span className="carro-ano"><CalendarMonthIcon/>{carro.ano}</span>
                                <span className="carro-cor"><InvertColorsIcon/>{carro.cor}</span>
                            </div>
                            <button className="carro-botao" onClick={comprarCarro}>Comprar</button>
                        </div>
                    </div>
                    <div className='card-trocar'>
                        <div className='troca-header'>
                            <span className='troca-titulo'>Inclua seu Carro na Troca</span>
                            <span className="troca-preco">R$ {carro.preço}</span>
                        </div>
                        <div className="troca-body">
                            <form className='troca-form' onSubmit={(e) => trocarCarro(e)}>
                                <div className='troca-texto'>Só trocamos pelo mesmo tipo de veículo e por uma diferença mínima de valor, mais informações em <u>Termos de Uso</u>.</div>
                                <label htmlFor="marca">Marca:</label>
                                <input 
                                type="text" 
                                name='text'
                                id='marca'
                                placeholder='Marca do veículo'
                                required
                                onChange={(e) => setTrocaMarca(e.target.value)}
                                />
                                <label htmlFor="modelo">Modelo:</label>
                                <input 
                                type="text" 
                                name='text'
                                id='modelo'
                                placeholder='Modelo do veículo'
                                required
                                onChange={(e) => setTrocaModelo(e.target.value)}
                                />
                                <label htmlFor="ano">Ano:</label>
                                <input 
                                type="text" 
                                name='text'
                                id='ano'
                                placeholder='Ano do veículo'
                                required
                                onChange={(e) => setTrocaAno(e.target.value)}
                                />
                                <label htmlFor="km">Km:</label>
                                <input 
                                type="text" 
                                name='text'
                                id='km'
                                placeholder='Quilometragem'
                                required
                                onChange={(e) => setTrocaKm(e.target.value)}
                                />
                                <label htmlFor="cor">Cor:</label>
                                <input 
                                type="text" 
                                name='text'
                                id='cor'
                                placeholder='Cor do veículo'
                                required
                                onChange={(e) => setTrocaCor(e.target.value)}
                                />
                                <label htmlFor="foto">Foto:</label>
                                <input 
                                type="text" 
                                name='text'
                                id='foto'
                                placeholder='Link da foto do veículo'
                                required
                                onChange={(e) => setTrocaFoto(e.target.value)}
                                />
                                <div></div>
                                <button className="trocar-botao" type='submit'>Trocar</button>
                            </form>
                        </div>
                    </div>
                </div>)}
            </div>
            <Footer/>
        </div>
    )
}