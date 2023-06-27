---
id: upload
title: Upload File to IPFS
hide_table_of_contents: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Get your file object first. If you're using server side NodeJs, you can use `fs` library for it like:

```js
import fs from "fs";

// Read File
const file = fs.readFileSync(filepath);
```

If in case you are using React or other client side js framework, you can get your File object accordingly.
Once you have your file object, upload to IPFS using:

```js
let cid = await web3storage.uploadFile(file);
console.log('metadata cid:', cid);
```
