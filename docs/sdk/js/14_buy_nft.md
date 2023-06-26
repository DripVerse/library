---
id: buy
title: Buy NFT
sidebar_label: Buy
hide_table_of_contents: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This is a guide used to buy an NFT in DripVerse.

:::success Get Contract Signer
Make sure you've [contractSigner](/sdk/js/init#contract-client) object before proceeding.
:::

Please make sure your `contractSigner` from previous step is derived from the right contract and call the functions below accordingly.

```js
const price = 25;
```
The price is in native tokens. For example, if your network is Polygon, the above will represent 25 MATIC tokens.
To successfully buy, you need to provide the asking price or more of the NFT.

Buy Data:
```js
const buyData = {
  nftId: "1"
};
```

In case of ERC1155, you'd need to add amount:
```js
buyData.amount = 4; // If you want to buy 4 tokens.
```

Finally, call `buy` method:
```js
drip.buy(buyData, price, contractSigner);
```

