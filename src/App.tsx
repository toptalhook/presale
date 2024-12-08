import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [modalOpen, setModalOpen] = useState(true)

  return (
   <div>
        <header>
        <div className="header-content">
            <div className="logo">
                <img src="/assets/logo.svg" alt="DAO Maker Logo" />
            </div>
            {/* <appkit-button>
                Connect Wallet
            </appkit-button> */}
        </div>
     </header>

    <main>
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

    <div className="project-details">
        <h2>Project Details</h2>
        <div className="separator">
            <div className="blue-line"></div>
            <div className="gray-line"></div>
        </div>
    </div>

    <div className="hero-info-section">
        <div className="hero-card">
            <div className="left-content">
                <img src="./assets/presale.png" alt="MetaVirus" className="hero-image" />
            </div>
            <div className="right-content">
                <div className="tabs">
                    <button className="tab">Offerings</button>
                    <button className="tab">Key Metrics</button>
                    <button className="tab">Unlocks</button>
                </div>
                <div className="countdown">
                    <p>MetaVirus PRE-Sale ends in:</p>
                    <div id="countdown-timer">Loading...</div>
                    <button className="join-button" id="presale-button" onClick={() => setModalOpen(true)}>
                      Join Pre-Sale
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div className={`i-modal-overlay ${!modalOpen ? 'hidden' : ''}`}>
        <div className="i-modal-content">
            <div className="i-close-modal-container">
                <button className="i-close-modal" onClick={() => setModalOpen(false)}>X</button>
            </div>

            <div className="i-sale-ticket">
                <div className="i-logo-container">
                    <img src="./assets/logo.svg" alt="Logo" className="i-sale-logo" />
                </div>
                <h2 className="i-h2">Public Sale Ticket</h2>

                <div className="i-ticket-item">
                    <span>Status:</span>
                    <span id="status" className="i-status-right"></span>
                </div>

                <hr className="i-separator" />

                <div className="i-ticket-item">
                    <span>Private Price:</span>
                    <span id="private-price">$0.02</span>
                </div>
                <hr className="i-separator" />

                <div className="i-ticket-item">
                    <span>Listing Price:</span>
                    <span><span className="i-highlight">min</span> <span id="listing-price">$0.18</span></span>
                </div>
                <hr className="i-separator" />

                <div className="i-ticket-item">
                    <span>Individual Allocation:</span>
                    <span><span className="i-highlight">max</span> <span id="individual-allocation">$122,930</span></span>
                </div>
                <hr className="i-separator" />


                <div className="i-ticket-item">
                    <span>Blockchain Network:</span>
                    <span>
                        <img src="assets/eth-logo.png" alt="ETH Logo" className="i-token-logo" />
                        <span className="i-highlight"></span>
                        <img src="assets/bnb-logo.png" alt="BSC Logo" className="i-token-logo" />
                    </span>
                </div>
                <hr className="i-separator" />

                <div className="i-ticket-item">
                    <span>Sale End:</span>
                    <span id="sale-end-time">Loading....</span>
                </div>
                <hr className="i-separator"/>

                <div className="i-ticket-item">
                    <span>Minimal Alocation:</span>
                    <span>
                        <img src="./assets/eth-logo.png" alt="ETH Logo" className="i-token-logo" /> 0.1
                        or
                        <img src="assets/bnb-logo.png" alt="BSC Logo" className="i-token-logo" /> 0.5
                    </span>
                </div>
                
            </div>

            <div className="i-amount-input-container">
                <label className="i-label" htmlFor="donation-amount">From:</label>
                <div className="i-input-with-dropdown">
                    <img id="selected-token-icon" src="./assets/eth-logo.png" alt="Token Icon" className="i-token-logo" />
                    <select id="crypto-type" className="i-select">
                        <option value="ETH" data-icon="./assets/eth-logo.png" selected>ETH</option>
                        <option value="BNB" data-icon="./assets/bnb-logo.png">BNB</option>
                    </select>
                    <input id="donation-amount" className="i-input" type="number" placeholder="Enter amount" />
                </div>
            </div>

            <div className="i-amount-input-container">
                <label className="i-label" htmlFor="mvt-amount">To:</label>
                <div className="i-input-with-output">
                    <input className="i-input" type="text" id="mvt-amount" name="mvt-amount" placeholder="MVT amount"
                        disabled />
                </div>
            </div>

            <button id="buy-button" className="i-btn">Buy</button>
        </div>
    
    </div>

    <div className="section-wrapper">

        <div className="left-column">
            <div className="card public-round-card">
                <h3>Public Round</h3>
                <p>Registrations are opened to anyone with more than $500 worth of tokens in their wallet.</p>
                <p className="status">Sale Open</p>
            </div>

            <div className="card second-round-card">
                <h3>Public Round</h3>
                <p>Registrations are opened to anyone with more than $500 worth of tokens in their wallet.</p>
                <p className="status">Sale Open</p>
            </div>
            <div className="card strong-hold-card">
                <h3>Strong Hold Offer</h3>
                <p>Premium round offerings for DAO holders only. Higher winning chances with lower fees.</p>
                <p>Registration ends in:</p>
                <p id="strong-hold-timer">Loading...</p>
                <button className="participate-button">Participate</button>
            </div>

        </div>

        <div className="right-column">
           
            <img src="./assets/hero_info.png" alt="MetaVirus Banner" className="content-image" />
            <h2 className="section-title">What is MetaVirus (MVT)?</h2>
            <p className="section-paragraph">
                MetaVirus is an innovative Web3 game that combines blockchain technology with immersive gameplay,
                offering a decentralized, freely traded mobile pet game. Our team has over 17 years of experience in
                game development and operations, and 6 years in the blockchain field.
            </p>
            <p className="section-paragraph">
                MetaVirus is an auto-battle pet RPG with a cute Q-version style, faction battles, union wars, and an
                infinite growth system. The game integrates Free to Play (F2P) and Play to Earn (P2E) models, allowing
                players to earn real value through in-game activities and asset trading.
            </p>

            <div className="content-section">
                <img src="./assets/hero_info1.png" alt="Game Basics" className="content-image" />
                <p className="section-paragraph">
                    MetaVirus launched Pre-charge in Web3 gaming platform NexGami in June 15 2024, as its first
                    Launchpad Pre-charge product successfully raised $10 million within six hours. This Pre-charge
                    adopted an innovative "recharge is fundraising" model, where all users participating in the
                    fundraising received two types of project tokens.
                </p>
                <p className="section-paragraph">
                    The circulating token, NEXU, will be 100% refunded after the event and can be used for purchasing
                    all game products on the NexGami platform in the future. The governance token of the MetaVirus
                    project, MTV, will be unlocked linearly over one year and is planned to be listed on exchanges
                    within three months after the Pre-charge.
                </p>
                <p className="section-paragraph">
                    MetaVirus made beta test in December 2023, attract over 350,000 user registrations, with 71,308
                    participants in the XP event, minting Genesis pet NFTs.
                </p>
            </div>

           
            <div className="content-section">
                <h2 className="section-title">What makes MetaVirus (MVT) unique?</h2>
                <p className="section-paragraph">
                    Our game is similar to traditional games like Pokémon, but it incorporates blockchain technology and
                    token economics. The strength of our project lies in its community-based foundation, where we make
                    players the core participants in the development and operation of the game. This approach allows us
                    to attract a larger and more enduring player base.
                </p>
                <img src="./assets/hero_info2.png" alt="Game Basics" className="content-image" />
            </div>

         
            <div className="content-section">
                <h2 className="section-title">Who is MetaVirus (MVT) team?</h2>
                <ul className="team-list">
                    <li>
                        <a href="https://example.com/brice-bian" target="_blank" className="team-link">
                            <strong>Brice Bian (CEO)</strong>
                        </a>
                        - 19 years of game production experience. Responsible for online games with millions of revenue.
                        His work <em>'Gods Killer Online'</em> had the highest monthly income in the Chinese mobile game
                        market.
                    </li>
                    <li>
                        <a href="https://example.com/marco-tuo" target="_blank" className="team-link">
                            <strong>Marco Tuo (CTO)</strong>
                        </a>
                        - 20 years of game development experience. Chief architect of millions of online mobile games.
                        Technical director of large-scale travel VR games.
                    </li>
                    <li>
                        <a href="https://example.com/belal-abdullah" target="_blank" className="team-link">
                            <strong>Belal Abdullah (CMO)</strong>
                        </a>
                        - A driven Fintech professional and serial entrepreneur with a demonstrated ability to complete
                        tasks with accuracy.
                    </li>
                </ul>
            </div>

          
            <div className="content-section">
                <h2 className="section-title">What is MetaVirus (MVT) roadmap?</h2>
                <img src="./assets/hero_info3.png" alt="Game Basics" className="content-image" />
            </div>

         
            <div className="content-section">
                <h2 className="section-title">MetaVirus (MVT) revenue streams</h2>
                <img src="./assets/hero_info4.png" alt="Game Basics" className="content-image" />
                <img src="./assets/hero_info5.png" alt="Game Basics" className="content-image" />
            </div>

           
            <div className="content-section">
                <h2 className="section-title">What are MetaVirus (MVT) token metrics?</h2>
                <img src="./assets/hero_info6.png" alt="Game Basics" className="content-image" />
            </div>

            <div className="content-section">
                <h2 className="section-title">Who are the partners of MetaVirus (MVT)?</h2>
                <p className="section-paragraph">
                    NexGami, Assure, Nabox, Gate Web3 Wallet, Tencent, ByteDance, Chainlink Labs, Glaze, QuestN,
                    Poolzboost, TaskOn, Alibaba Games, Perfect World Games.
                </p>
            </div>
        </div>

    </div>

    </main>

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
   </div>
  )
}

export default App  

