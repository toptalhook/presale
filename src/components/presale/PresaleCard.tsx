import { useState, useEffect } from "react"
import PresaleModal from "./PresaleModal"
import { useAccount } from "wagmi"
import { toast } from "react-toastify"

function PresaleCard() {
    const [modalOpen, setModalOpen] = useState(false)
    const [timeLeft, setTimeLeft] = useState('');
    const { isConnected, address } = useAccount()
    
    useEffect(() => {
        const endDate = new Date('2024-12-31T23:59:59');
        
        const updateTimer = () => {
            const now = new Date();
            const difference = endDate.getTime() - now.getTime();
            
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        };

        const timer = setInterval(updateTimer, 1000);
        updateTimer();

        return () => clearInterval(timer);
    }, []);
    
    const handleJoinPresale = () => {
        console.log(address, "address")
        if (address) {
            setModalOpen(true)
        } else {
            toast.error('Please connect your wallet first!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })
            return
        }
    }
    
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
                            <div id="countdown-timer">{timeLeft}</div>
                            <button className="join-button" id="presale-button" onClick={() => handleJoinPresale()}>
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