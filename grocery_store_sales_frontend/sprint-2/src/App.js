
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import ProductDetail from './components/ProductDetail';
import ManageOrder from './components/ManageOrder';
import OrderCustomer from './components/OrderCustomer';
import CartCustomer from './components/CartCustomer';
import Login from './components/Login';
import { createContext, useContext } from 'react';


function App() {
  return (
    <>
    
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path={`/card-customer/:id`} element={<CartCustomer/>}/>
          <Route path={`/login`} element={<Login/>}/>
          <Route path={`/`} element={<Home/>}/>
          <Route path={`/productDetail/:id`} element={<ProductDetail/>}/>
          <Route path={`/register`} element={ <Register />}/>
          <Route path={`/manage-order`} element={<ManageOrder/>}/>
          <Route path={`/order-customer/:id`} element={<OrderCustomer/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
