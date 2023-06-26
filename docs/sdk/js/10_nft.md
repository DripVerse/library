---
id: nft
title: Get NFT Information
sidebar_label: NFT Details
hide_table_of_contents: false
---

This function is used to get the nft information for dripverse protocol.

### Pre-requisites

No pre-requisute is required for this function.

### Searching NFTs

- You can query a getNft by `nftId`

You can query getNft by `nftId` with making a filter object as follows:

```js
let filter = {
  nftId: 1,
};
```

And then call the `getNft` function with the above filter.

```js
const nft = await drip.getNft(filter);
```

You will get the nft information after the successful call of function, e.g

```js
[
  {
    id: 1,
    name: 'Into the Sea',
    description: "A young women looking into the sea, for just all over there's horizon.",
    asset: 'https://bafybeibmfakbivzruu7f5or2ulgblhiat2g2bkenoon4hp7i45fqdrdzoi.ipfs.nftstorage.link/Konachan.com - 77204 flyable_heart itou_noiji shirasagi_mayuri.jpg',
    linkTo: '',
    properties: { attributes: [Array] },
    supply: 1,
    ...
  }
]
```
