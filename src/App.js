import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile';
import Products from './Pages/Products';
import Landing from './Pages/Landing/Landing';
import LandingV2 from './Pages/Landing/LandingV2';
import CatPage from './Pages/Category Page/CatPage';
import './App.css';
import Data from './Pages/Data/index';
import Buy from './Pages/Buy/Buy';
import BuySuccess from './Pages/Buy/BuySucess';
import Create from './Pages/Create/Create,';


function App() {
  return (
    <div data-theme="light">

      {/* <Landing /> */}

      {/* <CatPage /> */}

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/landing' element={<LandingV2 />} />
        <Route path='/category/music' element={<CatPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/buy/success' element={<BuySuccess />} />
        <Route path='/create' element={<Create />} />


        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/data' element={<Data />} />



/* </Routes>



</div>
);
}

export default App;
