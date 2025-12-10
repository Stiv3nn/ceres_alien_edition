import React from 'react'
// IMPORTIAMO LA NAVBAR
import Navbar from '../components/Navbar'
// IMPORTIAMO PRODUCTCARD
import ProductCard from '../Components/ProductCard'

const Home = () => {
    // prodotti fittizi, li cambierò più avanti
    const products = [
        {
            id: 1,
            name: "Ceres Alien IPA",
            description: "Una birra intergalattica dal sapore intenso.",
            price: "3.50€",
            image: "/src/Image/alien_beer.jpg",
            alcohol: "6.5%",
            type: "IPA"
        },
        {
            id: 2,
            name: "Nebula Lager",
            description: "Birra chiara e rinfrescante inspirata alle nebulose.",
            price: "3.80€",
            image: "/src/Image/2alien_beer.jpg",
            alcohol: "4.8%",
            type: "LAGER"
        },
        {
            id: 3,
            name: "Nebula Lager",
            description: "Birra chiara e rinfrescante inspirata alle nebulose.",
            price: "3.80€",
            image: "/src/Image/3alien_beer.jpg",
            alcohol: "4.8%",
            type: "LAGER"
        },
        {
            id: 4,
            name: "Nebula Lager",
            description: "Birra chiara e rinfrescante inspirata alle nebulose.",
            price: "3.80€",
            image: "/src/Image/3alien_beer.jpg",
            alcohol: "4.8%",
            type: "LAGER"
        },
        {
            id: 5,
            name: "Nebula Lager",
            description: "Birra chiara e rinfrescante inspirata alle nebulose.",
            price: "3.80€",
            image: "/src/Image/3alien_beer.jpg",
            alcohol: "4.8%",
            type: "LAGER"
        },
        {
            id: 6,
            name: "Nebula Lager",
            description: "Birra chiara e rinfrescante inspirata alle nebulose.",
            price: "3.80€",
            image: "/src/Image/3alien_beer.jpg",
            alcohol: "4.8%",
            type: "LAGER"
        },
        {
            id: 7,
            name: "Nebula Lager",
            description: "Birra chiara e rinfrescante inspirata alle nebulose.",
            price: "3.80€",
            image: "/src/Image/3alien_beer.jpg",
            alcohol: "4.8%",
            type: "LAGER"
        },
        {
            id: 8,
            name: "Nebula Lager",
            description: "Birra chiara e rinfrescante inspirata alle nebulose.",
            price: "3.80€",
            image: "/src/Image/3alien_beer.jpg",
            alcohol: "4.8%",
            type: "LAGER"
        },
        {
            id: 9,
            name: "Nebula Lager",
            description: "Birra chiara e rinfrescante inspirata alle nebulose.",
            price: "3.80€",
            image: "/src/Image/3alien_beer.jpg",
            alcohol: "4.8%",
            type: "LAGER"
        },

    ]

    return (
        <>
            <Navbar />

            <div className="product-grid">
                {products.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </>
    );
};

export default Home