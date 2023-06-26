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

First, you need to [upload entire directory to IPFS](/guide/nft/storage/upload#upload-directory). You'll get a cid, like: `bafybeibljtdrq2ar6xofoo4tdem223go4en44sgvii4xmlinbgrq2gidmi`. Make sure that the files inside this directory are in order and numbered accordingly as 1.svg, 2.svg, ...and so on. This will create the directory as it is on IPFS with all it's files inside.

Make a JSON Object with following details. Your object can be an image or an entire `metadata.json`.

```mdx-code-block
<Tabs>
  <TabItem value="image" label="Image" default>
```

```js
let cid = {
  assetType: "image",
  cid: "bafybeibljtdrq2ar6xofoo4tdem223go4en44sgvii4xmlinbgrq2gidmi",
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
  userAccount: "0x..." // This is the account who'll be the new owner of these NFTs. If it's you yourself, put here your public account address.
};
```

Optional:

- `description`
- `networkId` (_default 3: Polygon Mainnet_)
- `contractId` (_default 6: Polygon Mainnet ERC721_)
- `metadata`

You'd also need a `customData` here, to define the range in which the files are numbered:

```js
{
    start: 1,
    end: 4
}
```

If in case your contract needs some additional data in your function, you can add them here.

:::success Get Contract Signer
Make sure you've [contractSigner](/sdk/js/init#contract-client) object before proceeding.
:::

### Mint

Now to mint you new NFT, simply call `drip.mint`:

```js
let mintResponse = await drip.batchMintFor(mintData, cid, contractSigner, customData);
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
