
function HeroSection() {
    return (
        <div className="hero-section">
                <div className="live-badge">LIVE</div>
                <div className="hero-overlay">
                    <div className="hero-content">
                        <img src="./assets/logo_meta.png" alt="MetaVirus Logo" className="hero-logo" />
                        <h1>MetaVirus</h1>
                        <div className="social-icons">
                            <a href="/" target="_self" className="icon">
                                <i className="fas fa-home"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" className="icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://telegram.org" target="_blank" className="icon">
                                <i className="fab fa-telegram-plane"></i>
                            </a>
                            <a href="https://discord.com" target="_blank" className="icon">
                                <i className="fab fa-discord"></i>
                            </a>

                            <a href="https://medium.com" target="_blank" className="icon">
                                <i className="fab fa-medium"></i>
                            </a>

                        </div>
                        <p>
                            MetaVirus is an innovative Web3 game that combines blockchain technology
                            with immersive gameplay, offering a decentralized, freely traded mobile pet game.
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default HeroSection
