interface PresaleModalProps {
    modalOpen: boolean,
    closeModal: () => void
}

function PresaleModal({ modalOpen, closeModal }: PresaleModalProps) {
    return (
        <div className={`i-modal-overlay ${!modalOpen ? 'hidden'  : ''}`}>
        <div className="i-modal-content">
            <div className="i-close-modal-container">
                <button className="i-close-modal" onClick={closeModal}>X</button>
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
    )
}

export default PresaleModal    