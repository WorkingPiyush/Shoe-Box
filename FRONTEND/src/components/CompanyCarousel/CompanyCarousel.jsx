import React from 'react'
import './CompanyCarousel.css'
import bata from '@/assets/Images/company-logos/BATA.jpg'
import campus from '@/assets/Images/company-logos/CAMPUS.png';
import mochi from '@/assets/Images/company-logos/MOCHI.png';
import redtape from '@/assets/Images/company-logos/RED TAPE.png';
import relaxo from '@/assets/Images/company-logos/RELAXO.jpg';
import sparx from '@/assets/Images/company-logos/SPARX.png';
function CompanyCrousel() {
    return (
        <div>
            <div className='carousel-container'>
                <div className="carousel-track">
                    <div className="card"><img src={bata} alt="bata-logo" /></div>
                    <div className="card"><img src={campus} alt="campus-logo" /></div>
                    <div className="card"><img src={mochi} alt="mochi-logo" /></div>
                    <div className="card"><img src={redtape} alt="redtape-logo" /></div>
                    <div className="card"><img src={relaxo} alt="relaxo-logo" /></div>
                    <div className="card"><img src={sparx} alt="sparx-logo" /></div>

                    <div className="card"><img src={bata} alt="bata-logo" /></div>
                    <div className="card"><img src={campus} alt="campus-logo" /></div>
                    <div className="card"><img src={mochi} alt="mochi-logo" /></div>
                    <div className="card"><img src={redtape} alt="redtape-logo" /></div>
                    <div className="card"><img src={relaxo} alt="relaxo-logo" /></div>
                    <div className="card"><img src={sparx} alt="sparx-logo" /></div>

                    <div className="card"><img src={bata} alt="bata-logo" /></div>
                    <div className="card"><img src={campus} alt="campus-logo" /></div>
                    <div className="card"><img src={mochi} alt="mochi-logo" /></div>
                    <div className="card"><img src={redtape} alt="redtape-logo" /></div>
                    <div className="card"><img src={relaxo} alt="relaxo-logo" /></div>
                    <div className="card"><img src={sparx} alt="sparx-logo" /></div>

                    <div className="card"><img src={bata} alt="bata-logo" /></div>
                    <div className="card"><img src={campus} alt="campus-logo" /></div>
                    <div className="card"><img src={mochi} alt="mochi-logo" /></div>
                    <div className="card"><img src={redtape} alt="redtape-logo" /></div>
                    <div className="card"><img src={relaxo} alt="relaxo-logo" /></div>
                    <div className="card"><img src={sparx} alt="sparx-logo" /></div>
                </div>
            </div>
        </div>
    )
}

export default CompanyCrousel
