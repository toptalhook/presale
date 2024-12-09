import { useState, useEffect } from 'react';
import { useAccount, useChainId} from 'wagmi';
import { parseEther } from 'viem';

const privatePriceValue = 0.01; // Private price per MVT in USD
const listingPriceValue = 0.18;
const individualAllocationValue = 122930;
const minimal_eth_AllocationValue = 0.1;
const minimal_bnb_AllocationValue = 0.5;

// Add recipient addresses
const ETH_RECIPIENT_ADDRESS = '0xd65cE7930413EED605Ec0f1773380Cd15946A353';
const BNB_RECIPIENT_ADDRESS = '0xd65cE7930413EED605Ec0f1773380Cd15946A353';

// Add these chain IDs at the top with other constants
const BSC_CHAIN_ID = '0x38'; // 56 in decimal
const ETH_CHAIN_ID = '0x1'; // 1 in decimal

interface PresaleModalProps {
    modalOpen: boolean,
    closeModal: () => void
}

// Add interface for conversion rates
interface ConversionRates {
    ETH: number;
    BNB: number;
}

// Add these type declarations for window
declare global {
    interface Window {
        ethereum?: any;
        BinanceChain?: any;
    }
}

// Add this type near the top with other interfaces
interface EthereumProvider {
    request: (args: { method: string; params: any[] }) => Promise<any>;
}

