import React, { useState, useMemo } from 'react'
// IMPORTIAMO LA NAVBAR
import Navbar from '../Components/Navbar'
// IMPORTIAMO PRODUCTCARD
import ProductCard from '../Components/ProductCard'

const products = [
    {
        id: 1,
        name: "Ceres Alien IPA",
        description: "Una birra intergalattica dal sapore intenso.",
        price: "3.50€",
        image: "/src/Image/alien_beer.jpg",
        alcohol: "6.5%",
        type: "---"
    },
    {
        id: 2,
        name: "Nebula Lager",
        description: "Birra chiara e rinfrescante inspirata alle nebulose.",
        price: "7.99",
        image: "/src/Image/2alien_beer.jpg",
        alcohol: "4.8%",
        type: "---"
    },
    {
        id: 3,
        name: "Nebula Lager",
        description: "Birra chiara e rinfrescante inspirata alle nebulose.",
        price: "7.99",
        image: "/src/Image/3alien_beer.jpg",
        alcohol: "4.8%",
        type: "---"
    },
    {
        id: 4,
        name: "Alien T-Shirt",
        description: "T-shirt leggera e confortevole, ispirata ai misteri degli abissi interstellari.",
        price: "15.99€",
        image: "/src/Image/4alien_tshirt.jpg",
        alcohol: "4.8%",
        type: "---"
    },
    {
        id: 5,
        name: "Alien Sweatshirt",
        description: "Lana galattica, tessuta nel silenzio delle nebulose.",
        price: "19.99€",
        image: "/src/Image/5alien_sweatshirt.jpg",
        alcohol: "4.8%",
        type: "---"
    },
    {
        id: 6,
        name: "Alien T-Shirt",
        description: "T-shirt leggera e confortevole, ispirata ai misteri degli abissi interstellari.",
        price: "15.99€",
        image: "/src/Image/6alien_tshirt.jpg",
        alcohol: "4.8%",
        type: "---"
    },
    {
        id: 7,
        name: "Alien Hat",
        description: "Visiera oscura, ispirata alle ombre di lune aliene.",
        price: "7.99€",
        image: "/src/Image/7alien_hat.jpg",
        alcohol: "4.8%",
        type: "---"
    },
    {
        id: 8,
        name: "Alien Hat",
        description: "Visiera oscura, ispirata alle ombre di lune aliene.",
        price: "7.99€",
        image: "/src/Image/8alien_hat.jpg",
        alcohol: "4.8%",
        type: "---"
    },
    {
        id: 9,
        name: "Alien Hat",
        description: "Visiera oscura, ispirata alle ombre di lune aliene.",
        price: "7.99€",
        image: "/src/Image/9alien_hat.jpg",
        alcohol: "4.8%",
        type: "---"
    },
]

const Home = () => {

    const [query, setQuery] = useState("");

    const filteredProducts = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return products;
        return products.filter((p) => {
            return (
                p.name.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                (p.type && p.type.toLowerCase().includes(q))
            );
        });
    }, [query]);

    return (
        <>
            <Navbar query={query} setQuery={setQuery} />

            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))
                ) : (
                    <p style={{ color: '#fff', textAlign: 'center', width: '100%' }}>Nessun prodotto trovato</p>
                )}
            </div>
        </>
    );
};

export default Home