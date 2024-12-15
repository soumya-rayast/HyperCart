import React from 'react'
import Navbar from '../sharedComponets/Navbar'
import Footer from '../sharedComponets/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='main-content min-h-screen'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout