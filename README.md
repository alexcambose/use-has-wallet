# use-has-wallet

`use-has-wallet` is a React hook for detecting if specific wallet extensions are installed in the user's browser. It's based on [EIP-6963](https://eips.ethereum.org/EIPS/eip-6963) using the [`mipd`](https://github.com/wevm/mipd) library of various wallet providers to check for their presence.

## Installation

You can install `use-has-wallet` via npm:

```bash
npm install use-has-wallet
```

or via yarn:

```bash
yarn add use-has-wallet
```

## Usage

To use `use-has-wallet`, import the hook and use it within your React components. You'll need to pass the RDNS of the wallet you want to check.

```ts
import React from 'react';
import { useHasWalletExtension, METAMASK_RDNS } from 'use-has-wallet';

const MyComponent = () => {
  const hasMetamask = useHasWalletExtension(METAMASK_RDNS);

  return (
    <div>
      {hasMetamask ? 'Metamask is installed' : 'Metamask is not installed'}
    </div>
  );
};

export default MyComponent;
```

## API

### `useHasWalletExtension`

The `useHasWalletExtension` hook checks if a wallet extension specified by its RDNS is installed.

#### Parameters

- `rdns` (string): The registered domain name of the wallet to check.

#### Returns

- `boolean`: A boolean indicating whether the wallet extension is installed.

### Wallet RDNS Constants

The package provides constants for common wallet RDNS to simplify usage:

- `COINBASE_WALLET_RDNS`
- `COINBASE_SMART_WALLET_RDNS`
- `METAMASK_RDNS`
- `RAINBOW_RDNS`
- `WALLETCONNECT_RDNS`

```ts
import {
  COINBASE_WALLET_RDNS,
  COINBASE_SMART_WALLET_RDNS,
  METAMASK_RDNS,
  RAINBOW_RDNS,
  WALLETCONNECT_RDNS,
} from 'use-has-wallet';
```

## Examples

### Check for Metamask and WalletConnect

```ts
import React from 'react';
import {
  useHasWalletExtension,
  METAMASK_RDNS,
  WALLETCONNECT_RDNS,
} from 'use-has-wallet';

const WalletChecker = () => {
  const hasMetamask = useHasWalletExtension(METAMASK_RDNS);
  const hasWalletConnect = useHasWalletExtension(WALLETCONNECT_RDNS);

  return (
    <div>
      <div>Metamask: {hasMetamask ? 'Installed' : 'Not Installed'}</div>
      <div>
        WalletConnect: {hasWalletConnect ? 'Installed' : 'Not Installed'}
      </div>
    </div>
  );
};

export default WalletChecker;
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or suggestions.

## License

`use-has-wallet` is released under the MIT License.
