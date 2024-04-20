import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewCompany from './components/ViewCompany';
import ViewProduct from './components/ViewProduct';
import ViewPackage from './components/ViewPackage';
import ViewManufacturer from './components/ViewManufacturer';
import ViewStore from './components/ViewStore';
import ViewCart from './components/ViewCart';
import ViewCustomers from './components/ViewCustomer';
import ViewCustomerInstance from './components/ViewCustomerInstance';
import ViewContracts from './components/ViewContract';
import ViewCard from './components/ViewCarddetails';
import ViewBooking from './components/ViewBooking';
import ViewShipping from './components/ViewShipping';
import ViewStoreProds from './components/ViewStoreProd';
import InsertCompany from './components/InsertCompany';
import InsertProduct from './components/InsertProduct';
import InsertPackage from './components/InsertPackage';
import InsertManufacturer from './components/InsertManufacturer';
import InsertStore from './components/InsertStore';
import InsertCart from './components/InsertCart';
import InsertCustomer from './components/InsertCustomer';
import InsertCustomerInstance from './components/InsertCustomerInstance';
import InsertContract from './components/InsertContract';
import InsertCardDetails from './components/InsertCardDetails';
import InsertBooking from './components/InsertBooking';
import InsertShipping from './components/InsertShipping';
import InsertStoreProd from './components/InsertStoreProd';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/view-company' element={<ViewCompany />} /> 
          <Route path='/view-product' element={<ViewProduct />} /> 
          <Route path='/view-package' element={<ViewPackage />} /> 
          <Route path='/view-manufacturer' element={<ViewManufacturer />} /> 
          <Route path='/view-store' element={<ViewStore />} /> 
          <Route path='/view-cart' element={<ViewCart />} /> 
          <Route path='/view-customer' element={<ViewCustomers />} /> 
          <Route path='/view-customerinstance' element={<ViewCustomerInstance />} /> 
          <Route path='/view-contract' element={<ViewContracts />} /> 
          <Route path='/view-carddetails' element={<ViewCard />} /> 
          <Route path='/view-booking' element={<ViewBooking />} /> 
          <Route path='/view-shipping' element={<ViewShipping />} /> 
          <Route path='/view-storeprod' element={<ViewStoreProds />} /> 
          
          <Route path='/insert-company' element={<InsertCompany />} /> 
          <Route path='/insert-product' element={<InsertProduct />} /> 
          <Route path='/insert-package' element={<InsertPackage />} /> 
          <Route path='/insert-manufacturer' element={<InsertManufacturer />} /> 
          <Route path='/insert-store' element={<InsertStore />} /> 
          <Route path='/insert-cart' element={<InsertCart />} /> 
          <Route path='/insert-customer' element={<InsertCustomer />} /> 
          <Route path='/insert-customerinstance' element={<InsertCustomerInstance />} /> 
          <Route path='/insert-contract' element={<InsertContract />} /> 
          <Route path='/insert-carddetails' element={<InsertCardDetails />} /> 
          <Route path='/insert-booking' element={<InsertBooking />} /> 
          <Route path='/insert-shipping' element={<InsertShipping />} /> 
          <Route path='/insert-storeprod' element={<InsertStoreProd />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
