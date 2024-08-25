

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shops from './Pages/Shops';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shops/>}/>
      <Route path='/mens' element={<ShopCategory category="mens"/>}/>
      <Route path='/womens' element={<ShopCategory  category="womens"/>}/>
      <Route path='/kids' element={<ShopCategory  category="kids"/>}/>
      <Route path="/product" element={<Product/>}>
        <Route path="/productId" element={<Product/>}/>
      </Route>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<LoginSignup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
