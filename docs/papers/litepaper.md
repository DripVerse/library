---
id: litepaper
title: DripVerse Protocol
sidebar_label: Litepaper
hide_table_of_contents: false
category:
  - Litepaper
tag:
  - Litepaper
  - NFT
  - SmartNFT
  - DripVerse
  - DripVerse Protocol
  - Web3
---
Author: [Kumar Anirudha](https://twitter.com/kranirudha)

### _Powering the Cyberspace_

## Abstract
An open web protocol for the decentralised web3 ecosystem. Driving the mainstream adoption is the core to any technology making it. DripVerse Protocol will enable dev tooling with interoperable assets supported by a no-code UI platform to the advent of the open Metaverse OS. A true democratic web for everyone.

# Summary
Web1 brought us a new form of computing. Introduced us to a new generation of digital products which opened up a whole new dimension of possibilities. For the first time, data became a commodity and the value of information became apparent.<br />
Web2 took it a leap frog forward and brought us the internet in a more dynamic and social cycle. Another new generation was introduced who would connect over the internet and would almost live in it. A lot of very interesting innovations happened due to this of course, and we are all grateful for it. But the Web2 was really supposed to set us free but all we got was owned based on behavioral prejudice.<br />
The promise of Web3 brings us a full circle to what the next generation will look for. The ownership over one's data and control over actions, in addition to a better understanding of the connection we make over a packet transfer of the internet. While the change in particular seems to exist in the nature of the internet, the internet itself also needs a desperate change. And with that change, comes along a new way to operate and build. Virtual Reality and Mixed Reality while being more pleasure than work at this point, provides us with that final piece to step into the changing landscape of web and technology. We have a rare opportunity to build something that truly composes of the technology assisting us to take the step forward.

# Web 3.0
Web3 or Web3.0 is largely formed around smart contracts. For better or worse, this provides us with certain advantages over the traditional internet. The next generation of products will be around protocols, not apps. What we need to build these protocols is afterall the final goal of DripVerse.

## Blockchain
An immutable ledger and a decentralised network! <br />
Blockchain came with Bitcoin providing a decentralised network incentivised with the native digital tokens that we know as cryptocurrency. Crytocurrency came with a huge promise of being free by itself. Governed by anyone willing to support the network, for which they are also incentivised.

### The ACT Principle
While we'd love the technology. A single technology can not be force fitted everywhere. To know if your problem needs blockchain, we can follow the ACT principle. If your product is facing Accountability, Coordination or Trust problems, then you need blockchain, otherwise it can probably be solved with centralised solutions from Web2.

## Smart Contracts
Smart Contracts brought out the best of blockchains for the first time in Ethereum, allowing anyone to write a piece of code to be run on a decentralised network. We've seen protocols growing on various domains using Smart Contracts to solve lot of problems that existed in Web2. Started an entire new race for innovative products in all domains and industries. Even some standardisation with OpenZepplin packages helping with ease of developments. A lot of dev tools came to surface trying to help builders build faster, safer and scale better.

## Non-fungible Tokens
Smart Contracts also brought us many interesting propositions in terms of EIPs(Ethereum Improvement Proposals). One of the most ground breaking one being ERC-721 or more commonly known as NFTs. A unique digital representation on an immutable ledger, which can be used in other programs in all sorts of ways. This is a remarkable step towards the next evolution of web.

## Adding Utility to NFTs
We are starting to see some artists and celebrities coming up with their own NFTs, which provides access to exclusive content, events and deals in respect to the artist who's NFT we might have acquired. This is a great step towards adding utility over PFP NFTs and in turn adds additional value to it. Of course, these can still be traded over any marketplaces. There is also real world objects which are connecting with digital twins using NFTs which provides access to the same digital object in a Metaverse. Even some events and concerts have started adding NFT tickets, which adds further actionable value to the NFT. There are various industries pushing added value to the NFT which is brings us to the next upgrade over NFT, also sometimes called as NFT2.0 or Smart NFTs.

## Smart NFT
Smart NFTs is the next step in the evolution of NFTs which creates and distributes NFTs with programmable and actionable utility.
We provide an SDK and other dev tools to ease the process of creating Smart NFTs. Our custom variation of ERC721 and ERC1155 as well as ERC4907 provides embedded utility inside the smart contract itself, which is linked back to additional private information readable by our SDKs and client libraries to support on various platforms, like mobile (Android, iOS), desktop(Linux, Mac, Windows) and web(Browser).
The problem is that today, when we create Smart NFTs, we intend to make them single purpose use only. Because of course, a smart contract once written is not modified and most smart contracts are written with that sole purpose in mind. Our custom utility smart contract package can upgrade the metadata with drip object that can be read by our SDK. So, ultimately, we can essentially add infinite utilities to the same NFTs. Update them and also expire them as per need.

## Nested NFTs
Very specifically for the Metaverse and Dynamic NFTs space, Nested NFTs are going to play a huge role. Imagine not needing to store anything on your hybrid setup of private Database. The mapping is part of the metadata which can be changed and upgraded from anywhere. A truly open NFT protocol.

## Interoperable Assets
Just adding more value to existing NFTs is not enough if it's limited to a single network. We also need to support multiple networks as well as be able to move the assets seamlessly across chains. We're creating our own custom NFT Bridge to support not only Layer 1 networks like Ethereum, Polkadot, Cosmos, Solana, but also Layer 2 networks like Polygon, Starknet, ZkSync, and many more. We'll also integrate external bridges like Router Protocol to add further support for token bridging and provide more options to the users.

## Open Web Protocol
We are only focusing on creating the building blocks, not just for us but also for our builder community. Going forward, we would encourage builders and developers to integrate and build their own utilities and make it available to the large community. The entire DripVerse ecosystem is an open ecosystem where community made plugins is going to be the corner stone for new upcoming projects. A good analogy can come from Wordpress Community made plugins and add-ons or the Figma Design Community Plugins. The main Drip SDK is essentially an open web protocol with encouraging innovation at the core.

### Plugins
Any developer or builder should be able to easily build their own plugins and custom utilities and list them on our plugin marketplace to earn by per-use model in realtime transaction basis. These plugins can also be made in various access types such as private, protected and public modes. The plugins currently supports javascript and python libraries and we will be working further on supporting more libraries going forward. We will also support any wrapped libraries built over our libraries and will support most major package managers like npm, pypi, etc.

## SDK
The SDK (Software Development Kit) holds the key to all our products. The SDK is written in rust and will run over CLI and support various other programming languages via Web Assembly language bindings. We are starting with support for EVM based networks and solidity as smart contract language, but in upcoming versions we will cover non-EVM chains as well. 

## CLI Tool
The CLI tool is the first step for our SDK to attempt for a general purpose use-case. Currently supporting Ubuntu and Arch Linux and Mac distributions via majorly used package managers. We are also integrating all NFT functionalities like minting, transfer, withdraw and moving assets cross-chain seamlessly. However, while using CLI tool, users will need to enter their private keys manually. We'll be embedding a secret manager as well, thereby simplifying the usage. The advantage of CLI tool is that, it can run practically anywhere, including very resource deprived hardwares like Raspberry Pi and Arduino Uno.

### Smart Contract Programming Support
We are creating our own Smart Contract standard, which means any other custom smart contract can easily import our library and use it in their own smart contract like OpenZepplin Smart Contracts right now. These custom Smart Contracts can also be turned into utilities and listed on the platform as well. Control Access around it and make it a usable plugin.

### Custom Token Support
Every project has their own token and might not always use the native token of the network. We are integrating various token bridges and wallets supporting them which will allow using a wide number of tokens to be used. We will also have an easy no-code tool to link your tokens to our partner wallets so that you can use your tokens in a private dev environment as well.

# Drip Token
We will have our own token to support various activities across platforms as well to support the SDK via a native token utility. More about DRIP token soon on our tokenomics paper.

# Multi-Chain Explorer
A lot of assets moving cross-chain does make sense only if we've more visibility over it. This will include tracking the assets from the source network to destination network including any transitions they might have been done in between. We will eventually also open the APIs to the same for adding Dune like platforms to create analytics over it.

# High Level Architecture
![High Level Architecture of Smart NFT Tooling](https://i.imgur.com/Z7lHIY7.png "Smart NFT Tooling Block Architecture")


# Conclusion
While everything written above is in the works already, this is just the beginning. This paper is not at it's end. We plan on updating it on every stage update as we move forward. Hopefully, you'll join us on this journey.
