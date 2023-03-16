import axios from 'axios';
import { useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../Corpo.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SpeedIcon from '@mui/icons-material/Speed';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import '../Comprar/Carro/Carro.css';

export default function AdmHatch() {
    const [listaCarros, setCarros] = useState([]);
    const navigate = useNavigate();
    const parametros = useParams();
    //mostra
    const carro = listaCarros.find((carro) => {
        return carro.id === Number(parametros.id)
    })
    const carros = async () => {
        const resposta = await axios.get(
            "https://concessionaria.onrender.com/Hatch"
        );
        const data = resposta.data;
        setCarros(data);
    };

    //troca
    const [marca, setTrocaMarca] = useState()
    const [modelo, setTrocaModelo] = useState()
    const [ano, setTrocaAno] = useState()
    const [preço, setTrocaPreco] = useState()
    const [km, setTrocaKm] = useState()
    const [cor, setTrocaCor] = useState()
    const [img, setTrocaFoto] = useState()

    const trocaSingle = async(e) =>{
        e.preventDefault();
        
        const resp = await axios.get(
            `https://concessionaria.onrender.com/Hatch/${carro.id}`
        );
        const data = resp.data;
        const put = {
            "marca": marca === undefined ? data.marca : marca,
            "modelo": modelo === undefined ? data.modelo : modelo,
            "ano": ano === undefined ? data.ano : ano,
            "preço": preço === undefined ? data.preço : preço,
            "km": km === undefined ? data.km : km,
            "cor": cor ===  undefined ? data.cor : cor,
            "img": img === undefined ? data.img : img
        }
        console.log(data)
        axios.put(
            `https://concessionaria.onrender.com/Hatch/${carro.id}`,
            put
        );
    }
    useEffect(() => {
        carros()
    }, [trocaSingle]) 
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
                        </div>
                    </div>
                    <div className='card-trocar'>
                        <div className="troca-body">
                            <div className='troca-form'>
                                <div className="troca-texto">Digite somente o que deseja trocar!</div>
                                <label htmlFor="marca">Marca:</label>
                                <div className='troca-div'>
                                    <input 
                                    type="text" 
                                    name='text'
                                    id='marca'
                                    placeholder='Marca do veículo'
                                    onChange={(e) => setTrocaMarca(e.target.value)}
                                    />
                                    
                                </div>
                                <label htmlFor="modelo">Modelo:</label>
                                <div className='troca-div'>
                                    <input 
                                    type="text" 
                                    name='text'
                                    id='modelo'
                                    placeholder='Modelo do veículo'
                                    onChange={(e) => setTrocaModelo(e.target.value)}
                                    />
                                    
                                </div>
                                <label htmlFor="ano">Ano:</label>
                                <div className='troca-div'>
                                    <input 
                                    type="text" 
                                    name='text'
                                    id='ano'
                                    placeholder='Ano do veículo'
                                    onChange={(e) => setTrocaAno(e.target.value)}
                                    />
                                    
                                </div>
                                <label htmlFor="preco">Preço:</label>
                                <div className='troca-div'>
                                    <input 
                                    type="text" 
                                    name='text'
                                    id='preco'
                                    placeholder='Preço do veículo'
                                    onChange={(e) => setTrocaPreco(e.target.value)}
                                    />
                                    
                                </div>
                                <label htmlFor="km">Km:</label>
                                <div className='troca-div'>
                                    <input 
                                    type="text" 
                                    name='text'
                                    id='km'
                                    placeholder='Quilometragem'
                                    onChange={(e) => setTrocaKm(e.target.value)}
                                    />
                                    
                                </div>
                                <label htmlFor="cor">Cor:</label>
                                <div className='troca-div'>
                                    <input 
                                    type="text" 
                                    name='text'
                                    id='cor'
                                    placeholder='Cor do veículo'
                                    onChange={(e) => setTrocaCor(e.target.value)}
                                    />
                                </div>
                                <label htmlFor="foto">Foto:</label>
                                <div className='troca-div'>
                                    <input 
                                    type="text" 
                                    name='text'
                                    id='foto'
                                    placeholder='Foto do veículo'
                                    onChange={(e) => setTrocaFoto(e.target.value)}
                                    />
                                    <button className="troca-unica-button" onClick={(e) => trocaSingle(e)}>Trocar</button>
                                </div>
                                
                                <div></div>
                                
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
            <Footer/>
        </div>
    )
}