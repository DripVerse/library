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

Now to transfer your NFT, simply call `contractSigner.safeTransferFrom`:

```js
const fromAddress = "0x..."; // Your address
const toAddress = "0x..."; // The address you want to send the NFT to
const tokenId = "1"; // The tokenId of the NFT you want to send

const transferResponse = await contractSigner[
  "safeTransferFrom(address,address,uint256)" // Since safeTransferFrom is an overloaded function
](fromAddress, toAddress, tokenId);
```

### Updating DB

After the transfer is complete, you will need to update the database to reflect the new owner of the NFT.

```js
const txReceipt = await transferResponse.wait();

const transferData = {
  account: toAddress,
};

const txData = {
  transactionHash: transferResponse.hash,
  nonce: transferResponse.nonce,
  tokenId: parseInt(txReceipt.events[0].args[2]._hex),
};

const payload = {
  transferData,
  txData,
};

const nftId = "1"; // The id of the NFT you want to update

const response = await axiosClient.put(
  `${BASE_URL}/v1/nft/${nftId}/transfer`,
  payload
);
```
