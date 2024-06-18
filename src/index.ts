import { useState, useEffect } from 'react';
import { EIP6963ProviderDetail, createStore } from 'mipd';

export const COINBASE_WALLET_RDNS = 'com.coinbase.wallet';
export const COINBASE_SMART_WALLET_RDNS = 'coinbaseWalletSDK';
export const METAMASK_RDNS = 'io.metamask';
export const RAINBOW_RDNS = 'me.rainbow';
export const WALLETCONNECT_RDNS = 'walletConnect';

export const useHasWalletExtension = (rdns: string) => {
  const [hasWalletExtension, setHasWalletExtension] = useState(false);

  useEffect(() => {
    const store = createStore();

    const checkWalletExtension = (
      providers: readonly EIP6963ProviderDetail<
        any,
        | 'io.metamask'
        | 'com.coinbase'
        | 'com.enkrypt'
        | 'io.zerion'
        | (string & {})
      >[]
    ) => {
      const walletExtension = providers.find(
        (provider) => provider.info.rdns === rdns
      );
      setHasWalletExtension(!!walletExtension);
    };

    store.subscribe(checkWalletExtension);

    // Check initial state
    const initialProviders = store.getProviders();
    checkWalletExtension(initialProviders);

    return () => {
      store.destroy();
    };
  }, [rdns]);

  return hasWalletExtension;
};
