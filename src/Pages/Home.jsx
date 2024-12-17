import React, { useContext } from 'react'
import Layout from '../Layout/Layout'
import HeroSection from '../Components/HeroSection'
import Category from '../Components/Category'
import HomePageProductCard from '../Components/HomePageProductCard'
import Track from '../Components/Track'
import Testimonial from '../Components/Testimonial'

const Home = () => {
    return (
        <Layout>
            <HeroSection />
            <Category />
            <HomePageProductCard/>
            <Track/>
            <Testimonial/>
        </Layout>
    )
}

export default Home