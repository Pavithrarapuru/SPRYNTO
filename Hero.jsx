import React from 'react'
import '../hero/Hero.css'
import hand_icon from "../Assets/hand_icon.png"
import arrow from "../Assets/arrow.png"
import hero_image from "../Assets/hero-slider-2.jpg"
import canteen from "../Assets/canteen.logo.jpg"
import vitslogo from "../Assets/vits.png"

const Hero = () => {
    return (
        <div className='hero'>
            <div class="text">
                <img className='vitslogo' src={vitslogo} alt="" height="70px" width="70px" />

                <h2 className='pbr'> PBR VISVODAYA
                    INSTITUTE OF SCIENCE AND TECHNOLOGY</h2>
                <h3 className="love">For the love of flavours <br />
                    Where every flavour tells a story</h3>
                <h3 className='traditional'>Tradition and Hygine</h3>
                <h3 className='delightfull'>Come and have delightful experience</h3>
                <h3 className='joy'>Feel the joy of mouth watering food <br /> <br /> only <span> @VitsCafetaria</span></h3>
            </div>
        </div >

    )
}

export default Hero
