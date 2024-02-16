---
id: collection
title: NFT Collection
sidebar_label: Collections
hide_table_of_contents: false
---

Learn about [what NFT Collections are](/guide/nft/collection) before going ahead.

## Prerequisites

Each Collection is represented by a unique smart contract. So, you need to have a smart contract already deployed for this.
We will use a template contract to deploy our own collection on-chain.

:::info
Note: Right now, creation of custom template contracts is retricted. If you want to deploy your own template contract, kindly get in touch with us and we&apos;ll be happy to assist you.
:::

:::caution
Collections are supported in v1.x.x and above only. Please update to latest version of sdk to avoid any complications.
:::

## Create New Collection

Let&apos;s prepare our `collectionData` first:

```js
let collectionData = {
  name: "Collection Name", // Also Contract Name
  description: "About your Collection", // Also Contract Description
  networkId: networkId,
};
```

:::note
Collections ownership are limited to project owners at this point. We will extend support to your users to create collection soon. If you need this feature at the earliest, please get in touch with us.
:::

Now, let&apos;s call the `newCollection` method:

```js
let collectionRes = await drip.newCollection(collectionData, walletClient);
```

`walletClient` is the wallet provider. If you are using Metamask or other wallets, you can use the provider from that, like `window.ethereum`. Or you can create your own provider using private key or seed mneumonic according to your preference.

If everything goes well, you should get a response like:

```json
{
  "id": "1",
  "contractId": "20"
}
```

Please save these in your instance to use later in other functions. `"id"` is the identifier of your newly created collection. A fresh `contractId` is also deployed and available to be used for your collection.

:::tip Why separate id for collection and contract?
DripVerse SDK provides greater flexibility in terms of usage of contracts and collections which is beyond normal NFT use-cases.
We cover utilities and custom smart contracts as well. Hence there&apos;ll be cases of contracts which are not collections as well.
However, if you&apos;re only interested in collections, then you perhaps will not need to bother with contractId at all.
:::
