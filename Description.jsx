import React from 'react'
import './Description.css'
const Description = () => {
    return (
        <div className='descriptionbox'>
            <div className="navigator">
                <div className="nav-box"> Description</div>
                <div className="nav-box-fade">Reviews(122)</div>
            </div>


            <div className="descriptionbox-description">
                <p>Welcome to <span> NIVI </span>, where culinary excellence awaits you. Experience our passion for flavor and freshness in every dish. Join us for a warm welcome and unforgettable dining moments. At NIVI, your satisfaction is our priority</p>

                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est culpa asperiores soluta dicta obcaecati beatae quisquam dignissimos harum aspernatur veritatis veniam alias laudantium aliquid tempore eligendi, ab deserunt placeat ipsum.</p> */}
            </div>
        </div>


    )
}

export default Description
