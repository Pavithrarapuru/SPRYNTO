import React from 'react'
import './Payment.css';
// import cash from '../Assets/cash.jpg'
import { Link } from 'react-router-dom';
const Payment = () => {
    return (
        <div className='payment'>
            <h1>PAYMENT</h1>
            <hr />
            <Link to={"/cash"}><button>Cash</button></Link>
            <Link to={"/upi"}><button>UPI</button></Link>
        </div>
    )
}

export default Payment
