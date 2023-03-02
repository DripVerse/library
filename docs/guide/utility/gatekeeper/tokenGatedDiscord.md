---
id: discord
title: Token Gated Discord
sidebar_label: 🔐 Token Gated Discord
hide_table_of_contents: true
---

One of the challenges of Discord servers is ensuring that only authorized users can access and interact with the community. This is where token gating comes in. Token gating is a process that allows Discord server owners to restrict access to certain channels or features based on whether or not a user holds a specific NFT. By using token gating, server owners can create exclusive communities and incentivize users to collect and trade NFTs in order to gain access to these exclusive features.

In this guide, we'll walk you through the steps of setting up token gating in Discord using an NFT utility in Dripverse.

- Head over to our [quickstart guide](https://library.dripverse.org/guide/quickstart) to get a general understanding of how to mint your first NFT and adding utilities.
- Once you've minted your NFT, you can use it to token gate your Discord server.

## Step 1: Fill out the utility details

In the NFT details page, click on **Create new** to add a utility and fill the relevant details in the 1st step and click on **Next**.

![Utility details form](../../../../website/static/img/guide/utility/gatekeeper/utilityDetails.png?raw=true)

## Step 2: Setting up Discord Gatekeeper

- In the 2nd step, select **Discord Server** from the list of Gatekeeper types.

![Select discord server step](../../../../website/static/img/guide/utility/gatekeeper/discordServer.png?raw=true)

- Click on **Connect Discord** which will redirect you to Discord's OAuth2 page. Click on **Authorize** to grant Dripverse access to your Discord account. After you've authorized Dripverse, you'll be redirected back to the utility creation page and you should see your Discord username and avatar.

![Discord username step](../../../../website/static/img/guide/utility/gatekeeper/discordUsername.png?raw=true)

- Select the Discord server you want to token gate from the **Select Server** dropdown and click on **Add Gatekeeper bot**. This will redirect you to Discord's interface where you'll be prompted to select the server and authorize the bot to join the server. After you've authorized the bot, you can close the tab and go back to the previous tab and click on **Verify** to verify that the bot has been added to the server. If the bot has been added successfully, you should see a double checkmark next to the **Verify** button. If you don't see the double checkmark, you can click on **Verify** again to retry.

:::info
In the **Select Server** dropdown, you'll only see the servers that you're owner of.
:::

![Add bot step](../../../../website/static/img/guide/utility/gatekeeper/verifiedServer.png?raw=true)

- At this point, the **Submit** button should be enabled. Click on **Submit** to create the utility.

![Utility card](../../../../website/static/img/guide/utility/gatekeeper/utilityCard.png?raw=true)

## Step 3: Joining the Discord server through the utility

Now that you've created the utility, you can use it to join the Discord server. Any user who holds the NFT can use the utility to join the Discord server. To join the Discord server, hover over the utility card and click on the Discord icon. This will redirect you to the Discord OAuth2 page to authorize your Discord account. After you've authorized your Discord account, you'll be redirected back to the utility page and a success message that you have successfully joined the Discord server will be displayed.

![Join server](../../../../website/static/img/guide/utility/gatekeeper/joinServer.png?raw=true)
