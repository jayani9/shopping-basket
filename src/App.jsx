

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shops from './Pages/Shops';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shops/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens"/>}/>
      <Route path='/womens' element={<ShopCategory  banner={women_banner} category="womens"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}/>
      <Route path="/product" element={<Product/>}>
        <Route path="/productId" element={<Product/>}/>
      </Route>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
