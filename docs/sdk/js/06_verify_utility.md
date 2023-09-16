---
id: verify
title: Verify Utility Access
sidebar_label: Verify Access
hide_table_of_contents: false
---

Mostly used in Token Gating and with Gatekeeper Utility. However, there can be many more use-cases not covered by us currently.

:::success
If you found such a use-case and we would love to learn about it. Please reach out to us at [hello@dripverse.org](mailto:hello@dripverse.org).
:::

We are checking if the logged in user has access.

If you want to check if the logged in user has access to any utility created under a particular project, then simply pass this:

```js
await drip.hasAccess("USER_ADDRESS");
```

`USER_ADDRESS` is the address from which your user has logged in to DripVerse.

So, it'd look something like:

```js
await drip.hasAccess("0x24a41t182gWk27dAje9z8n262N62v0rTs7390eFT");
```

where `0x24a41t182gWk27dAje9z8n262N62v0rTs7390eFT` is the user account address and `123` is the Utility ID.

The response is `true` or `false` only.

However, if you want to check for any particular utility type, you can pass a `filter` param like such:

```js
await drip.hasAccess("USER_ADDRESS", { type: 1 });
```

where `type` value signifies the utility type. Learn more about utility types [here](/guide/utility/introduction).
