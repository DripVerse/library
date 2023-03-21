---
id: ipfs
title: IPFS
sidebar_label: 🧊 IPFS
hide_table_of_contents: false
---

The **InterPlanetary File System** (IPFS) is a set of composable, peer-to-peer protocols for addressing, routing, and transferring content-addressed data in a decentralized file system.

![IPFS](/img/guide/IPFS.jpg "IPFS")

IPFS is a distributed system for storing and accessing files, websites, applications, and data. It doesn't have a built-in incentive scheme, but can instead be used with any of the contract-based incentive solutions above for longer-term persistence. Another way to persist data on IPFS is to work with a pinning service, which will "pin" your data for you. You can even run your own IPFS node and contribute to the network to persist your and/or other's data for free!

## How IPFS works
Here's what happens when you add a file to IPFS — whether you're storing that file on your own local node or one operated by a pinning service or IPFS-enabled app:

- When you add a file to IPFS, your file is split into smaller chunks, cryptographically hashed, and given a unique fingerprint called a content identifier (CID). This CID acts as a permanent record of your file as it exists at that point in time.

- When other nodes look up your file, they ask their peer nodes who's storing the content referenced by the file's CID. When they view or download your file, they cache a copy — and become another provider of your content until their cache is cleared.

- A node can pin content in order to keep (and provide) it forever, or discard content it hasn't used in a while to save space. This means each node in the network stores only content it is interested in, plus some indexing information that helps figure out which node is storing what.

- If you add a new version of your file to IPFS, its cryptographic hash is different, and so it gets a new CID. This means files stored on IPFS are resistant to tampering and censorship — any changes to a file don't overwrite the original, and common chunks across files can be reused in order to minimize storage costs.

- However, this doesn't mean you need to remember a long string of CIDs — IPFS can find the latest version of your file using the IPNS decentralized naming system, and DNSLink can be used to map CIDs to human-readable DNS names.

Read more on [IPFS docs](https://docs.ipfs.tech/).

There are several projects offering IPFS pinning service:

- [Pinata](https://www.pinata.cloud/)
- [web3.storage](https://web3.storage/) and [nft.storage](https://nft.storage/)
- [Infura](https://www.infura.io/product/ipfs)
- [IPFS Scan](https://ipfs-scan.io/)
- [4EVERLAND](https://www.4everland.org/)
- [Spheron Network](https://spheron.network/)

We are going to use one of the most popular services [nft.storage](https://nft.storage/docs/).

NFT.Storage is a long-term storage service designed for off-chain NFT data (like metadata, images, and other assets) for up to 31GiB in size per individual upload. Data is content addressed using IPFS, meaning the URI pointing to a piece of data ("ipfs://…") is completely unique to that data (using a content identifier, or CID). IPFS URLs and CIDs can be used in NFTs and metadata to ensure the NFT forever actually refers to the intended data (eliminating things like rug pulls, and making it trustlessly verifiable what content an NFT is associated with).

NFT.Storage stores many copies of uploaded data on the public IPFS network in two primary ways: in dedicated IPFS servers managed by NFT.Storage, and decentralized on Filecoin. Since IPFS is a standard used by many different storage services, it's easy to redundantly store data uploaded to NFT.Storage on any other IPFS-compatible storage solution from pinning services, to your local IPFS node, to other storage networks like Arweave or Storj. And as time goes on, NFT.Storage will increasingly decentralize itself as a public good!

![NFT Storage](/img/guide/nftstorage.png "NFT Storage")
