import { useWeb3React } from '@web3-react/core'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Card from './components/Card'

const Store = () => {
  const { account, active } = useWeb3React()

  const { push } = useRouter()

  useEffect(() => {
    if (!active) {
      push('/')
    }
  }, [active])

  return (
    <div className="flex flex-col flex-1 px-16">
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="my-8 text-3xl font-bold">Inventory</h1>

        {/* Trancate the address / account */}
        {account && (
          <h5>{`${account.substring(0, 4)}....${account.substring(
            account.length - 4
          )}`}</h5>
        )}
      </div>

      <div className="flex flex-row flex-wrap flex-1 gap-6">
        <Card />
      </div>
    </div>
  )
}

export default Store
