import Layout from './components/layout/layout'
import HeroSection from './components/hero/HeroSection'
import PresaleCard from './components/presale/PresaleCard'
import './App.css'
import '@rainbow-me/rainbowkit/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import {
  trustWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
  ledgerWallet,
  rabbyWallet,
  rainbowWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  bsc,
} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



const config = getDefaultConfig({
  appName: 'vulpes-test',
  projectId: '9bbae8b57e70527ed45720c911751924', // Get this from WalletConnect Cloud
  chains: [mainnet, bsc],
  ssr: true,
  wallets: [
    {
      groupName: 'Popular',
      wallets: [
        metaMaskWallet,
        coinbaseWallet,
        walletConnectWallet,
        trustWallet,
      ]
    },
    {
      groupName: 'More',
      wallets: [
        rainbowWallet,
        ledgerWallet,
        rabbyWallet,
      ]
    }
  ]
})

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          <Layout>
            <HeroSection />
            <PresaleCard />
          </Layout>
          <ToastContainer position="top-right" />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}



export default App  

