export interface Project {
    id: number;
    name: string;
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
        change: 2, 
        score: 9.9, 
        reviews: 5021,
        rank: "#1 in Layer 2",
        description: "Scroll is a revolutionary zkEVM-based zkRollup built on Ethereum that enables native EVM compatibility. It provides a scalable and secure solution for blockchain transactions, significantly reducing costs while maintaining the robust security of the Ethereum network.",
        image: "/images/projects/scroll.png"
    },
    { 
        id: 2, 
        name: 'Sign Protocol', 
        change: 1, 
        score: 9.8, 
        reviews: 4832,
        rank: "#1 in Infrastructure",
        description: "Sign Protocol is an innovative blockchain-based platform that revolutionizes digital signatures and document verification. By leveraging blockchain technology, it ensures document authenticity and provides a streamlined verification process for businesses and individuals.",
        image: "/images/projects/sign_protocol.png"
    },
    { 
        id: 3, 
        name: 'Dynamic', 
        change: -2, 
        score: 9.7, 
        reviews: 4567,
        rank: "#1 in Authentication",
        description: "Dynamic delivers cutting-edge Web3 authentication solutions with seamless wallet integration capabilities. The platform offers customizable onboarding flows and enterprise-grade security features, making it the perfect choice for businesses entering the Web3 space.",
        image: "/images/projects/dynamic.png"
    },
    { 
        id: 4, 
        name: 'Mina Protocol', 
        change: 2, 
        score: 9.6, 
        reviews: 4123,
        rank: "#1 in Layer 1",
        description: "Mina Protocol stands out as the world's lightest blockchain protocol, powered by sophisticated zero-knowledge proofs. Its innovative design maintains a constant 22kb size while enabling scalable decentralized applications, setting new standards for blockchain efficiency.",
        image: "/images/projects/mina_protocol.png"
    },
    { 
        id: 5, 
        name: 'Bitkub', 
        change: -1, 
        score: 9.5, 
        reviews: 3988,
        rank: "#1 in Exchange",
        description: "Bitkub is a leading cryptocurrency exchange platform that provides a secure trading environment for crypto enthusiasts. The platform features comprehensive trading pairs support and advanced trading tools, making it a preferred choice for both beginners and experienced traders.",
        image: "/images/projects/bitkub.png"
    },
    { 
        id: 6, 
        name: 'Oasis Protocol', 
        change: -1, 
        score: 9.4, 
        reviews: 3654,
        rank: "#1 in Privacy",
        description: "Oasis Protocol is an innovative privacy-focused layer 1 blockchain that specializes in confidential smart contracts. With its advanced ParaTime parallel execution framework and scalable DeFi infrastructure, it offers unprecedented privacy features while maintaining high performance.",
        image: "/images/projects/oasis_protocol.png"
    }
];