import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
    return (
        <div className="related">
            <h1>Related Products</h1>
            <hr />
            {data_product.map((item, i) => {
                let image = <img src={item.image} alt="" />
                // Include the image variable here
                return (
                    <div className='relateditem'>
                        <div className="grid">
                            {image}
                            <Item key={i} id={item.id} name={item.name} new_price={<p><b> Price :{item.new_price} /-</b></p>} old_price={<p>Old price :{item.old_price} /-</p>} />
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default RelatedProducts
