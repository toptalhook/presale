import { useState } from "react"
import PresaleModal from "./PresaleModal"

function PresaleCard() {
    const [modalOpen, setModalOpen] = useState(false)

    return (
       <div> 
            {modalOpen && <PresaleModal modalOpen={modalOpen} closeModal={() => setModalOpen(false)} />}
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
         </div>
    )
}

export default PresaleCard