---
id: upload
title: IPFS Upload
sidebar_label: ⬆ IPFS Upload
hide_table_of_contents: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

_Let's upload our files to IPFS._

We will follow the following steps:
1. [Create an NFT.Storage account.](https://nft.storage/login/)
2. Upload files and directories
   1. You can use the desktop app [NFTUp](https://nft.storage/docs/how-to/nftup/)
   2. Or, you can use the javascript library as we will use below.
3. Get the NFT Storage Token from the dashboard. We are going to be needing this.

_Let's start writing some code._

### Install
```sh
npm install nft.storage --save
```

### Setup

#### Import
```js
import { NFTStorage } from 'nft.storage';
```

#### Initialise
You can get your IPFS_TOKEN from the NFT.Storage dashboard.

```js
var storage = await new NFTStorage({ token: IPFS_TOKEN });
```

### Upload File
```mdx-code-block
<Tabs>
  <TabItem value="nodejs" label="NodeJs" default>
```
```js
import fs from 'fs';

// Read File
const file = fs.readFileSync(filepath);

// Create a blob of the file.
let blob = new Blob([file]);

// Upload to IPFS and get the cid
const cid = await storage.storeBlob(blob);
console.log('cid:', cid);
```
```mdx-code-block
  </TabItem>

  <TabItem value="reactjs" label="ReactJs">
```
```js
// Create a blob of the file.
let blob = new Blob([<YOUR-IMAGE-FILE>]);

// Upload to IPFS and get the cid
const cid = await storage.storeBlob(blob);
console.log('cid:', cid);

```
```mdx-code-block
  </TabItem>
</Tabs>
```

Now, we got our cid. We can form it into an object as such:
```json
{
    "assetType": "image",
    "cid": cid
}
```

### Upload Directory
We can also upload entire directory to IPFS. To do so, get the absolute directory path as `dirpath` and follow the code snippet below:
```js
import { filesFromPath } from 'files-from-path';

// Read all files in the directory path
const files = filesFromPath(dirpath, {
    pathPrefix: path.resolve(dirpath),
    hidden: true,
});

// Upload Directory to IPFS and get the cid of the directory.
let cidDir = await storage.storeDirectory(files);
```

You can always check the status and files uploaded using your token from the nft.storage dashboard.
