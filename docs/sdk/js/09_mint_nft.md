---
id: mint
title: DripVerse Mint
sidebar_label: Mint
hide_table_of_contents: false
---

# Mint an NFT

This function is used to mint a new NFT token for your image without the hassle of getting any token before.

### Pre-requisites

You need to have:

- Your Image file path.

### Let's Mint

First, you need to upload file to IPFS. You'll get a cid, like: `bafybeifhadklgjjfdxx2nvomyrhjsobhbxeenwc5bheftcetcyqz4yywim/hinata.png`.
:::info
Make sure you give the absolute cid to the asset with the path, if your asset is inside a cid pointing to a folder.
:::

Make a JSON Object with details as follow:

```js
let cid = {
  assetType: "image",
  cid: "bafybeifhadklgjjfdxx2nvomyrhjsobhbxeenwc5bheftcetcyqz4yywim/hinata.png",
};

// OR
// where inside metadata.json, there must be a key to `image`

let cid = {
  assetType: "json",
  cid: "bafyreieha6jqtnu4f4njyaovknxyyxeurkcsopcryrggxkt7hcbi5zmwzi/metadata.json",
};

let mintData = {
  name: "NFT Name",
  description: "NFT Description",
};
```

Optional:

- `description`
- `networkId` (_default 1_)

Now to mint you new NFT, simply call `drip.mint`.

```js
let mintRes = await drip.mint(mintData, cid);
console.log("mintRes:", mintRes);
```

You should get an output indicating the `nftId`. The `mintRes` above should give a response as follows:

```js
{
  id: 28,
  transactionHash: '0x6ce955757434a4a055888e96c5d3fc102d372528b73b17d3138ac91bc53aad6f',
  tokenId: 41
}
```
