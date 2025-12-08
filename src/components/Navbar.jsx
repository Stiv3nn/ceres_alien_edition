import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <section className='alien-hero'>
            <div className="title-wrapper">

                <div className="alien-logo-title">
                    <img src="/src/Image/icon-alien.png" className='icon-alien' height={100} />

                    <h1 className='alien-title'>
                        <span className="title-blue">CERES ALIEN</span>
                        <span className="title-pink"> EDITION</span>
                    </h1>
                </div>

                <p className="alien-subtitle">
                    L'ULTIMA BEVUTA PRIMA DELLO SBARCO
                </p>

                <div className="search-container">
                    <span className="search-icon">🔍</span>
                    <input type="text" placeholder='Cerca la tua birra aliena...' className='search-input' />
                </div>
            </div>
        </section>
    )
}

export default Navbar;