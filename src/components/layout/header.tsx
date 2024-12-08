import { ConnectButton } from '@rainbow-me/rainbowkit';
function Header() {
    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    <img src="/assets/logo.svg" alt="DAO Maker Logo" />
                </div>
                <ConnectButton />
            </div>
        </header>
    )
}

export default Header
