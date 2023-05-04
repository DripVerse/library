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

### Transfer

Please make sure your `contractSigner` from previous step is derived from the right contract and call the `transfer` function below accordingly.

```mdx-code-block
<Tabs>
  <TabItem value="ERC721" label="ERC721" default>
```

```js
drip.transfer(transferData, contractSigner)
```

```mdx-code-block
  </TabItem>
  <TabItem value="ERC1155" label="ERC1155">
```

```js
const amount = 10; // If you want to transfer 10 tokens.
drip.transfer(transferData, contractSigner, amount)
```

```mdx-code-block
  </TabItem>
</Tabs>
```
