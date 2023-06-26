---
id: networks
title: Get Network Data
sidebar_label: Networks
hide_table_of_contents: false
---

This function is used to get the network information for dripverse protocol.

### Pre-requisites

No pre-requisute is required for this function

### Searching Networks

You can query the networks in two way.

- You can get all networks
- You can query a network by `networkId`

Get all the networks by calling `networks` function with no params.

```js
let allNetworks = await drip.networks();
console.log("allNetworks:", allNetworks);
```

You should get an output as an array with all the networks available for dripverse, e.g:

```js
[
  {
    id: 1,
    name: 'Polygon Mumbai',
    type: 'testnet',
    icon: 'https://i.imgur.com/3u19IlD.png'
  },
  {
    id: 2,
    name: 'Goerli',
    type: 'testnet',
    icon: 'https://i.imgur.com/XLnDpcY.png'
  }
]
```

You can query network by Id also with making a filter object as follows:

```js
let filter = {
  networkId: 1,
};
```

And then call the `networks` function with the above filter.

```js
const network = await drip.networks(filter);
```

You will get the network information after the successful call of function, e.g

```js
{
  id: 1,
  name: 'Polygon Mumbai',
  type: 'testnet',
  icon: 'https://i.imgur.com/3u19IlD.png'
}
```
