import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'

function BuyNFT({ nftContractAddress, nftContractABI }) {
  const { library, account } = useWeb3React()

  const [transactionInProgress, setTransactionInProgress] = useState(false)

  const handleBuyNFT = async () => {
    if (!library || !account) return

    const signer = library.getSigner(account)
    const nftContract = new ethers.Contract(nftContractAddress, nftContractABI, signer)

    try {
      setTransactionInProgress(true)
      await nftContract.buy(tokenId, { value: ethers.utils.parseEther(price) })
      setTransactionInProgress(false)
      alert('¡Compra exitosa!')
    } catch (error) {
      console.error('Error al comprar NFT:', error)
      setTransactionInProgress(false)
      alert('Error al comprar NFT. Consulta la consola para más detalles.')
    }
  }

  return (
    <div>
      <button onClick={handleBuyNFT} disabled={!library || !account || transactionInProgress}>
        {transactionInProgress ? 'Procesando...' : 'Clicka para comprar un NFT'}
      </button>
    </div>
  )
}

export default BuyNFT
