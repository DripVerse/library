---
id: unlist
title: DripVerse Unlist
sidebar_label: Unlist
hide_table_of_contents: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This is a guide used to unlist an NFT in DripVerse.

:::success Get Contract Signer
Make sure you've [contractSigner](/sdk/js/init#contract-client) object before proceeding.
:::

Please make sure your `contractSigner` from previous step is derived from the right contract and call the functions below accordingly.

# Unlist NFT

List Data:
```js
const listData = {
  nftId: "1"
};
```

Finally, call `unlist` method:
```js
drip.unlist(listData, contractSigner);
```

