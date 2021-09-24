import React from 'react'
import Aboutimg from '../../../assests/person.jpg'
import './About.css'

const About = () => {
    return (
        <div className="about-wrap">
            <div className="about-flex">
                <section>
                    <p className="about-turning">TURNING</p>
                    <p className="bigIdeas">BIG IDEAS</p>
                    <p className="great">INTO GREAT PRODUCT</p>
                </section>

                <section className="personimg">
                    <img src={Aboutimg} alt ="brokenImage"/>
                </section>
            </div>
        </div>
        
    )
}

export default About
