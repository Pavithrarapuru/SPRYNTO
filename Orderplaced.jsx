import React from 'react'
import './Orderplaced.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const Orderplaced = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSuccessMessage(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="order-success-container">
            {!showSuccessMessage ? (
                <div className="loading-screen">
                    <h2>Loading<span className="ellipsis">....</span></h2>
                </div>
            ) : (
                <div className="success-message">

                    <h2>Ordered Successfully!</h2>
                    <p>You Can Receive Your Order Once Your Payment Has Been Verified</p>
                    <p>Thank you , Come Again</p>
                    <Link to="/">Continue Ordering</Link>
                </div>
            )}
        </div>
    )
};

export default Orderplaced
