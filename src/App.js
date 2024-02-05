
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import OrderNow from './Components/OrderNow/OrderNow';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/painting' element={<ShopCategory banner={men_banner} category='painting'/>}/>
        <Route path='/sketch' element={<ShopCategory banner={women_banner} category='sketch'/>}/>
        <Route path='/Drawing' element={<ShopCategory banner={kid_banner} category='drawing'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/> 
        </Route>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/Login' element={<LoginSignup/>}/> 
      </Routes>
      <OrderNow/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
