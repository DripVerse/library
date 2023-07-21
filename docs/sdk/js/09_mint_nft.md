---
id: mint
title: Mint NFT
sidebar_label: Mint
hide_table_of_contents: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This is a guide used to mint a new NFT.

### Upload to IPFS

First, you need to [upload file to IPFS](/guide/nft/storage/upload). You'll get a cid, like: `bafybeifhadklgjjfdxx2nvomyrhjsobhbxeenwc5bheftcetcyqz4yywim`.

We would also need the following, to define a name and description to your NFT.

```js
let mintData = {
  name: "NFT Name",
  description: "NFT Description"
};
```

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

mintData.asset = 'https://bafybeihvmc2amn3j3lnvl2a4oxvdqh65iujrxz445tvjccazdfpgthndpa.ipfs.nftstorage.link/k-1.jpeg';
```

```mdx-code-block
  </TabItem>
</Tabs>
```

Optional:

- `description`
- `networkId` (_default 3: Polygon Mainnet_)
- `metadata`

:::success Get Contract Signer
Make sure you've [contractSigner](/sdk/js/init#contract-client) object before proceeding.
:::

### Mint

Now to mint you new NFT, simply call `drip.mint`:

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
