---
id: verify
title: Verify Utility Access
sidebar_label: Verify Access
hide_table_of_contents: false
---

# Verify Utility Access
Mostly used in Token Gating and with Gatekeeper Utility. However, there can be many more use-cases not covered by us currently. 

:::success
If you found such a use-case and we would love to learn about it. Please reach out to us at [hello@dripverse.org](mailto:hello@dripverse.org).
:::

We are checking if the logged in user has access to the particular utility in question. We need to pass user address and utlityId, which we can get values of from the Utility Detail page, from the NFT Detail page.

```js
await drip.hasAccess('USER_ADDRESS', 'UTILITY_ID')
```
`USER_ADDRESS` is the address from which your user has logged in to DripVerse.

So, it'd look something like:
```js
await drip.hasAccess('0x24a41t182gWk27dAje9z8n262N62v0rTs7390eFT', '123');
```
where `0x24a41t182gWk27dAje9z8n262N62v0rTs7390eFT` is the user account address and `123` is the Utility ID.

The response is again `true` or `false` only.
