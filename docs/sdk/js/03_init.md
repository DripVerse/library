---
id: init
title: Initialise JavaScript SDK
sidebar_label: Initialise
hide_table_of_contents: false
---

# Initialising
Let's initiate library in your project, depending on if you're following ES6 standard or CommonJS module format.

## Import

```js
import { DripSDK } from 'dripverse';
```
or
```js
const { DripSDK } = require('dripverse');
```

## Initialise

You can generate your Oroject API from the Utility Page of the NFT or the Project page itself.
```js
var drip = new DripSDK('PROJECT_API_KEY');
```
[Read more about Utility Setup on DripVerse Platform.](../../guide/utility/gatekeeper/setup.md)

<!-- If you want to work on `local` or `alpha`, please add the following:
```js
var drip = new DripSDK('2bd97fd02911eb060b259167676800b2f15e3336', 'alpha');
``` -->
:::info
Note: Please use your generated project key only and do NOT share your project key with anyone. Learn more about [Generating Project Key](../../guide/utility/gatekeeper/setup.md).
:::
