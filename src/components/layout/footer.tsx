function Footer() {
    return (
    <footer className="footer">
        <div className="footer-top">
            <div className="footer-column">
                <img src="./assets/logo.svg" alt="DAO Maker Logo" className="footer-logo"/>
                <p>Tokenizing the Future</p>
            </div>
            <div className="footer-column">
                <h4>Product</h4>
                <ul>
                    <li><a href="#">DAO Launchpad</a></li>
                    <li><a href="#">Stake DAO</a></li>
                    <li><a href="#">Community Voted</a></li>
                    <li><a href="#">Farms and Vestings</a></li>
                    <li><a href="#">DAO Swap</a></li>
                    <li><a href="#">Governance</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">Brand Assets</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Resources</h4>
                <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Sitemap</a></li>
                    <li><a href="#">DAO Bridge</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Social</h4>
                <ul>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Telegram</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">TikTok</a></li>
                    <li><a href="#">YouTube</a></li>
                    <li><a href="#">Discord</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Legal</h4>
                <ul>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
            <p className="disclaimer">
                * Past performances do not indicate future success. This web page and any other contents published on
                this
                website shall not constitute investment advice, financial advice, trading advice, or any other kind of
                advice.
                You alone assume the sole responsibility of evaluating the merits and risks associated with using any
                information or other content on this website before making any decisions based on such information.
            </p>
            <p>&copy; 2024 DAO Maker. All rights reserved.</p>
            <div className="footer-social-icons">
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-telegram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-tiktok"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-discord"></i></a>
            </div>
        </div>
    </footer>
    )
}

export default Footer
