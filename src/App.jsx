import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Customers from './components/Customers';
import AddCustomer from './components/addCustomer';
import CustomerDetails from './components/customerDetails';
import ExpiringSoon from './components/Expiring-soon';
import Expired from './components/Expired';
import Settings from './components/settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/add-customer" element={<AddCustomer />} />
       <Route path="/customer-details" element={<CustomerDetails />} />
        <Route path="/expiring" element={<ExpiringSoon />} />
        <Route path="/expired" element={<Expired />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}