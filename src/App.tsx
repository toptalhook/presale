import Layout from './components/layout/layout'
import HeroSection from './components/hero/HeroSection'
import PresaleCard from './components/presale/PresaleCard'
import './App.css'
import '@rainbow-me/rainbowkit/styles.css'
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



const config = getDefaultConfig({
  appName: 'vulpes-test',
  projectId: '9bbae8b57e70527ed45720c911751924', // Get this from WalletConnect Cloud
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
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
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App  

