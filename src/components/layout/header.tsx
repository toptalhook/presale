import { ConnectButton } from '@rainbow-me/rainbowkit';
function Header() {
    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    <img src="/assets/logo.svg" alt="DAO Maker Logo" />
                </div>
                {/* <appkit-button>
                    Connect Wallet
                </appkit-button> */}
                <ConnectButton />
            </div>
        </header>
    )
}

export default Header
