import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroPage.css";

export default function IntroPage() {
    const navigate = useNavigate();
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        // Mostra la freccia dopo 3 secondi
        const timer = setTimeout(() => setShowArrow(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    const goToHome = () => {
        navigate("/home");
    };

    return (
        <div className="intro-container">
            <div className="intro-content">
                <img src="/src/Image/11alien.png" className="intro-logo" alt="Alien Logo" />

                <h1 className="intro-title">Piattaforma E-commerce | Concept</h1>
                <h1 className="intro-title">CERES ALIEN EDITION</h1>
                <p className="intro-subtitle">Dall'idea di Luigi, costruito da Stiven</p>
            </div>

            {showArrow && (
                <div className="intro-arrow" onClick={goToHome}>
                    ▼
                </div>
            )}
        </div>
    );
}
