---
id: contracts
title: DripVerse Contracts
sidebar_label: Contracts
hide_table_of_contents: false
---

# Get Contract Information

This function is used to get the contract information for dripverse protocol.

### Pre-requisites

No pre-requisute is required for this function.

### Searching Contracts

You can query the contracts in many way.

- You can get all contracts
- You can query a contract by `contractId`
- You can query a contract by `contractAddress`

Get all the contracts by calling `contracts` function with no params.

```js
let allContracts = await drip.contracts();
console.log("allContracts:", allContracts);
```

You should get an output as an array with all the contracts available for dripverse, e.g:

```js
[
  {
    id: 1,
    name: 'erc721',
    networkId: 1,
    description: 'Drip Store Single Mint Polygon NFT',
    address: '0x2cf9189355A6C7b746CdA6C7950D38305a73a283',
    transactionUrl: null,
    explorerUrl: 'https://mumbai.polygonscan.com/tx/0x2b4c50a00bf4dfb7c548f7f8f955f8afa39ab012547616b46a775278536a9339',
    visibility: 1,
    ...
    createdAt: '2022-12-01T12:28:41.996Z',
    updatedAt: '2022-12-01T12:28:41.996Z'
  },
  {
    id: 2,
    name: 'erc721',
    networkId: 2,
    description: 'Drip Store Single Mint Polygon NFT',
    address: '0x4571C4D196f91E15f98cb7014BD4D144d257CF2D',
    transactionUrl: null,
    explorerUrl: 'https://goerli.etherscan.io/tx/0x43b6370807dcd5e4f1d228abf7638063c4e3bd41636fbabf4ca9473caa7eaf24',
    visibility: 1,
    ...
    createdAt: '2022-12-01T12:28:42.028Z',
    updatedAt: '2022-12-01T12:28:42.028Z'
  }
]
```

You can query contract by `contractId` or `contractAddress` also with making a filter object as follows:

```js
let filter = {
  contractId: 1,
};
// or
let filter = {
  contractAddress: "0x2cf9189355A6C7b746CdA6C7950D38305a73a283",
};
```

And then call the `contracts` function with the above filter.

```js
const contract = await drip.contracts(filter);
```

You will get the contract information after the successful call of function, e.g

```js
[{
  id: 1,
  name: 'erc721',
  networkId: 1,
  description: 'Drip Store Single Mint Polygon NFT',
  address: '0x2cf9189355A6C7b746CdA6C7950D38305a73a283',
  transactionUrl: null,
  explorerUrl: 'https://mumbai.polygonscan.com/tx/0x2b4c50a00bf4dfb7c548f7f8f955f8afa39ab012547616b46a775278536a9339',
  visibility: 1,
  ...
  createdAt: '2022-12-01T12:28:41.996Z',
  updatedAt: '2022-12-01T12:28:41.996Z'
}]
```
