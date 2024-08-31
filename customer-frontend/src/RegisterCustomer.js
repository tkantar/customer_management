import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterCustomer() {
    const [customer, setCustomer] = useState({
        email: '',
        password: '',
        gender: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        birthPlace: '',
        phoneNumber: '',
        nationality: '',
        iban: '',
        street: '',
        zip: '',
        city: ''
    });

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/api/customer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Customer created:', data);
            setCustomer({
                email: '',
                password: '',
                gender: '',
                firstName: '',
                lastName: '',
                birthDate: '',
                birthPlace: '',
                phoneNumber: '',
                nationality: '',
                iban: '',
                street: '',
                zip: '',
                city: ''
            });
            
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <h2>Register Customer</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={customer.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Passwort:</label>
                    <input type="password" name="password" value={customer.password} onChange={handleChange} required />
                </div>
                <div>
                    <label>Geschlecht:</label>
                    <input type="text" name="gender" value={customer.gender} onChange={handleChange} required />
                </div>
                <div>
                    <label>Vorname:</label>
                    <input type="text" name="firstName" value={customer.firstName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Nachname:</label>
                    <input type="text" name="lastName" value={customer.lastName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Geburtsdatum:</label>
                    <input type="date" name="birthDate" value={customer.birthDate} onChange={handleChange} required />
                </div>
                <div>
                    <label>Geburtsort:</label>
                    <input type="text" name="birthPlace" value={customer.birthPlace} onChange={handleChange} required />
                </div>
                <div>
                    <label>Telefonnummer:</label>
                    <input type="text" name="phoneNumber" value={customer.phoneNumber} onChange={handleChange} required />
                </div>
                <div>
                    <label>Nationalität:</label>
                    <input type="text" name="nationality" value={customer.nationality} onChange={handleChange} required />
                </div>
                <div>
                    <label>IBAN:</label>
                    <input type="text" name="iban" value={customer.iban} onChange={handleChange} required />
                </div>
                <div>
                    <label>Straße und Hausnummer:</label>
                    <input type="text" name="street" value={customer.street} onChange={handleChange} required />
                </div>
                <div>
                    <label>PLZ:</label>
                    <input type="number" name="zip" value={customer.zip} onChange={handleChange} required />
                </div>
                <div>
                    <label>Ort:</label>
                    <input type="text" name="city" value={customer.city} onChange={handleChange} required />
                </div>
                
                <button type="submit">Register</button>
            </form>
            <br/><br/><br/>
            <nav><ul><li><Link to="/">Back to start page</Link></li></ul></nav>
        </div>
    );
}

export default RegisterCustomer;
