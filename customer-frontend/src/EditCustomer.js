import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditCustomer() {
    const { email } = useParams();
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

    const navigate = useNavigate();

    // Kunden vom Backend laden
    useEffect(() => {
        fetch(`http://localhost:8080/api/customer/${email}`)
            .then(response => response.json())
            .then(data => setCustomer(data))
            .catch(error => console.error('Error fetching customer:', error));
    }, [email]);

    // Änderungen speichern
    const handleSave = () => {
        fetch(`http://localhost:8080/api/customer/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(() => {
            navigate('/');  // Zurück zur Startseite nach dem Speichern
        })
        .catch(error => console.error('Error updating customer:', error));
    };

    // Handle Change
    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h2>Edit Customer</h2>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={customer.email} onChange={handleChange} disabled />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={customer.password} onChange={handleChange} />
                </div>
                <div>
                    <label>Gender:</label>
                    <input type="text" name="gender" value={customer.gender} onChange={handleChange} />
                </div>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={customer.firstName} onChange={handleChange} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={customer.lastName} onChange={handleChange} />
                </div>
                <div>
                    <label>Birth Date:</label>
                    <input type="date" name="birthDate" value={customer.birthDate} onChange={handleChange} />
                </div>
                <div>
                    <label>Birth Place:</label>
                    <input type="text" name="birthPlace" value={customer.birthPlace} onChange={handleChange} />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="text" name="phoneNumber" value={customer.phoneNumber} onChange={handleChange} />
                </div>
                <div>
                    <label>Nationality:</label>
                    <input type="text" name="nationality" value={customer.nationality} onChange={handleChange} />
                </div>
                <div>
                    <label>IBAN:</label>
                    <input type="text" name="iban" value={customer.iban} onChange={handleChange} />
                </div>
                <div>
                    <label>Street:</label>
                    <input type="text" name="street" value={customer.street} onChange={handleChange} />
                </div>
                <div>
                    <label>ZIP:</label>
                    <input type="text" name="zip" value={customer.zip} onChange={handleChange} />
                </div>
                <div>
                    <label>City:</label>
                    <input type="text" name="city" value={customer.city} onChange={handleChange} />
                </div>
                <button type="button" onClick={handleSave}>Save</button>
            </form>
        </div>
    );
}

export default EditCustomer;
