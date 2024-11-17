import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';
import { useContext } from 'react';

// import Item from '../Item/Item';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext)
    return (
        <div className='productdisplay'>
            <div className="left">
                <div className="img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="img">
                    <img className='main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>{product.name}</h1>
                <div className="right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="prices">
                    <div className="z">
                        <div className="price-old">
                            {product.old_price} /-
                        </div>
                        <div className="price-new">
                            {product.new_price} /-
                        </div>
                    </div>
                    <div className="right-description">
                        Immerse yourself in a world of delights , where every dish tells a story. Experience the perfect blend of tradition and innovation as our chefs create unforgettable dining experiences. Elevate your dining journey with our diverse menu.
                    </div>

                    <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>


                </div>
            </div>
        </div>
    )
}

export default ProductDisplay
