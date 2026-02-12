import React from 'react'
import Hero from '../../sections/Hero'
import TypeofShoes from '../../components/TypeofShoes'
import HomeImgSection from '../../sections/HomeImgSection'
import CompanyCrousel from '../../components/CompanyCarousel/CompanyCarousel'
import GetAllUpdates from '../../components/GetAllUpdates'

function Home() {
    return (
        <div>
            <Hero />
            <TypeofShoes />
            <HomeImgSection />
            <CompanyCrousel />
            <GetAllUpdates />
        </div>
    )
}

export default Home
