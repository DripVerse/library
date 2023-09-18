---
id: mint-bulk
title: Bulk Mint NFTs
sidebar_label: Bulk Mint
hide_table_of_contents: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This is a guide used to mint new NFTs in bulk.
There are several ways to do so. One of the easiest to get started in serialised bulk minting, which is presently available on the sdk.

### Upload to IPFS

First, you need to [upload entire directory to IPFS](/guide/nft/storage/upload#upload-directory). You'll get a cid, like: `bafybeibljtdrq2ar6xofoo4tdem223go4en44sgvii4xmlinbgrq2gidmi`. Make sure that the files inside this directory are in order and numbered accordingly as 1.png, 2.png, ...and so on. This will create the directory as it is on IPFS with all it's files inside.

We would also need the following, to define a name and description to your NFT.

```js
let mintData = {
  name: "Test NFT",
  description: "Test NFTs",
  networkId: networkId, // optional. Default 3 -> Polygon PoS Mainnet
  userAccount: process.env.ACCOUNT, // The owner address of the NFT.
  metadata: {}, // Contents of metadata is configurable.
  price: 0.58, //  price of NFT in MATIC
};
```

Make a JSON Object with following details. Your object can be an image or an entire `metadata.json`.

```js
// where inside metadata.json, there must be a key to `image`
let cid = "bafyreieha6jqtnu4f4njyaovknxyyxeurkcsopcryrggxkt7hcbi5zmwzi";

mintData.assets = ['image-ipfs-link-1', 'image-ipfs-link-2', ...]
```

You'd also need a `customData` here, to define the range in which the files are numbered:

```js
[
    start: 1,
    end: 4,
    userAddress,
    platformFee: 10 // 10%
    roundedNFTPrice: 58 // price of 1 NFT (upto 2 decimal places) in matic * 100; this is done in order to make it an integer
]
```

If in case your contract needs some additional data in your function, you can add them here.

:::success Get Contract Signer
Make sure you've [contractSigner](/sdk/js/init#contract-client) object before proceeding.
:::

### Mint

Now to mint you new NFT, simply call `drip.mint`:

```js
let mintResponse = await drip.batchMintFor(
  mintData,
  cid,
  contractSigner,
  customData
);
console.log(mintResponse);
```

You should get an output indicating the `nftId`. The `mintResponse` above should give a response as follows:

```js
{
  ids: [121, 122, 123, 124],
  transactionHash: '0x1ca7fe8148778a2d6953c42a81fd6ec5c46c5a2668fe7859dae72f7d42aa1ff0',
  tokenIds: [ 14, 15, 16, 17 ]
}
```
