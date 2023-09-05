
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import ProductDetail from './components/ProductDetail';
import ManageOrder from './components/ManageOrder';
import OrderCustomer from './components/OrderCustomer';


function App() {
  return (
    <>
    
      <BrowserRouter>
      <Header/>
        <Routes>
         
          <Route path={`/`} element={<Home/>}/>
          <Route path={`/register`} element={ <Register />}/>
          <Route path={`/manage-order`} element={<ManageOrder/>}/>
          <Route path={`/order-customer`} element={<OrderCustomer/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
