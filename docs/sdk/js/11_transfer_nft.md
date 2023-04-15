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

Transfer Data:
```js
const transferData = {
  from: "0x...",
  to: "0x...",
  nftId: '1'
};
```

:::success Get Contract Signer
Make sure you've [contractSigner](/sdk/js/init#contract-client) object before proceeding.
:::

Transfer
```js
drip.transfer(transferData, contractSigner)
```
