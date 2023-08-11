import './App.css';

import { Routes, Route } from 'react-router-dom';

//Pages & Components
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Landing from './Pages/Landing/Landing';
import LandingV2 from './Pages/Landing/LandingV2';
import CatPage from './Pages/Category Page/CatPage';
import Buy from './Pages/Buy/Buy';
import BuySuccess from './Pages/Buy/BuySucess';
import Create from './Pages/Create/Create,';
import CreateSucess from './Pages/Create/CreateSucess';
import AllEvents from './Pages/AllEvents/AllEvents';



function App() {
  return (
    <div data-theme="light">

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/landing' element={<LandingV2 />} />
        <Route path='/category' element={<CatPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/buy/success' element={<BuySuccess />} />
        <Route path='/create' element={<Create />} />
        <Route path='/create/success' element={<CreateSucess />} />
        <Route path='/allevents' element={<AllEvents />} />

      </Routes>
    </div>
  );
}

export default App;
