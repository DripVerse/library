---
id: setup
title: Setup JavaScript SDK
sidebar_label: Setup
hide_table_of_contents: false
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Let's start powering your Dapp with DripVerse.

## Prerequisites

### Minimum Requirements

- Node `v16.x.x` or above.

## Install

The library is available on [Node Package Manager](https://www.npmjs.com/package/dripverse).

From inside your project root, run:

```mdx-code-block
<Tabs>
  <TabItem value="npm" label="npm" default>
```

```bash
npm install dripverse --save
```

```mdx-code-block
  </TabItem>

  <TabItem value="yarn" label="yarn">
```

```bash
yarn add dripverse
```

```mdx-code-block
  </TabItem>
</Tabs>
```

You can verify which package version is installed by running:

```bash
npm list
```

If you can see something like this below, we are good to go:

```bash
└── dripverse@x.x.x
```

Please check the latest version as we keep updating the library pretty often as we add new features, fixes and enhancements.
You can find the version details here:

## Update

You can use [`ncu`](https://www.npmjs.com/package/npm-check-updates) to look for newer version availability: `ncu -u`

Or you can update the package version on `package.json` directly:

```json
"dependencies": {
    ...,
    "dripverse": "0.5.0",
    ...
}
```

And then run:

```js
npm install
```
