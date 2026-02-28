import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import FeaturedProducts from '../components/FeaturedProducts'
import Categories from '../components/OurCategories'
import TrendingProducts from '../components/TrendingProducts'
import OurService from '../components/OurService'
import FromTheBlog from '../components/FromTheBlog'
import Accordian from '../components/Accordian'
import OurNewsletter from '../components/OurNewsletter'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <FeaturedProducts />
            <Categories />
            <TrendingProducts />
            <OurService />
            <FromTheBlog />
            <Accordian />
            <OurNewsletter />
            <Footer/>
        </>
    )
}

export default Home