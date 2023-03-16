import "./Header.css";
import { Link } from "react-router-dom";
import logo from '../../assets/duduSF.png';

export default function Header() {
  return (
    <div className="header">
      <div className="cabecalho">
        <nav className="menuNavegacao">
          <div className="logoSite">
            <img className='logoDudu' src={logo} alt="duduLogo"/>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Comprar
              <ul className="dropdown">
                <Link to="/hatch"><li>Hatch</li></Link>
                <Link to="/sedan"><li>Sedan</li></Link>
                <Link to="/suv"><li>SUV</li></Link>
              </ul>
            </li>
            <li><Link to="/vender">Vender</Link></li>
            <li><Link to="/Equipe">Equipe</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
