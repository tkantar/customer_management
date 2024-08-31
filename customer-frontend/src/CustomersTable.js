import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function CustomersTable({ customers, deleteCustomer }) {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Customers List</h2>
            <nav><ul><li><Link to="/registerCustomer">Register Customer</Link></li></ul></nav>
            <table border="1" cellPadding="5">
                <thead>
                    <tr>
                        <th>Actions</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birth Date</th>
                        <th>Birth Place</th>
                        <th>Phone Number</th>
                        <th>Nationality</th>
                        <th>IBAN</th>
                        <th>Street</th>
                        <th>ZIP</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.email}>
                            <td>
                                <button onClick={() => deleteCustomer(customer.email)}>Delete</button>
                                <button onClick={() => navigate(`/edit-customer/${customer.email}`)}>Edit</button>
                            </td>
                            <td>{customer.email}</td>
                            <td>{customer.password}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.birthDate}</td>
                            <td>{customer.birthPlace}</td>
                            <td>{customer.phoneNumber}</td>
                            <td>{customer.nationality}</td>
                            <td>{customer.iban}</td>
                            <td>{customer.street}</td>
                            <td>{customer.zip}</td>
                            <td>{customer.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomersTable;
