import React from "react";
import "/css/components/roadmap.css";
import Tilt from "react-vanilla-tilt";

// Dec - Open Source DripVerse SDKs.

const releases = [
  {
    startDate: "December 2024",
    title: "Santa",
    version: "2.0",
    updates: {
      "DripVerse Platform": {
        description: [
          "🎉 Advanced Metaverse"
        ],
      },
      "DripVerse SDK": {
        description: [
          "👀 Open Source",
        ],
        link: "#",
      },
    },
    status: "upcoming",
  },
  {
    startDate: "November 2024",
    title: "Coffee",
    version: "1.9",
    updates: {
      "DripVerse SDK": {
        description: [
          "🎉 Social SDK v1",
          "Storage SDK v2",
          "Metaverse SDK v2"
        ],
        link: "#",
      },
    },
    status: "upcoming",
  },
  {
    startDate: "October 2024",
    title: "Ten",
    version: "1.8",
    updates: {
      "DripVerse Platform": {
        description: [
          "🎉 Social Features",
          "⬡ Open Social Graph"
        ],
      },
    },
    status: "upcoming",
  },
  {
    startDate: "September 2024",
    title: "Snow",
    version: "1.7",
    updates: {
      "DripVerse Platform": {
        description: [
          "🎉 NFT Remixes",
          "🎉 Social Features"
        ],
      },
    },
    status: "upcoming",
  },
  {
    startDate: "August 2024",
    title: "Cyberpunk",
    version: "1.6",
    updates: {
      "DripVerse Platform": {
        description: [
          "🎉 Cyberpunk Avatars",
          "🎉 AI Avatar and design",
          "🎉 Nested NFTs"
        ],
      },
      "DripVerse SDK": {
        description: [
          "🎉 Nested NFTs"
        ],
        link: "#",
      },
    },
    status: "upcoming",
  },
  {
    startDate: "July 2024",
    title: "Flash",
    version: "1.5",
    updates: {
      "DripVerse Platform": {
        description: [
          "🎉 Metaverse Support"
        ],
      },
      "DripVerse SDK": {
        description: [
          "🎉 Wallet Support v2",
          "🎉 Metaverse SDK v1"
        ],
        link: "#",
      },
    },
    status: "upcoming",
  },
  {
    startDate: "June 2024",
    title: "Night",
    version: "1.4",
    updates: {
      "DripVerse Platform": {
        description: [
          "🎨 DAO Support",
          "🚀 DAO Utilities",
          "🎉 Content Utilities"
        ],
      },
    },
    status: "upcoming",
  },
  {
    startDate: "May 2024",
    title: "Bunker",
    version: "1.3",
    updates: {
      "DripVerse Platform": {
        description: [
          "🎨 Consumer Features",
          "🚀 Creator Vibe"
        ],
      },
      "DripVerse SDK": {
        description: ["🎉 Storage SDK v1"],
        link: "#",
      },
    },
    status: "upcoming",
  },
  {
    startDate: "April 2024",
    title: "Kyubi",
    version: "1.2",
    updates: {
      "DripVerse Platform": {
        description: [
          "♻️ Interoperable Assets across EVM L2s",
          "✨ Cosmos Compatible"
        ],
      },
      "DripVerse SDK": {
        description: ["🎉 Cosmos Integration"],
        link: "#",
      },
    },
    status: "upcoming",
  },
  {
    startDate: "March 2024",
    title: "Cid",
    version: "1.1",
    updates: {
      "DripVerse Platform": {
        description: [
          "🎨 Mobile UX Redesigned",
          "📱 Creator Amigo",
          "📈 Utility Marketplace",
          "🎬 Dynamic Utilities",
          "🥷 Account Abstraction"
        ],
      },
    },
    status: "upcoming",
  },
  {
    startDate: "February 2024",
    title: "Sukuna",
    version: "1.0",
    updates: {
      "DripVerse Platform": {
        description: [
          "🎨 Utility UX Redesigned",
          "💰 Rental NFTs"
        ],
      },
      "DripVerse SDK": {
        description: [
          "🎉 Release v1",
          "🚀 Support Collection"
        ],
        link: "#",
      },
    },
    status: "ongoing",
  },
  {
    startDate: "January 2024",
    title: "Bucky",
    version: "0.18",
    updates: {
      "DripVerse Platform": {
        description: [
          "🎉 Calypso Skale Mainnet",
          "🎨 Redesigned UI"
        ],
      },
      // "DripVerse Wallet": {
      //   description: ["🎉 Polygon Mainnet", "🐞 Import Collectible"],
      //   link: "#",
      // },
    },
    status: "active",
  },
  {
    startDate: "December 2023",
    title: "Bucky",
    version: "0.17",
    updates: {
      "DripVerse Platform": {
        description: [
          "🎉 Celo Testnet",
          "🎉 OKX Wallet",
          "🎉 Smart Accounts on Polygon",
          "🎉 Skale Paymaster"
        ],
      },
    },
    status: "active",
  },
  {
    startDate: "November 2023",
    title: "Solo",
    version: "0.16",
    updates: {
      "DripVerse Platform": {
        description: [
          "🔃 Dynamic NFT on Trigger",
          "🎉 Base Testnet",
        ],
      },
      "DUCK Chat": {
        description: [
          "CLI Tool",
        ],
      },
    },
    status: "active",
  },
  {
    startDate: "October 2023",
    title: "Durga",
    version: "0.15",
    updates: {
      "DripVerse Platform": {
        description: [
          "🔐 Wallet Connect",
          "🗃️ W3up Client",
          "📈 Listing",
          "📈 Trade",
          "🎉 Calypso Skale Testnet"
        ],
      }
    },
    status: "active",
  },
  {
    startDate: "September 2023",
    title: "Luffy",
    version: "0.14",
    updates: {
      "DripVerse Platform": {
        description: [
          "🎉 Zetachain Testnet",
          "🎉 Skale Testnet",
          "🎉 Moonbeam Alphanet Testnet",
          "🎉 Linea Testnet",
          "🎉 Mantle Testnet",
          "🎉 Arbitrum Testnet",
          "🎉 Scroll Testnet",
          "🎉 Omni Testnet",
          "✅ Campaign Project Type",
          "🗓️ Calendly Utility",
          "✨ Set any DripVerse NFT as PFP"
        ],
        link: "#",
      },
      "DripVerse SDK": {
        description: [
          "🎉 Zetachain Testnet",
          "🎉 Skale Testnet",
          "🎉 Moonbeam Alphanet Testnet",
          "🎉 Linea Testnet",
          "🎉 Mantle Testnet",
          "🎉 Arbitrum Testnet",
          "🎉 Scroll Testnet",
          "🎉 Omni Testnet",
        ],
        link: "#",
      },
    },
    status: "active",
  },
  {
    startDate: "July 2023",
    title: "Gojo",
    version: "0.12",
    updates: {
      "DripVerse Platform": {
        description: [
          "🎉 Sepolia Testnet Support",
          "🎉 Omni Testnet 1 Support",
          "🎉 Nautilus Testnet Support",
          "Removed Waitlist",
        ],
        link: "#",
      },
      "DripVerse SDK": {
        description: [
          "Web3Storage Module",
          "🎉 Sepolia Testnet Support",
          "🎉 Omni Testnet 1 Support",
          "🎉 Nautilus Testnet Support",
          "🗓️ Calendly Utility Add and Access",
          "✨ Dynamic NFTs",
        ],
        link: "#",
      },
    },
    status: "past",
  },
  {
    startDate: "June 2023",
    title: "Phoenix",
    version: "0.11",
    updates: {
      "DripVerse Platform": {
        description: ["Landing Page Redesign", "Use Cases re-worked"],
        link: "#",
      },
      "DripVerse SDK": {
        description: [
          "Trade ERC721 and ERC1155 on DripVerse",
          "Mint for a different user",
          "Serialised Batch Minting",
          "Better Error Reporting",
        ],
        link: "#",
      },
    },
    status: "past",
  },
  {
    startDate: "May 2023",
    title: "Naruto",
    version: "0.10",
    updates: {
      "DripVerse Platform": {
        description: [
          "Google Login",
          "ERC1155 Support",
          "Utility Page",
          "Enhanced Project Page",
          "Utility Explore Page",
          "Project Explore Page",
          "Activities Section on NFT",
        ],
        link: "#",
      },
      "DripVerse SDK": {
        description: ["ERC1155"],
        blog: "#",
        link: "#",
      },
      "DripVerse CLI Tool": {
        description: [
          "Deploy Static Single and Multi-page Website to IPFS from CLI",
        ],
        link: "#",
      },
    },
    status: "past",
  },
  {
    startDate: "April 2023",
    title: "Purple",
    version: "0.9",
    updates: {
      "DripVerse Platform": {
        description: [
          "NFT Pass 🎟️",
          "📱 Mobile Login with Metamask",
          "Mainnet and Testnet both availability 🤝",
        ],
        link: "#",
      },
      "DripVerse SDK": {
        description: [
          "Transfer ERC721 NFT",
          "Wallet Support",
          "ERC1155 Bulk Minting",
          "Network ID Support",
          "Auction Support 🔨",
        ],
        blog: "#",
        link: "#",
      },
      "Drip Wallet": {
        description: [
          "Create User Account",
          "Import Account",
          "Connect Wallet to DApps",
          "Access NFT",
          "Access NFT Utilities",
          "Group NFTs by Contract Name",
          "Polygon Mumbai Network Availability",
        ],
        link: "https://twitter.com/0xDripVerse/status/1648560862519521280",
      },
    },
    status: "past",
  },
  {
    startDate: "March 2023",
    title: "Clover",
    version: "0.8",
    updates: {
      "DripVerse Platform": {
        description: [
          "Arcana Support",
          "Improved Utility Page",
          "Token Gated Discord Gatekeeper Utility",
        ],
        link: "https://blog.dripverse.org/dripverse-protocol-partners-with-arcana/",
      },
      "DripVerse SDK": {
        description: ["Migrated to TypeScript"],
        blog: "#",
        link: "https://twitter.com/0xDripVerse/status/1636063025554919425",
      },
      "DripVerse CLI Tool": {
        description: [
          "A Command Line Tool to run make it easy for terminal friendly interfaces. Access your files and nfts using drip command.",
          "Bulk Mint NFTs securely using our command line tool. Mint single file or entire directory with one command.",
          "Upload files to IPFS easily. Uses NFT.Storage",
          "Spheron Network Support",
        ],
        link: "#",
      },
    },
    status: "past",
  },
  {
    startDate: "February 2023",
    title: "Alpha",
    version: "0.7",
    updates: {
      "DripVerse Platform": {
        description: ["Project Page"],
        link: "#",
      },
      "DripVerse SDK": {
        description: ["Added Mint function."],
        blog: "#",
        link: "#",
      },
    },
    status: "past",
  },
  {
    startDate: "January 2023",
    title: "Pre-Alpha Mainnet",
    version: "0.5",
    updates: {
      "DripVerse Platform": {
        description: [
          "Mainnet Pre-Alpha Release on Polygon.",
          "BUIDL Dashboard brings a consolidated dashboard to view all functionalities in one place. As we add more features to DripVerse, this will become the cornerstone to how you can integrate, integrate and progress with DripVerse.",
          "Drop NFTs to your loyal community members using Allowlist feature for an exclusive sub-part of your community to access special features using NFTs.",
          "Unstoppable Domains Auth Integration to DripVerse Platform can now be accessed using easy to use domain names provided by Unstoppable Domains. If you have Unstoppable Domains account, you can login using that easily.",
        ],
        link: "#",
      },
    },
    status: "past",
  },
  {
    startDate: "December 2022",
    title: "Pre-Alpha",
    version: "0.4",
    updates: {
      "DripVerse Platform": {
        description: [
          "The first testnet release of DripVerse Platform marks the beginning of public testing.",
        ],
        features: {
          Login: {
            Metamask: "",
          },
          Networks: {
            "Polygon Testnet": "",
          },
          NFT: ["Mint", "Transfer", "Claim"],
          Utility: {
            "Token Gating": "docs link",
          },
        },
        blog: "https://blog.dripverse.org/pre-alpha-release/",
        link: "https://twitter.com/0xDripVerse/status/1602897679406825472",
      },
      "DripVerse SDK": {
        description: [
          "The first stable testnet release of DripVerse SDK on npm.",
        ],
        docs: "",
        features: {
          Networks: {
            "Polygon Testnet": "",
          },
          NFT: ["Custodial Mint"],
          Utility: {
            "Token Gating": "docs link",
          },
        },
        blog: "#",
        link: "#",
      },
      "Tweet NFTs": {
        description: [
          "A twitter bot is released to mint NFT of any tweet that someone wants. Simply mention '@DripThisTweet' and the bot would mint NFT and reply to your tweet with the NFT link. You'd have to then claim the NFT from DripVerse Platform. It'll be reserved to the twitter handle via which the NFT minting request came. So, you'd also need to verify if you are the owner of the Twitter Account.",
        ],
        features: {
          Networks: {
            "Polygon Testnet": "",
          },
          NFT: ["Custodial Mint"],
        },
        blog: "",
        link: "https://twitter.com/0xDripVerse/status/1603695436522573824",
      },
    },
    status: "past",
  },
  {
    startDate: "August 2022",
    title: "Ideation",
    version: "0.1",
    updates: {
      Vision: {
        description: [
          "A complete vision towards Cyberspace and open Metaverse OS is formed.",
        ],
        link: "/guide/vision/turn",
      },
    },
    status: "past",
  },
  {
    startDate: "April 2022",
    title: "Concept",
    version: "0.0.1",
    updates: {
      "Smart NFT Litepaper": {
        description: [
          "Smart NFT Litepaper describes the first step towards DripVerse Protocol.",
        ],
        link: "/papers/litepaper",
      },
    },
    status: "past",
  },
];

