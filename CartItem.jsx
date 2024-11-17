import React from 'react'
import './CartItem.css'
import { ShopContext } from '../../context/ShopContext'
import { useContext } from 'react'
import remove_icon from '../Assets/cart_cross_icon.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CartItem = () => {
    const { all_product, getTotalCartAmount, cartItems, removeFromCart } = useContext(ShopContext);
    // const [orderDetails, setOrderDetails] = useState({

    //     product_id: "",
    //     product_name: "",
    //     product_price: "",
    //     quantity: "",
    //     payment_method: ""
    // })
    // const changeHandler = (e) => {
    //     setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value })
    // }
    const placeOrder = async () => {
        try {
            // Fetch user details to get roll number
            const token = localStorage.getItem('auth-token');
            const response = await fetch('https://canteen-evz0.onrender.com/userdetails', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch user details');
            }
            const userData = await response.json();
            const rollNumber = userData.rollno;
            const name = userData.name;
            const phone = userData.phone;

            // Create order details for each product in the cart
            const updatedOrderDetails = all_product.reduce((acc, product) => {
                if (cartItems[product.id] > 0) {
                    const orderDetail = {
                        product_id: product.id,
                        product_name: product.name,
                        product_price: product.new_price,
                        quantity: cartItems[product.id],
                        payment_method: "", // Assuming this will be populated later
                        roll_number: rollNumber, // Include user's roll number
                        name: name,
                        phone: phone
                    };
                    acc.push(orderDetail);
                    console.log(orderDetail);
                }
                return acc;
            }, []);

            console.log(updatedOrderDetails);

            // Send each order detail to the backend
            for (let i = 0; i < updatedOrderDetails.length; i++) {
                const response = await fetch('https://canteen-evz0.onrender.com/createorder', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedOrderDetails[i]),
                });
                const data = await response.json();
                if (response.ok) {
                    console.log(`Order ${i + 1} placed successfully`);
                } else {
                    console.log(`Failed to place order ${i + 1}: ${data.error}`);
                }
            }
        } catch (error) {
            console.error('Error placing orders:', error);
        }
    };


    return (
        <div className='cartitem'>
            <div className="main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            {/* <hr /> */}
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div>
                            <div className="main format">
                                <img src={e.image} alt="" className='product-icon' />
                                <p>{e.name}</p>
                                <p>{e.new_price} </p>
                                <button className='quantity'>{cartItems[e.id]}</button>
                                <p>Rs.{e.new_price * cartItems[e.id]} </p>
                                <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" className='remove' />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            <div className="cart-down">
                <div className="cart-total">
                    <h1>cart Total</h1>
                    <div>
                        <div className="cart-total-item">
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()} </p>
                        </div>
                        <hr />
                        <div className="cart-total-item">
                            <p>GST</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-item-total-item">
                            <h3>Total</h3>
                            <h3>{getTotalCartAmount()} </h3>
                        </div>
                    </div>
                    <Link to={"/payment"}><button onClick={() => { placeOrder() }}>PLACE ORDER</button></Link>
                </div>
                <div className="promocode">
                    <p>if you have a promo code,enter it here</p>
                    <div className="promo">
                        <input type="text" placeholder='enter promocode' />
                        <button onClick={() => { alert("PromoCode Is Invalid ") }}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartItem

