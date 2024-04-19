import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ConnectWallet from './components/ConnectWallet'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useWeb3React } from '@web3-react/core'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isConnected, setIsConnected] = useState(false)

  const { chainId } = useWeb3React()

  const { push } = useRouter()

  if (isConnected) {
    push('/store')
  }

  return (
    <>
      <Head>
        <title>Web3 Auth</title>
        <meta name="description" content="Created for Celo Sage tutorials" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* Sure error log when a user is not connected to Alfajores network */}
        {chainId && chainId != 97 && (
          <div className="absolute px-4 py-2 text-red-500 bg-red-100 border-2 border-red-500 rounded-md top-10">
            <h1>Connect to BSC network only!</h1>
          </div>
        )}

        <div className={styles.description}>
          <p>Connect on BSC </p>
          <div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              By <h1 className="text-2xl font-semibold">BSC</h1>
            </a>
          </div>
        </div>

        <ConnectWallet
          isConnected={isConnected}
          setIsConnected={setIsConnected}
        />

        <div className={styles.grid}>
          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Polfex Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn more about POLFEX from the documentation
            </p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Tutorials <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get started with any tutorials
            </p>
          </a>

          <a
            href="https://docs.celo.org/showcase"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Projects <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Scafforld and show off your new projects everywhere 😀
            </p>
          </a>

          <a
            href="https://discord.com/invite/atBpDfqQqX"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Connect <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Join the amazing community on Discord
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
