import React from "react";
import "/css/components/roadmap.css";

const releases = [
  {
    startDate: "April 2022",
    title: "Concept",
    version: "0.0.1",
    updates: {
      "Smart NFT Litepaper": {
        description:
          "Smart NFT Litepaper describes the first step towards DripVerse Protocol.",
        link: "",
      },
    },
    status: {
      past: "gray",
    },
  },
  {
    startDate: "August 2022",
    title: "Ideation",
    version: "0.0.1",
    updates: {
      Vision: {
        description:
          "A complete vision towards Cyberspace and open Metaverse OS is formed.",
        link: "",
      },
    },
    status: {
      past: "gray",
    },
  },
  {
    startDate: "December 2022",
    title: "Pre-Alpha",
    version: "0.4.16",
    updates: {
      "DripVerse Platform": {
        description:
          "The first testnet release of DripVerse Platform marks the beginning of public testing.",
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
        blog: "",
        tweet: "",
      },
      "DripVerse SDK": {
        description:
          "The first stable testnet release of DripVerse SDK on npm.",
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
        blog: "",
        link: "",
      },
      "Tweet NFTs": {
        description:
          "A twitter bot is released to mint NFT of any tweet that someone wants. Simply mention '@DripThisTweet' and the bot would mint NFT and reply to your tweet with the NFT link. You'd have to then claim the NFT from DripVerse Platform. It'll be reserved to the twitter handle via which the NFT minting request came. So, you'd also need to verify if you are the owner of the Twitter Account.",
        features: {
          Networks: {
            "Polygon Testnet": "",
          },
          NFT: ["Custodial Mint"],
        },
        blog: "",
        tweet: "",
        link: "",
      },
    },
    status: {
      active: "green",
    },
  },
  {
    startDate: "January 2023",
    title: "Pre-Aplha Mainnet",
    version: "0.5.0",
    updates: {
      "Mainnet Pre-Alpha Release: DripVerse Platform": {
        description: "",
        link: "",
      },
      "BUIDL Dashboard": {
        description:
          "A consolidated dashboard to view all functionalities in one place. As we add more features to DripVerse, this will become the cornerstone to how you can integrate, integrate and progress with DripVerse. More features coming soon...",
        link: "",
      },
      "NFT Allowlist": {
        description:
          "Allow an exclusive sub-part of your community to access special features using NFTs.",
        link: "",
      },
      "NFT Drops": {
        description: "Drop NFTs to your loyal community members.",
        link: "",
      },
      "Unstoppable Domains Auth Integrated": {
        description:
          "DripVerse Platform can now be accessed using easy to use domain names provided by Unstoppable Domains. If you have Unstoppable Domains account, you can login using that easily.",
        link: "",
      },
      "DripVerse CLI Tool": {
        description:
          "A Command Line Tool to run make it easy for terminal friendly interfaces. Access your files and nfts using drip command.",
        link: "",
      },
      "NFT Bulk Mint": {
        description:
          "Bulk Mint NFTs securely using our command line tool. Mint single file or entire directory with one command.",
        link: "",
      },
    },
    status: {
      active: "green",
    },
  },
  {
    startDate: "Ongoing",
    title: "Aplha",
    version: "1.0.0",
    updates: {
      "Listing on Rarible": {
        description: "List your NFT on Rarible with one click.",
        link: "",
      },
    },
    status: {
      ongoing: "blue",
    },
  },
];

const UpdateItem = ({ title, description }) => {
  return (
    <p>
      <strong>{title}</strong>
      <br />
      {description}
    </p>
  );
};

const Milestone = ({ milestone }) => {
  // console.log("milestone:", milestone);
  return (
    <li className="timeline-event">
      <label className="timeline-event-icon"></label>
      <div className="timeline-event-copy">
        <p className="timeline-event-thumbnail">{milestone.startDate}</p>
        <h3>{milestone.title}</h3>
        <h4>{milestone.version}</h4>
        {Object.keys(milestone.updates).map((title) => (
          <UpdateItem
            title={title}
            description={milestone.updates[title].description}
          />
        ))}
      </div>
    </li>
  );
};

const Roadmap = ({ releases }) => {
  return (
    <ul className="timeline">
      {Object.keys(releases).map((key) => (
        <Milestone milestone={releases[key]} />
      ))}
    </ul>
  );
};

// Get Version History and display in table.
export function RoadmapV1() {
  return (
    <>
      <Roadmap releases={releases} />
    </>
  );
}
