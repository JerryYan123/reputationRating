export interface Project {
    id: number;
    name: string;
    address: string;
    change: number;
    score: number;
    reviews: number;
    rank: string;
    description: string;
    image: string;
}

export const PROJECTS: Project[] = [
    { 
        id: 1, 
        name: 'Scroll', 
        address: "0x7eb88DAaA25f3DBbc9815A036EA13b00E11fE122",
        change: 2, 
        score: 9.9, 
        reviews: 50,
        rank: "#1 in Layer 2",
        description: "Scroll is building a ZK rollup solution to scale Ethereum. Powered by our zkEVM, using Scroll looks and feels just like using Ethereum for users and devs!",
        image: "/images/projects/scroll.png"
    },
    { 
        id: 2, 
        name: 'Sign Protocol', 
        address: "0x31A239f3e39c5D8BA6B201bA81ed584492Ae960F",
        change: 1, 
        score: 9.8, 
        reviews: 48,
        rank: "#1 in Infrastructure",
        description: "Sign is building a global verification platform to make all digital information, such as identity, ownership, and certificates, verifiable onchain. Sign Protocol offers a suite of tools, infrastructure, and standards to create a future where verifiable attestations drive all claims and assertions on the web and the world around us. We are excited to see Sign Protocol usher in a future where we can trust but, more importantly, validate all data using attestations to enable improved governance protocols, point systems, reward distribution systems, trust and referral networks, and much more.",
        image: "/images/projects/sign_protocol.png"
    },
    { 
        id: 3, 
        name: 'Dynamic', 
        address: "0xc0faBF14f8ad908b2dCE4C8aA2e7c1a6bD069957",
        change: -2, 
        score: 9.7, 
        reviews: 45,
        rank: "#1 in Authentication",
        description: "Dynamic allows developers to craft magical onchain sign up experiences. They offer a suite of tools for effortless log in, wallet creation and user management. Dynamic was designed for users, and built for developers.",
        image: "/images/projects/dynamic.png"
    },
    { 
        id: 4, 
        name: 'Mina Protocol', 
        address: "0x33d91116e0370970444B0281AB117e161fEbFcdD",
        change: 2, 
        score: 9.6, 
        reviews: 41,
        rank: "#1 in Layer 1",
        description: "Mina is a lightweight ZK blockchain for proving anything privately and securely. Its blockchain uses recursive zk-SNARKs to design an entire blockchain that can be verified in just 22kb, the size of a couple of tweets. Mina will transform the way information is verified online, by empowering individuals to prove their sensitive information safely, where anyone can easily verify it with its lightweight ‘proof of everything.’",
        image: "/images/projects/mina_protocol.png"
    },
    { 
        id: 5, 
        name: 'Bitkub', 
        address: "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4",
        change: -1, 
        score: 9.5, 
        reviews: 39,
        rank: "#1 in Exchange",
        description: "Bitkub Chain, a fully EVM-compatible Layer 1 blockchain, is the leading blockchain infrastructure in Southeast Asia. It enables users to interact with decentralized applications through affordable transaction fees, high-speed confirmations, and transparent operations accessible to everyone.",
        image: "/images/projects/bitkub.png"
    },
    { 
        id: 6, 
        name: 'Oasis Protocol', 
        address: "0xf55bec9cafdbe8730f096aa55dad6d22d44099df",
        change: -1, 
        score: 9.4, 
        reviews: 36,
        rank: "#1 in Privacy",
        description: "Oasis is home to Sapphire, the world's first confidential EVM network, the Oasis Privacy Layer (OPL), a cross-chain privacy solution that can be used by any EVM dApp, and ROFL, a framework that adds support for off-chain components to runtimes like Oasis Sapphire. Oasis is a layer-one blockchain built to support confidential compute for applications at scale, with a unique layered architecture that presents the optimal building and execution environment for DeFi, AI, RWAs, Gaming, NFTs, DAO governance, and more.",
        image: "/images/projects/oasis_protocol.png"
    }
];