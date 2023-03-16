import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Vender from './pages/Vender/Vender';
import Equipe from './pages/Equipe/Equipe';
import Hatch from './pages/Comprar/Hatch';
import Sedan from './pages/Comprar/Sedan';
import SUV from './pages/Comprar/SUV';
import CarroHatch from './pages/Comprar/Carro/CarroHatch';
import CarroSedan from './pages/Comprar/Carro/CarroSedan';
import CarroSUV from './pages/Comprar/Carro/CarroSUV';
import Finalizar from './pages/Finalizar/Finalizar';
import AdmHatch from './pages/Editar/AdmHatch';
import AdmSedan from './pages/Editar/AdmSedan';
import AdmSUV from './pages/Editar/AdmSUV';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/hatch' element={<Hatch/>} />
          <Route path='/sedan' element={<Sedan/>} />
          <Route path='/suv' element={<SUV/>} />
          <Route path='/vender' element={<Vender/>} />
          <Route path='/equipe' element={<Equipe/>} />
          <Route path='/hatch/:id' element={<CarroHatch/>}/>
          <Route path='/sedan/:id' element={<CarroSedan/>}/>
          <Route path='/suv/:id' element={<CarroSUV/>}/>
          <Route path='/adm/hatch/:id' element={<AdmHatch/>}/>
          <Route path='/adm/sedan/:id' element={<AdmSedan/>}/>
          <Route path='/adm/suv/:id' element={<AdmSUV/>}/>
          <Route path='/finalizar' element={<Finalizar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
