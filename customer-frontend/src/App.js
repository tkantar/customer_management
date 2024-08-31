import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegisterCustomer from './RegisterCustomer';
import CustomersTable from './CustomersTable';
import EditCustomer from './EditCustomer';
import React, { useState, useEffect } from 'react';

function App() {

  const [customers, setCustomers] = useState([]);

    // Kunden vom Backend abrufen
    useEffect(() => {
        fetch('http://localhost:8080/api/customer')
            .then(response => response.json())
            .then(data => setCustomers(data))
            .catch(error => console.error('Error fetching customers:', error));
    }, []);

    // Kunden löschen
    const deleteCustomer = (id) => {
        fetch(`http://localhost:8080/api/customer/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            setCustomers(customers.filter(customer => customer.email !== id));
        })
        .catch(error => console.error('Error deleting customer:', error));
    };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CustomersTable customers={customers} deleteCustomer={deleteCustomer} />} />
          <Route path="/registerCustomer" element={<RegisterCustomer />} />
          <Route path="/edit-customer/:email" element={<EditCustomer />} />
        </Routes>
      </div>


    </Router>
  );
}

export default App;
