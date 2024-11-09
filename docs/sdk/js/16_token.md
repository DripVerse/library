---
id: token
title: Token
sidebar_label: 🪙 Token
hide_table_of_contents: false
---

![ERC20](/docs/assets/welcome-pages/erc20.webp "ERC20")

ERC-20 is a standard or guideline for creating new tokens. The standard defines six mandatory functions that a smart contract should implement and three optional ones.

The mandatory functions are listed below with explanations.

- **totalSupply**: A method that defines the total supply of your tokens; when this limit is reached, the smart contract will refuse to create new tokens.
- **balanceOf**: A method that returns the number of tokens a wallet address has.
- **transfer**: A method that takes a certain amount of tokens from the total supply and gives it to a user.
- **transferFrom**: Another type of transfer method that is used to transfer tokens between users.
- **approve**: This method verifies whether a smart contract is allowed to allocate a certain amount of tokens to a user, considering the total supply.
- **allowance**: This method is exactly the same as the approved method except that it checks if one user has enough balance to send a certain amount of tokens to another.

Besides the mandatory functions listed below, functions are optional, but they improve the token's usability.

- **name**: A method that returns the name of the token.
- **symbol**: A method that returns the symbol of the token.
- **decimals**: A method that returns the number of decimals the token uses. It is used to define the smallest unit of the token. For example, if an ERC-20 token has a decimals value of 6, this means that the token can be divided up to six decimal places.

# Create Your Own ERC20 Token

```ts
let tokenData = {
  name: "TokenName",
  symbol: "SYMBOL",
  decimals: 18,
  networkId: networkId,
  metadata: {
    init: [
      "TokenName", // name
      "SYMBOL", // symbol
      18, // decimals
      1000000000, // premint on owner address
    ],
  },
};

let tokenRes = await drip.newToken(tokenData, walletClient, 133);
```

If everything works, you should get a response like:

```json
{
  "id": 2,
  "contractId": 135,
  "address": "0x9a6Ba35fa428d87f8ae336240482188643CEF2d9"
}
```

![Coins](/docs/assets/welcome-pages/coins.gif "Coins")
