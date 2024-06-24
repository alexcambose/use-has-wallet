import { useState, useEffect } from 'react';
import { EIP6963ProviderDetail, createStore } from 'mipd';

/**
 * Registered domain names (RDNS) for various wallet providers.
 */
export const COINBASE_WALLET_RDNS = 'com.coinbase.wallet';
export const COINBASE_SMART_WALLET_RDNS = 'coinbaseWalletSDK';
export const METAMASK_RDNS = 'io.metamask';
export const RAINBOW_RDNS = 'me.rainbow';

/**
 * Custom hook to check if a wallet extension is installed.
 *
 * @param {string} rdns - The registered domain name of the wallet.
 * @returns {boolean} - A boolean indicating whether the wallet extension is installed.
 */
export const useHasWalletExtension = (rdns: string): boolean => {
  const [hasWalletExtension, setHasWalletExtension] = useState(false);
  useEffect(() => {
    const store = createStore();

    /**
     * Check if the wallet extension is present in the providers.
     *
     * @param {EIP6963ProviderDetail<any, string>[]} providers - List of provider details.
     */
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
