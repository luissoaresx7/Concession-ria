import './Steps.css'
import {AiFillCar, AiOutlineUser} from 'react-icons/ai';
import {FaCarAlt, FaCarSide} from 'react-icons/fa';

export default function Steps({currentStep}) {
    return (
        <div className='steps'>
            <div className="step active">
                <AiFillCar />
                <p>Venda seu carro!</p>
            </div>
            <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
                <AiOutlineUser />
                <p>Dados de Contato</p>
            </div>
            <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
                <FaCarSide />
                <p>Tipo do Veículo</p>
            </div>
            <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
                <FaCarAlt />
                <p>Dados do veículo</p>
            </div>
        </div>
    )
}