function updateTypes(title) {
  const updateTypeMap = {
    "DripVerse Platform": "🚀",
    "DripVerse SDK": "📦",
    "DripVerse CLI Tool": "💻",
    "Tweet NFTs": "✨",
  };
  if (Object.keys(updateTypeMap).includes(title)) {
    return updateTypeMap[title];
  } else {
    return "📚";
  }
}

const UpdateItem = ({ title, description, link }) => {
  return (
    <Tilt
      options={{ max: 25, speed: 400, glare: false }}
      style={{
        backgroundColor: "none",
      }}
    >
      <div className="card">
        <div className="content">
          <h2>{updateTypes(title)}</h2>
          <h3>{title}</h3>
          {Object.keys(description).map((descriptionItem, di) => (
            <p>{description[descriptionItem]}</p>
          ))}
          {link && link !== "#" && (
            <a href={link} rel="noopener noreferrer" target="_blank">
              Read More
            </a>
          )}
        </div>
      </div>
    </Tilt>
  );
};

async function checkUpdate() {}

const Milestone = ({ milestone }) => {
  const classes = `tab ${milestone.status}`;
  return (
    <div className={classes}>
      <input
        type="radio"
        name="version"
        id={milestone.version}
        defaultChecked={milestone.status === "ongoing" ? true : false}
      />
      <label htmlFor={milestone.version}>
        <h2>🧗‍♂️{milestone.version}</h2>
        <h3>
          {milestone.title} ({milestone.startDate})
        </h3>
      </label>
      <div className="content-container">
        {Object.keys(milestone.updates).map((title, t) => (
          <UpdateItem
            title={title}
            description={milestone.updates[title].description}
            link={milestone.updates[title].link}
            key={t}
          />
        ))}
      </div>
    </div>
  );
};

const Roadmap = ({ releases }) => {
  return (
    <div className="container">
      <h1>Follow our Journey . . .</h1>
      {Object.keys(releases).map((release, r) => (
        <Milestone milestone={releases[release]} key={r} />
      ))}
    </div>
  );
};

// Get Version History and display in table.
export function RoadmapV1() {
  return (
    <div className="roadmap-container">
      <Roadmap key="roadmap" releases={releases} />
    </div>
  );
}
