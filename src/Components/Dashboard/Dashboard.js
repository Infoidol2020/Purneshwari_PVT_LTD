import React from 'react'
import About from './About/About'
import Banner from './Banner/Banner'
import InfoContainer from './InfomationContainer/InfoContainer'
import NavBar from './Navbar/NavBar'

const Dashboard = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <InfoContainer/>
            <About/>
        </div>
    )
}

export default Dashboard
