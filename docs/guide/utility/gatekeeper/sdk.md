---
id: sdk
title: DripVerse SDK
sidebar_label: SDK
hide_table_of_contents: true
---

Now that the SDK is setup, let's try to make use of it:

Import and Initialise sdk:

```js
const drip = new DripSDK($PROJECT_KEY);
```

Just check for access with:

```js
await drip.hasAccess($USER_ADDRESS, $UTILITY_ID);
```

This should give us a response on weather the particular is allowed in your designated gate or not.

To mint a new NFT via sdk:

Prepare a new object with these keys:

- NetworkId: 2 -> Polygon Mumbai
- NetworkId: 3 -> Goerli

```js
let mintData = {
  filePath: "",
  name: "NFT Name",
  description: "NFT Description",
  networkId: 3,
};
```

Here, `filePath` is the path to an image for which you want to mint an NFT.
e.g `./images/dripuniverse.png`

Then mint a NFT from sdk via:

```js
const mintRes = await drip.mint(mintData);
```

When Successfully minted expect a response like in `mintRes`:

```js
{
    id: 1,
    transactionHash: "0x9c45ed60e460f68c13b262886fae43004cb98f7764382ee4662cd4808b8c14c6",
    tokenId: 2
}
```
