---
id: init
title: Initialise JavaScript SDK
sidebar_label: Initialise
hide_table_of_contents: false
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Let's initiate library in your project, depending on if you're following ES6 standard or CommonJS module format.

## Import

```js
import { DripSDK } from 'dripverse';
```

or

```js
const { DripSDK } = require('dripverse');
```

## Initialise

You can generate your Project API from the Utility Page of the NFT or the Project page itself.

```js
var drip = new DripSDK('PROJECT_API_KEY');
```

[Read more about Utility Setup on DripVerse Platform.](../../guide/utility/gatekeeper/setup.md)

<!-- If you want to work on `local` or `alpha`, please add the following:
```js
var drip = new DripSDK('2bd97fd02911eb060b259167676800b2f15e3336', 'alpha');
``` -->
:::info
Note: Please use your generated project key only and do NOT share your project key with anyone. Learn more about [Generating Project Key](../../guide/utility/gatekeeper/setup.md).
:::

---

### Contract Client

We would need a contract client to proceed. A contract client can be generated from a smart contract deployed on the network and compiled to extract it's abi and bytecode. You can learn about compiling solidity smart contract from [solc docs](https://docs.soliditylang.org/en/v0.8.17/using-the-compiler.html).

We will simplify this process using our sdk:

```mdx-code-block
<Tabs>
  <TabItem value="default" label="Default" default>
```

```js
// Get Contract Client
let contract = await drip.contractClient();
```

<!-- ```mdx-code-block
  </TabItem>

  <TabItem value="standard" label="by Standard">
```

In case, you have a specific standard in mind, you can call this instead:
```js
// Get Custom Contract Client by Standard
let contract = await drip.contractClient({
  contractStandard: 'ERC721'
});
```
Currently, supported Standards:
- `ERC721`
- `ERC1155` -->

<!-- ```mdx-code-block
  </TabItem>

  <TabItem value="chain" label="by Chain ID">
```

In case, you have a specific standard in mind, you can call this instead:
```js
// Get Custom Contract Client by Standard
let contract = await drip.contractClient({
  chainId: '80001'
});
```
Currently, supported Chain IDs:
- `80001` : Polygon Mumbai Testnet
- `137` : Polygon Mainnet -->

```mdx-code-block
  </TabItem>

  <TabItem value="id" label="by ID">
```

In case, you've a custom contract deployed, you can call it instead:

```js
// Get Custom Contract Client
let contract = await drip.contractClient({
  contractId: 6
});
```

```mdx-code-block
  </TabItem>
</Tabs>
```

Now, you have the contract client loaded.

### Wallet Client

Minting NFT is non-custodial. So, you're owner of your keys at all times. We do not store or have access to your keys at any point.
There are several ways to get wallet client.

```mdx-code-block
<Tabs>
  <TabItem value="privatekey" label="Private Key" default>
```

```js
// Get your walletClient:
let walletClient = await drip.walletClient(PRIVATE_KEY);
```

Optional:

- `networkId`:
  - `1` : Polygon Mumbai Testnet
  - `3` : Polygon Mainnet (Default)

```mdx-code-block
  </TabItem>
  <TabItem value="alchemy" label="Alchemy">
```

```js
import { ethers } from "dripverse";
// If you've access to your private keys, then use this method

// You can save your private on your system or some secret manager of your choice.
// Use the Private Key to create a wallet instance
let wallet = await new ethers.Wallet(PRIVATE_KEY);

// You can use any rpc node provider service. We are using Alchemy in this example. You can use Infura or QuickNode as well.
let httpProvider = new ethers.providers.AlchemyProvider(
  "maticmum",
  ALCHEMY_HTTP_KEY
);

// Finally, use node endpoint to create a wallet client instance.
let walletClient = await wallet.connect(httpProvider);
```

```mdx-code-block
  </TabItem>
  <TabItem value="metamask" label="Metamask">
```

```js
import { ethers } from "dripverse";
// If you're using Metamask Wallet, then use this.
// Note: This might work for other browser based wallets as well. But we've not tested them all. If there's a wallet that you'd like it work with and currently doesn't, please reach out to us and we can work with you to support your wallet.
const ethersProvider = new ethers.providers.Web3Provider(
  window.ethereum,
  "any"
);

// Finally, create your wallet client instance.
const walletClient = ethersProvider.getSigner();
```

```mdx-code-block
  </TabItem>
  <TabItem value="arcana" label="Arcana">
```

:::info

Follow the official Arcana [docs](https://docs.arcana.network/howto/arcana_wallet/wallet_sign.html) to set up Arcana Auth and obtain the wallet provider.

:::

```js
import { ethers } from "dripverse";
// Arcana auth setup First.
// const getArcanaProvider = () => {
//  ...
//}
const arcanaProvider = getArcanaProvider();
const ethersProvider = new ethers.providers.Web3Provider(arcanaProvider, "any");

// Finally, create your wallet client instance.
const walletClient = ethersProvider.getSigner();
```

```mdx-code-block
  </TabItem>
</Tabs>
```

Now, create a Contract Signer instance. We will use this going forward to interact with the smart contract functions.

```js
let contractSigner = contract.connect(walletClient);
```

---
