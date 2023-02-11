---
id: mint
title: DripVerse Mint
sidebar_label: Mint
hide_table_of_contents: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Mint an NFT

This is a guide used to mint a new NFT.

### Upload to IPFS

First, you need to [upload file to IPFS](/guide/nft/storage/upload). You'll get a cid, like: `bafybeifhadklgjjfdxx2nvomyrhjsobhbxeenwc5bheftcetcyqz4yywim`.

Make a JSON Object with following details. Your object can be an image or an entire `metadata.json`.

```mdx-code-block
<Tabs>
  <TabItem value="image" label="Image" default>
```

```js
let cid = {
  assetType: "image",
  cid: "bafybeifhadklgjjfdxx2nvomyrhjsobhbxeenwc5bheftcetcyqz4yywim",
};
```
```mdx-code-block
  </TabItem>

  <TabItem value="metadata" label="Metadata">
```

```js
// where inside metadata.json, there must be a key to `image`
let cid = {
  assetType: "json",
  cid: "bafyreieha6jqtnu4f4njyaovknxyyxeurkcsopcryrggxkt7hcbi5zmwzi",
};
```
```mdx-code-block
  </TabItem>
</Tabs>
```

We would also need the following, to define a name and description to your NFT.
```js
let mintData = {
  name: "NFT Name",
  description: "NFT Description",
};
```

Optional:

- `description`
- `networkId` (_default 1_)

### Contract Client
We would need a contract client to proceed. A contract client can be generated from a smart contract deployed on the network and compiled to extract it's abi and bytecode. You can learn about compiling solidity smart contract from [solc docs](https://docs.soliditylang.org/en/v0.8.17/using-the-compiler.html).

We will simplify this process using our sdk:
```js
// Get Contract Client
let contract = await drip.contractClient({
    contractId: 5
});
```
If you're not sure, which `contractId` to use, please talk to us for the integration. Currently, this is allocated on need basis based on your project.

### Wallet Client
Minting NFT is non-custodial. So, you're owner of your keys at all times. We do not store or have access to your keys at any point.
There are several ways to get wallet client.
```mdx-code-block
<Tabs>
  <TabItem value="privatekey" label="Private Key" default>
```
```js
import { ethers } from 'dripverse';
// If you've access to your private keys, then use this method

// You can save your private on your system or some secret manager of your choice.
// Use the Private Key to create a wallet instance
let wallet = await new ethers.Wallet(PRIVATE_KEY);

// You can use any rpc node provider service. We are using Alchemy in this example. You can use Infura or QuickNode as well.
let httpProvider = new ethers.providers.AlchemyProvider('maticmum', ALCHEMY_HTTP_KEY);

// Finally, use node endpoint to create a wallet client instance.
let walletClient = await wallet.connect(httpProvider);
```
```mdx-code-block
  </TabItem>
  <TabItem value="metamask" label="Metamask">
```
```js
import { ethers } from 'dripverse';
// If you're using Metamask Wallet, then use this.
// Note: This might work for other browser based wallets as well. But we've not tested them all. If there's a wallet that you'd like it work with and currently doesn't, please reach out to us and we can work with you to support your wallet.
const ethersProvider = new ethers.providers.Web3Provider(
    window.ethereum,
    'any'
);

// Finally, create your wallet client instance.
const walletClient = ethersProvider.getSigner();
```
```mdx-code-block
  </TabItem>
  <TabItem value="arcana" label="Arcana">
```
```js
import { ethers } from 'dripverse';
// If you're using Metamask Wallet, then use this.
// Note: This might work for other browser based wallets as well. But we've not tested them all. If there's a wallet that you'd like it work with and currently doesn't, please reach out to us and we can work with you to support your wallet.
const arcanaProvider = getArcanaProvider();
const ethersProvider = new ethers.providers.Web3Provider(
    arcanaProvider,
    'any'
);

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

### Mint

Now to mint you new NFT, simply call `drip.mint`.

```js
let mintResponse = await drip.mint(mintData, cid, contractSigner);
console.log(mintResponse);
```

You should get an output indicating the `nftId`. The `mintResponse` above should give a response as follows:

```js
{
  id: 28,
  transactionHash: '0x6ce955757434a4a055888e96c5d3fc102d372528b73b17d3138ac91bc53aad6f',
  tokenId: 41
}
```
