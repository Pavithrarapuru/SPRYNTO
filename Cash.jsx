import React, { useState, useEffect } from 'react';
import './Cash.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
const Cash = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const { all_product, getTotalCartAmount, cartItems, removeFromCart } = useContext(ShopContext);
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
                    <h2>Loading<span className="ellipsis">...</span></h2>
                </div>
            ) : (
                <div className="success-message">
                    <h2>Ordered Successfully!</h2>
                    <p className='pay'> Kindly pay <span>{getTotalCartAmount()} /-</span> while receiving your order </p>
                    <p>Thank you for your order. It's on its way!</p>
                    <Link to="/">Continue Ordering</Link>
                </div>
            )}
        </div>
    )
};



export default Cash
