import React from 'react'
import './Upipay.css'
import qr from '../Assets/QRCODE.jpg'
import upload from '../Assets/upload_area.svg'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import { useContext } from 'react'
const Upipay = () => {
    const { all_product, getTotalCartAmount, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className='upipay'>
            <h1>UPI PAYMENT</h1>
            <hr />

            <img src={qr} alt="" />
            <h3>pay <span>{getTotalCartAmount()} /-</span> to this QR and Show The Same To US
                While Receiving Your Order</h3>


            {/* <label htmlFor="file-input">
                <img src={upload} id='upld' alt="" />
            </label>
            <input type="file" name='image' id='file-input' hidden /> */}
            <Link to={"/ordered"}><button>Place Order</button></Link>

        </div>
    )
}

export default Upipay
