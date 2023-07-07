---
id: releases
title: Releases
sidebar_label: 📚 Release Notes
hide_table_of_contents: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

  <TabItem value="sdk" label="SDK" default>
    <details>
      <summary>0.9.15</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] Add Calendly Utility</li>
          <li>[Feature] Access Calendly Utility</li>
          <li>[Feature] Sepolia Testnet Support.</li>
          <li>[Feature] Omni Testnet Support.</li>
        </ul>
      </p>
    </details>
    <details>
      <summary>0.9.12</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] Upload file and get metadata object using Web3Storage Module</li>
        </ul>
      </p>
    </details>
    <details>
      <summary>0.9.10</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] ERC721 Mint For</li>
          <li>[Feature] ERC721 Serialised Batch Mint</li>
          <li>[Feature] Default Contract for each network and standard.</li>
        </ul>
        <h3>⑃ Changed</h3>
        <ul>
          <li>Error Return in Mint and Transfer methods.</li>
          <li>Single owner of NFT.</li>
        </ul>
        <h3>🛡️ Security</h3>
        <ul>
          <li>Check for token owner limited access to their own token.</li>
        </ul>
      </p>
    </details>
    <details>
      <summary>0.9.1</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] ERC721 List, Unlist and Buy</li>
          <li>[Feature] ERC1155 List, Unlist and Buy.</li>
        </ul>
        <h3>🛠️ Fixed</h3>
        <ul>
          <li>[Feature] User NFT fetching bug.</li>
        </ul>
      </p>
    </details>
    <details>
      <summary>0.8.14</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] ERC1155 Mint and Transfer.</li>
        </ul>
        <h3>🛠️ Fixed</h3>
        <ul>
          <li>[Feature] Mint and Transfer on Mainnet had tokenId generating bug.</li>
        </ul>
      </p>
    </details>
    <details>
      <summary>0.7.32</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] Better in-built Docs support. Moved to TypeScript.</li>
          <li>[Feature] Polygon Mainnet Support.</li>
          <li>[Feature] Mint NFT.</li>
          <li>[Feature] Project based NFT Explore.</li>
        </ul>
        <h3>🗑️ Removed</h3>
        <ul>
          <li>[Feature] Custodial NFT Minting.</li>
        </ul>
      </p>
    </details>
    <details>
      <summary>0.4.25</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] Allocate pre-minted NFTs to users by email or twitter handle.</li>
          <li>[Feature] Custodial NFT Minting.</li>
          <li>[Feature] Token Gating Access Check.</li>
          <li>[Feature] DripVerse uptime check.</li>
        </ul>
      </p>
    </details>
  </TabItem>

  <TabItem value="platform" label="Platform">
    <details>
      <summary>0.8.0</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] Sepolia Testnet Support.</li>
          <li>[Feature] Omni Testnet Support.</li>
        </ul>
      </p>
      <p>
        <h3>🛠️ Fixed</h3>
        <ul>
          <li>Network access and icon fix.</li>
        </ul>
      </p>
      <p>
        <h3>🗑️ Removed</h3>
        <ul>
          <li>Open to all wallet types. Waitlist is now removed.</li>
        </ul>
      </p>
    </details>
    <details>
      <summary>0.7.0</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] ERC1155 Support.</li>
          <li>Google Login using Arcana</li>
          <li>Utility Page</li>
          <li>Enhanced Project Page</li>
          <li>Utility Explore Page</li>
          <li>Project Explore Page</li>
          <li>Activities Section on NFT</li>
        </ul>
      </p>
      <p>
        <h3>🛠️ Fixed</h3>
        <ul>
          <li>Mainnet mint and transfer started creating issues after enabling multiple networks across testnet and mainnet.</li>
        </ul>
      </p>
      <p>
        <h3>⑃ Changed</h3>
        <ul>
          <li>Now, DripVerse Platform uses DripVerse SDK as well.</li>
        </ul>
      </p>
    </details>
    <details>
      <summary>0.6.0</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] NFT Pass Utility Added.</li>
        </ul>
      </p>
      <p>
        <h3>🛠️ Fixed</h3>
        <ul>
          <li>Mobile Metamask Login now working.</li>
        </ul>
      </p>
      <p>
        <h3>⑃ Changed</h3>
        <ul>
          <li>Now, both Testnet and Mainnet Networks will be accessible on DripVerse Platform.</li>
        </ul>
      </p>
    </details>
    <details>
      <summary>0.5.1</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] Polygon Mumbai Testnet and Mainnet Support.</li>
          <li>[Feature] Create DripVerse Protocol Account.</li>
          <li>[Feature] Metamask Browser Wallet Support.</li>
          <li>[Feature] Unstoppable Domains Support.</li>
          <li>[Feature] NFT Mint.</li>
          <li>[Feature] NFT Transfer.</li>
          <li>[Feature] NFT Add Utility.</li>
          <li>[Feature] NFT Configure Project Key.</li>
          <li>[Feature] Verify your Twitter Account.</li>
          <li>[Feature] Claim NFT minted allocated to your account via address or twitter handle.</li>
        </ul>
      </p>
    </details>
  </TabItem>

  <TabItem value="cli" label="CLI">
    <details>
      <summary>0.2.4</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] Deploy Static single and multi-page website to IPFS.</li>
        </ul>
      </p>
    </details>
    <details>
      <summary>0.2.1</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] Upload single asset to IPFS using Spheron Network.</li>
        </ul>
      </p>
      <p>
        <h3>⑃ Changed</h3>
        <ul>
          <li>Error Handling on missing config.</li>
        </ul>
      </p>
    </details>
    <details>
      <summary>0.1.2</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] NFT Mint for single asset.</li>
          <li>[Feature] NFT Mint for entire directory.</li>
          <li>[Feature] Upload single asset to IPFS.</li>
          <li>[Feature] Upload all assets in a directory to IPFS.</li>
          <li>[Feature] Supports Polygon Testnet and Mainnet via Alchemy.</li>
        </ul>
      </p>
    </details>
  </TabItem>

  <TabItem value="wallet" label="Wallet">
    <details>
      <summary>0.0.5</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] Polygon Mainnet Support.</li>
        </ul>
      </p>
    </details>
    <details>
      <summary>0.0.4</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] Enabled for production.</li>
        </ul>
      </p>
    </details>
    <details>
      <summary>0.0.3</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] New Logo.</li>
          <li>[Feature] Login to DApps supported.</li>
        </ul>
      </p>
    </details>
    <details>
      <summary>0.0.2</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] Import account with seed and private key.</li>
          <li>[Feature] Time lock customisable.</li>
        </ul>
      </p>
      <p>
        <h3>⑃ Changed</h3>
        <ul>
          <li>Possible fix for disappearing accounts bug.</li>
        </ul>
      </p>
    </details>
    <details>
      <summary>0.0.1</summary>
      <p>
        <h3>🌟 Added</h3>
        <ul>
          <li>[Feature] Polygon Testnet Support.</li>
          <li>[Feature] Supported only on Alpha.</li>
          <li>[Feature] Create user accounts with seed generation.</li>
          <li>[Feature] Live Price Update for Polygon Testnet via coinmarketcap api.</li>
        </ul>
      </p>
    </details>
  </TabItem>

</Tabs>
