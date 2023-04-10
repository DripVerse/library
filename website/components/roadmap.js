import React from "react";
import "/css/components/roadmap.css";
import Tilt from "react-vanilla-tilt";

const releases = [
  {
    startDate: "May 2023",
    title: "Purple",
    version: "0.10.0",
    updates: {
      "DripVerse Platform": {
        description: [
          "ERC1155",
          "Auction",
          "Utility Page",
          "Enhanced Project Page",
          "Collection Support",
        ],
        link: "#",
      },
      "DripVerse SDK": {
        description: ["Lighthouse Support"],
        blog: "#",
        link: "#",
      },
    },
    status: "upcoming",
  },
  {
    startDate: "April 2023",
    title: "Purple",
    version: "0.9.0",
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
          "Wallet Support",
          "ERC1155 Bulk Minting",
          "Network ID Support",
          "Auction Support 🔨",
        ],
        blog: "#",
        link: "#",
      },
    },
    status: "ongoing",
  },
  {
    startDate: "March 2023",
    title: "Clover",
    version: "0.8.0",
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
    status: "active",
  },
  {
    startDate: "February 2023",
    title: "Aplha",
    version: "0.7.4",
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
    status: "active",
  },
  {
    startDate: "January 2023",
    title: "Pre-Aplha Mainnet",
    version: "0.5.0",
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
    version: "0.4.16",
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
    version: "0.1.0",
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
        <h2>v{milestone.version}</h2>
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
