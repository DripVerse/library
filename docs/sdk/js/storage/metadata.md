---
id: metadata
title: NFT Metadata
hide_table_of_contents: false
---

```js
const file = fs.readFileSync(filepath);
const metadata = {
    name: 'NFT Name',
    description: 'NFT Description',
    assetType: 'image', // Currently only image type is supported.
    ... // any other metadata you desire to include feel free to add.
}
let metadataObj = await web3storage.getMetadata(metadata, file); // Get structured metadata object.
console.log('metadataObj:', metadataObj);

var metadataString = JSON.stringify(metadataObj);
const metadataFilePath = '/tmp/metadata.json'; // Temporary file on server side.

await fs.writeFileSync(metadataFilePath, metadataString); // Create the json file.

const metadataFile = fs.readFileSync(metadataFilePath); // Read file from path

let cid = await web3storage.uploadFile(metadataFile); // Upload file using upload method
console.log('metadata cid:', cid);
// Well done! You have your cid now. Go ahead and mint your NFT. 🎉

fs.unlinkSync(metadataFilePath); // Delete the temporary file created as it's now on ipfs. You can release the space.
```
