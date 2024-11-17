import React, { useState } from 'react';
import './FourDigits.css';
import { Link } from 'react-router-dom';

const FourDigits = () => {
    const [fourDigits, setFourDigits] = useState('');

    const handleChange = (event) => {
        setFourDigits(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:4000/fetchorders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ product_id: fourDigits })
            });

            if (!response.ok) {
                throw new Error('Failed to submit four digits');
            }

            console.log('Four digits submitted successfully');
            // Optionally, you can handle success here, such as showing a success message
        } catch (error) {
            console.error('Error submitting four digits:', error);
            // Optionally, you can handle errors here, such as showing an error message
        }
    };


    return (
        <div className='fourdigits'>
            <input
                type='text'
                placeholder='Enter The Last 4 Digits Of Your RollNumber'
                name='fourdigits'
                value={fourDigits}
                onChange={handleChange}
                required
            />
            <p>Whenever your Order Gets Ready,</p>
            <p> They Will Call you to take it By This Number</p>
            <br />
            <Link to={"/cash"}><button onClick={handleSubmit}>Submit</button></Link>
        </div>
    );
};

export default FourDigits;
