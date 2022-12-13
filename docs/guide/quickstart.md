---
id: quickstart
title: Getting Started
sidebar_label: 🚀 Quick Start
hide_table_of_contents: true
---

import { VideoCard } from "@site/components/featurelist"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

:::info
Once your're approved, you're all set to explore the whole platform and integrate DripVerse in your DApp. This guide will step your through your first utility creation and integration in your own platform through Drip SDK.
:::

## Step 1: Mint your first NFT

- Head over to [https://alpha.dripverse.org/nft/mint](https://alpha.dripverse.org/nft/mint).
- Fill all the appropriate fields, click on **Submit** and sign the transaction.

<VideoCard url="https://assets.dripverse.org/videos/mint.mp4" />

## Step 2: Add Utility

If the transation goes through and your NFT is successfully minted, you'll be redirected to the NFT details page.

- To add a utility, click on **Create new**, fill the relevant details and click **Submit** and sign the transaction.

<VideoCard url="https://assets.dripverse.org/videos/add_utility.mp4" />

## Step 3: Generate project key

- Hover over your created utility, click on ⚙️ after the card unlocks to go to your utility dashboard.
- Click on **Generate Key** and copy the key to your clipboard from the side menu.
- Also note down your **UTILITY ID**, we'll use it in our SDK.

<VideoCard url="https://assets.dripverse.org/videos/generate_key.mov" />

## Step 4: Integrating DripVerse SDK

Install the DripVerse SDK.

<Tabs>
  <TabItem value="npm" label="npm" default>
    <CodeBlock language="bash">
   npm install dripverse
    </CodeBlock>
  </TabItem>

  <TabItem value="yarn" label="yarn">
    <CodeBlock language="bash">
   yarn add dripverse
    </CodeBlock>
  </TabItem>
</Tabs>

Import the library in your project.

<Tabs>
  <TabItem value="react" label="React/Typescript" default>
    <CodeBlock language="bash">
      {`import { DripSDK } from "dripverse";`}
    </CodeBlock>
  </TabItem>

  <TabItem value="node" label="Node.js">
    <CodeBlock language="bash">
      {`const { DripSDK } = require('dripverse');`}
    </CodeBlock>
  </TabItem>
</Tabs>

Paste the constants and initialize the drip object with your project key.

```js
const PROJECT_KEY = "<YOUR-PROJECT-KEY>";
const UTILITY_ID = "<YOUR-UTILITY-ID>";
const USER_ADDRESS = "<YOUR-WALLET-ADDRESS>";

const drip = new DripSDK(PROJECT_KEY, "alpha");
```

You can use the `hasAccess` method to verify whether the user has access, if the user is unauthorized then it throws an error, you can wrap the method in a `try...catch` block to handle it accordingly.

```js
const allowed = await drip.hasAccess(USER_ADDRESS, UTILITY_ID);

if (allowed) {
  //   YOUR SUCCESS CODE HERE
} else {
  //   YOUR FAILURE CODE HERE
}
```

:::success
View [SDK docs](../sdk/js/00_intro.md) for more features and detailed usage.
:::
