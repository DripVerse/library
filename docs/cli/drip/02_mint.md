---
id: mint
title: Mint using DripVerse CLI
sidebar_label: Mint
hide_table_of_contents: false
---

#### Pre-requisites:
1. EVM Account
   1. Address
   2. Private Key (Please note that we do not store or share the private key. The signature is done on client side only.)
2. Alchemy Web3 Node API KEY

Update the above Pre-requisites on the config file and we're good to go.

:::caution
Minting will require gas fee on Polygon. So, make sure you've enough balance to execute it.

If you're looking for funds for Polygon Testnet, try the [Polygon Mumbai Faucet](https://faucet.polygon.technology/).
:::

### Mint
```sh
drip mint <file>
```

### Bulk Mint
```sh
drip mint --bulk <dir>
```
