---
id: transfer
title: DripVerse Transfer
sidebar_label: Transfer
hide_table_of_contents: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Transfer/Send NFT

This is a guide used to transfer an existing NFT.



### Transfer

Now to transfer your NFT, simply call `drip.transfer`:

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
