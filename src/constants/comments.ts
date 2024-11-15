import { Project, PROJECTS } from '@/constants/projects';

export interface Comment {
    id: number;
    userId: number;
    projectId: number;
    date: string;
    rating: number;
    weight: number;
    review: string;
}

export const USER_COMMENTS: Comment[] = [
    // User 1 (vitalik.eth) comments
    {
        id: 1,
        userId: 1,
        projectId: 1, // Scroll
        date: "March 15, 2024",
        rating: 5,
        weight: 8.5,
        review: "This is an excellent project with great potential. The zkEVM implementation is flawless."
    },
    {
        id: 2,
        userId: 1,
        projectId: 2, // Sign Protocol
        date: "March 14, 2024",
        rating: 4,
        weight: 7.8,
        review: "Very good infrastructure project. The document verification process is well implemented."
    },
    // User 2 (nick.eth) comments
    {
        id: 3,
        userId: 2,
        projectId: 3, // Dynamic
        date: "March 13, 2024",
        rating: 5,
        weight: 9.2,
        review: "Outstanding authentication solution! The wallet integration is seamless."
    },
    {
        id: 4,
        userId: 2,
        projectId: 4, // Mina Protocol
        date: "March 12, 2024",
        rating: 4,
        weight: 8.1,
        review: "Impressive blockchain protocol. The constant 22kb size is a game-changer."
    },
    // User 3 (ricmoo.eth) comments
    {
        id: 5,
        userId: 3,
        projectId: 5, // Bitkub
        date: "March 11, 2024",
        rating: 3,
        weight: 7.5,
        review: "Good exchange platform but needs some UI improvements. The trading tools are comprehensive."
    },
    // User 4 (brantly.eth) comments
    {
        id: 6,
        userId: 4,
        projectId: 6, // Oasis Protocol
        date: "March 10, 2024",
        rating: 5,
        weight: 8.9,
        review: "Exceptional privacy features. The ParaTime framework is well implemented."
    },
    // Additional cross-comments
    {
        id: 7,
        userId: 1, // vitalik.eth
        projectId: 3, // Dynamic
        date: "March 9, 2024",
        rating: 4,
        weight: 8.3,
        review: "The authentication system is robust. Great focus on security and user experience."
    },
    {
        id: 8,
        userId: 2, // nick.eth
        projectId: 5, // Bitkub
        date: "March 8, 2024",
        rating: 4,
        weight: 7.9,
        review: "Solid exchange with good liquidity. API documentation could be improved."
    },
    {
        id: 9,
        userId: 3, // ricmoo.eth
        projectId: 1, // Scroll
        date: "March 7, 2024",
        rating: 5,
        weight: 8.8,
        review: "The technical implementation is impressive. Great attention to compatibility."
    },
    {
        id: 10,
        userId: 4, // brantly.eth
        projectId: 2, // Sign Protocol
        date: "March 6, 2024",
        rating: 3,
        weight: 7.6,
        review: "Good concept but needs more integration options. Security features are solid."
    },
    {
        id: 11,
        userId: 5, // gavin.eth
        projectId: 6, // Oasis Protocol
        date: "March 5, 2024",
        rating: 4,
        weight: 8.2,
        review: "Strong privacy guarantees. The consensus mechanism is well-designed."
    },
    {
        id: 12,
        userId: 6, // justin.eth
        projectId: 4, // Mina Protocol
        date: "March 4, 2024",
        rating: 5,
        weight: 8.7,
        review: "Revolutionary approach to blockchain scaling. The cryptographic foundations are solid."
    },
    // More cross-comments
    {
        id: 13,
        userId: 1, // vitalik.eth
        projectId: 6, // Oasis Protocol
        date: "March 3, 2024",
        rating: 4,
        weight: 8.4,
        review: "The privacy-preserving computation layer is well architected. Good scalability potential."
    },
    {
        id: 14,
        userId: 2, // nick.eth
        projectId: 1, // Scroll
        date: "March 2, 2024",
        rating: 5,
        weight: 8.6,
        review: "The prover implementation is highly efficient. Great Ethereum compatibility."
    },
    {
        id: 15,
        userId: 3, // ricmoo.eth
        projectId: 4, // Mina Protocol
        date: "March 1, 2024",
        rating: 4,
        weight: 8.0,
        review: "The recursive zero-knowledge proofs are elegantly implemented. Novel approach to scaling."
    },
    {
        id: 16,
        userId: 4, // brantly.eth
        projectId: 5, // Bitkub
        date: "February 29, 2024",
        rating: 4,
        weight: 7.7,
        review: "Decent market depth and trading features. The mobile app needs some work."
    },
    {
        id: 17,
        userId: 5, // gavin.eth
        projectId: 2, // Sign Protocol
        date: "February 28, 2024",
        rating: 5,
        weight: 8.5,
        review: "The document signing workflow is intuitive. Strong cryptographic foundations."
    },
    {
        id: 18,
        userId: 6, // justin.eth
        projectId: 3, // Dynamic
        date: "February 27, 2024",
        rating: 4,
        weight: 8.1,
        review: "Solid web3 authentication solution. The SDK integration is straightforward."
    },
    {
        id: 19,
        userId: 1, // vitalik.eth
        projectId: 4, // Mina Protocol
        date: "February 26, 2024",
        rating: 5,
        weight: 8.8,
        review: "The succinct blockchain design is revolutionary. Excellent theoretical foundation."
    },
    {
        id: 20,
        userId: 2, // nick.eth
        projectId: 6, // Oasis Protocol
        date: "February 25, 2024",
        rating: 4,
        weight: 8.2,
        review: "The confidential smart contracts are well implemented. Good network performance."
    },
    {
        id: 21,
        userId: 3, // ricmoo.eth
        projectId: 2, // Sign Protocol
        date: "February 24, 2024",
        rating: 4,
        weight: 7.9,
        review: "The multi-signature features are robust. Would benefit from more template options."
    },
    {
        id: 22,
        userId: 4, // brantly.eth
        projectId: 1, // Scroll
        date: "February 23, 2024",
        rating: 5,
        weight: 8.7,
        review: "Outstanding L2 solution. The proof generation and verification are highly optimized."
    },
    {
        id: 23,
        userId: 5, // gavin.eth
        projectId: 3, // Dynamic
        date: "February 22, 2024",
        rating: 4,
        weight: 8.3,
        review: "The social authentication features are well thought out. Good security practices."
    },
    {
        id: 24,
        userId: 6, // justin.eth
        projectId: 5, // Bitkub
        date: "February 21, 2024",
        rating: 3,
        weight: 7.4,
        review: "Basic exchange functionality works well. Need more advanced trading features."
    }
];