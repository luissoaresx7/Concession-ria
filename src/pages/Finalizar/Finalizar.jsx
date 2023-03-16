import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../Corpo.css';
import { Link } from 'react-router-dom';
import './Finalizar.css';

export default function Finalizar() {
    return (
        <div className='divisao'>
            <Header/>
            <div className="corpo">
                <div className='finalizador'>
                    <h2>Transação Finalizada</h2>
                    <p>Obrigado pela preferencia!</p>
                    <Link to={'/'} className='final-button'><button>Voltar</button></Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}