function PresaleModal({ modalOpen, closeModal }: PresaleModalProps) {
    const chainId = useChainId();
    const [timeLeft, setTimeLeft] = useState('');
    // Add new state for conversion rates
    const [conversionRates, setConversionRates] = useState<ConversionRates>({ ETH: 0, BNB: 0 });
    const [selectedNetwork, setSelectedNetwork] = useState('ETH');
    const [donationAmount, setDonationAmount] = useState('');
    const [mvtAmount, setMvtAmount] = useState('');
    const [isAllowed, setIsAllowed] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    // Add wagmi hooks
    const { address, connector } = useAccount();

    useEffect(() => {
        if (chainId) {
            // Set network based on chain ID
            if (chainId === 1) { // Ethereum Mainnet
                setSelectedNetwork('ETH');
            } else if (chainId === 56) { // BSC Mainnet
                setSelectedNetwork('BNB');
            }
        }
    }, [chainId]);

    // Add new useEffect for fetching conversion rates
    useEffect(() => {
        const fetchConversionRates = async () => {
            try {
                const response = await fetch(
                    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,binancecoin&vs_currencies=usd"
                );
                const data = await response.json();
                if (data.ethereum && data.binancecoin) {
                    setConversionRates({
                        ETH: data.ethereum.usd,
                        BNB: data.binancecoin.usd
                    });
                }
            } catch (error) {
                console.error("Error fetching conversion rates:", error);
            }
        };

        if (modalOpen) {
            fetchConversionRates();
        }
    }, [modalOpen]);

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
        updateTimer(); // Initial call

        return () => clearInterval(timer);
    }, []);

    // Update calculation effect
    useEffect(() => {
        if (donationAmount && conversionRates[selectedNetwork as keyof ConversionRates]) {
            const donation = parseFloat(donationAmount);
            const rate = conversionRates[selectedNetwork as keyof ConversionRates];
            const usdValue = donation * rate;
            const calculatedMvtAmount = usdValue / privatePriceValue;
            
            // Check if the calculated value exceeds individual allocation
            setIsAllowed(usdValue <= individualAllocationValue);
            setMvtAmount(calculatedMvtAmount.toFixed(2));
        } else {
            setMvtAmount('');
            setIsAllowed(true);
        }
    }, [donationAmount, selectedNetwork, conversionRates]);

    // Helper function to get button text and disabled state
    const getButtonProps = () => {
        const donation = parseFloat(donationAmount) || 0;
        const minAmount = selectedNetwork === 'ETH' ? minimal_eth_AllocationValue : minimal_bnb_AllocationValue;
        
        if (donation < minAmount) {
            return {
                text: `Minimum ${minAmount} ${selectedNetwork} required`,
                disabled: true,
                opacity: 0.5
            };
        }
        
        if (!isAllowed) {
            return {
                text: `BUY ${mvtAmount} MVT`,
                disabled: true,
                opacity: 0.5
            };
        }
        
        return {
            text: `BUY ${mvtAmount} MVT`,
            disabled: !donationAmount,
            opacity: 1
        };
    };

    // Replace handleBuyTransaction function
    const handleBuyTransaction = async () => {
        if (!address) {
            alert('Please connect your wallet');
            return;
        }

        setIsLoading(true);
        try {
            const provider = (await connector?.getProvider()) as EthereumProvider;
            const recipientAddress = selectedNetwork === 'ETH' 
                ? ETH_RECIPIENT_ADDRESS 
                : BNB_RECIPIENT_ADDRESS;

            // Convert the donation amount to Wei and then to hexadecimal
            const valueInWei = parseEther(donationAmount);
            const valueHex = `0x${valueInWei.toString(16)}`;

            const transactionParameters = {
                to: recipientAddress,
                from: address,
                value: valueHex,
                chainId: selectedNetwork === 'ETH' ? ETH_CHAIN_ID : BSC_CHAIN_ID,
            };

            const transactionHash = await provider.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });

            console.log('Transaction hash:', transactionHash);
            closeModal();
        } catch (error) {
            console.error('Transaction failed:', error);
            alert('Transaction failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };


    // Add new function to handle network switching
    const switchNetwork = async (networkType: string) => {
        try {
            if (networkType === 'BNB') {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: BSC_CHAIN_ID }],
                });
            } else {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: ETH_CHAIN_ID }],
                });
            }
        } catch (error: any) {
            // If BSC network is not added, add it
            if (error.code === 4902 && networkType === 'BNB') {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: BSC_CHAIN_ID,
                            chainName: 'Binance Smart Chain',
                            nativeCurrency: {
                                name: 'BNB',
                                symbol: 'BNB',
                                decimals: 18
                            },
                            rpcUrls: ['https://bsc-dataseed.binance.org/'],
                            blockExplorerUrls: ['https://bscscan.com/']
                        }]
                    });
                } catch (addError) {
                    console.error('Error adding BSC network:', addError);
                }
            } else {
                console.error('Error switching network:', error);
            }
        }
    };

    // Update the network selection handler
    const handleNetworkChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newNetwork = e.target.value;
        try {
            await switchNetwork(newNetwork);
            setSelectedNetwork(newNetwork);
            
        } catch (error) {
            console.error('Failed to switch network:', error);
            // Revert the select value if network switch fails
            setSelectedNetwork(selectedNetwork);
        }
    };

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
                    <span id="status" className="i-status-right">
                        {isAllowed ? 'Allowed ✅' : 'Not Allowed ❌'}
                    </span>
                </div>

                <hr className="i-separator" />

                <div className="i-ticket-item">
                    <span>Private Price:</span>
                    <span id="private-price">${privatePriceValue}</span>
                </div>
                <hr className="i-separator" />

                <div className="i-ticket-item">
                    <span>Listing Price:</span>
                    <span><span className="i-highlight">min</span> <span id="listing-price">${listingPriceValue}</span></span>
                </div>
                <hr className="i-separator" />

                <div className="i-ticket-item">
                    <span>Individual Allocation:</span>
                    <span><span className="i-highlight">max</span> <span id="individual-allocation">${individualAllocationValue}</span></span>
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
                    <span id="sale-end-time">{timeLeft}</span>
                </div>
                <hr className="i-separator"/>

                <div className="i-ticket-item">
                    <span>Minimal Alocation:</span>
                    <span>
                        <img src="./assets/eth-logo.png" alt="ETH Logo" className="i-token-logo" /> {minimal_eth_AllocationValue}
                        or
                        <img src="assets/bnb-logo.png" alt="BSC Logo" className="i-token-logo" /> {minimal_bnb_AllocationValue}
                    </span>
                </div>
                
            </div>

            <div className="i-amount-input-container">
                <label className="i-label" htmlFor="donation-amount">From:</label>
                <div className="i-input-with-dropdown">
                    <img id="selected-token-icon" src={`./assets/${selectedNetwork.toLowerCase()}-logo.png`} alt="Token Icon" className="i-token-logo" />
                    <select 
                        id="crypto-type" 
                        className="i-select" 
                        value={selectedNetwork}
                        onChange={handleNetworkChange}
                    >
                        <option value="ETH">ETH</option>
                        <option value="BNB">BNB</option>
                    </select>
                    <input 
                        id="donation-amount" 
                        className="i-input" 
                        type="number" 
                        placeholder="Enter amount"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                    />
                </div>
            </div>

            <div className="i-amount-input-container">
                <label className="i-label" htmlFor="mvt-amount">To:</label>
                <div className="i-input-with-output">
                    <input 
                        className="i-input" 
                        type="text" 
                        id="mvt-amount" 
                        name="mvt-amount" 
                        placeholder="MVT amount"
                        value={mvtAmount}
                        disabled 
                    />
                </div>
            </div>

            <button 
                id="buy-button" 
                className="i-btn"
                disabled={getButtonProps().disabled || isLoading}
                style={{ opacity: getButtonProps().opacity }}
                onClick={handleBuyTransaction}
            >
                {isLoading ? 'Processing...' : getButtonProps().text}
            </button>
        </div>
    
    </div>
    )
}

export default PresaleModal    