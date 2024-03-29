import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Admin from './routes/Admin/admin';
import Cart from './routes/Cart/cart'
import Home from './routes/Home/home'
import Edit from './routes/Edit/edit'
import ProductPage from './routes/ProductDetails/product-details'
import {EditForm} from './components/EditForm/EditForm'
import Header from './components/Header/header'


import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   {/* <App /> */}
   <Header/>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/admin" element={<Admin />} />
     <Route path="/cart" element={<Cart />} />
     <Route path="/edit" element={<Edit />} />
     <Route path="/edit/:documentId" element={<EditForm />} />
     <Route path="/details:documenttID" element={<ProductPage />} />

   </Routes>
 </BrowserRouter>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
