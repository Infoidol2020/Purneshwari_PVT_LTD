import React from 'react'
import BannerImage from '../../../assests/profileee.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <img className="banner-img" src={BannerImage} alt="brokenImage"/>
        </div>
    )
}

export default Banner
