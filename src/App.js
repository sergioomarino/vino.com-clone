import Navbartop from './component/Navbartop';
import Navbarmedium from './component/Navbarmedium';
import Navbardown from './component/Navbardown';
import Navbardown2 from './component/Navbardown2';
import Banner from './component/Banner';
import ListaProdotti from './component/Listaprodotti';
import Carrello from './component/Carrello';
import Home from './Home';
import { Routes,Route } from 'react-router-dom';



import './App.css';

function App() {
  return (
    <div className="App">
          <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/carrello' element={<Carrello/>}>
       <Route path=':id' element={<span></span>}/>
       </Route>
     
        
  
        </Routes>
    </div>
  );
}

export default App;
