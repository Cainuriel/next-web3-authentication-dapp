import { useWeb3React } from '@web3-react/core';
import styles from '@/styles/Home.module.css';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useEffect } from 'react';

const ConnectWallet = ({ isConnected, setIsConnected }) => {
  const injectedConnector = new InjectedConnector({
    supportedChainIds: [97],
  });

  // Extract the current chains info from useWeb3React hook
  const { activate, active, chainId } = useWeb3React(); // Add chainId

  const onClick = () => {
    activate(injectedConnector);
  };

  useEffect(() => {
    setIsConnected(active);

    // Check if chainId is not 97
    if (chainId !== 97) {
      alert('Please switch to the correct network bsc to use this application.');
    }
  }, [active, chainId]); // Include chainId in dependencies

  return (
    <>
      {isConnected ? (
        <button className={styles.center}>
          <div className={styles.thirteen}>
            <h1 className="text-lg font-medium">Connected</h1>
          </div>
        </button>
      ) : (
        <button onClick={onClick} className={styles.center}>
          <div className={styles.thirteen}>
            <h1 className="text-lg font-medium">Connect wallet</h1>
          </div>
        </button>
      )}
    </>
  );
};

export default ConnectWallet;
