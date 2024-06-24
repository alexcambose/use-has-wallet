import React from 'react';
import {
  METAMASK_RDNS,
  COINBASE_WALLET_RDNS,
  RAINBOW_RDNS,
  useHasWalletExtension,
} from 'use-has-wallet';

const App = () => {
  const hasMetamask = useHasWalletExtension(METAMASK_RDNS);
  const hasCoinbase = useHasWalletExtension(COINBASE_WALLET_RDNS);
  const hasRainbow = useHasWalletExtension(RAINBOW_RDNS);

  const wallets = [
    {
      name: 'Metamask',
      hasWallet: hasMetamask,
    },
    {
      name: 'Coinbase Wallet',
      hasWallet: hasCoinbase,
    },
    {
      name: 'Rainbow',
      hasWallet: hasRainbow,
    },
  ];

  return (
    <div className="app">
      <h1>Wallet Status Checker</h1>
      <div className="wallets-container">
        {wallets.map(({ name, hasWallet, logo }) => (
          <div
            key={name}
            className={`wallet ${hasWallet ? 'installed' : 'not-installed'}`}
          >
            <div className="wallet-details">
              <span className="wallet-name">{name}</span>
              <span className="wallet-status">
                {hasWallet ? 'Installed' : 'Not Installed'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
