---
id: list
title: List NFT
sidebar_label: List
hide_table_of_contents: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This is a guide used to list an NFT in DripVerse.

:::success Get Contract Signer
Make sure you've [contractSigner](/sdk/js/init#contract-client) object before proceeding.
:::

Please make sure your `contractSigner` from previous step is derived from the right contract and call the functions below accordingly.

```js
const price = 25;
```

The price is in native tokens. For example, if your network is Polygon, the above will represent 25 MATIC tokens.

List Data:

```js
const listData = {
  nftId: "1"
};
```

In case of ERC1155, you'd need to add amount:
```js
listData.amount = 4; // If you want to list 4 tokens.
```

Finally, call `list` method:
```js
drip.list(listData, price, contractSigner);
```

