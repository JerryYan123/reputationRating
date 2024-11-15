"use client";

import React from "react";
import StarRating from "@/components/StarRating";
import { faker } from "@faker-js/faker";

interface Comment {
    date: string;
    rating: number;
    weight: number;
    review_url: string;
}

const CommentItem: React.FC<Comment> = ({ date, rating, weight, review_url }) => (
    <div className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
        <div className="flex justify-between items-center mb-1">
            <div>
                <span className="font-semibold text-sm text-black capitalize">
                    {faker.word.adjective()} {faker.person.fullName()}
                </span>
                <span className="text-gray-600 ml-2 text-xs">{date}</span>
            </div>
            <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">Weight: {weight}</div>
        </div>
        <StarRating rating={rating} size="small" />
        <p className="text-gray-800 text-xs mt-1 line-clamp-3">{review_url}</p>
        <div className="flex justify-end space-x-4 mt-1">
            <button className="text-gray-600 text-xs flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                </svg>
                20
            </button>
            <button className="text-gray-600 text-xs flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                </svg>
                20
            </button>
        </div>
    </div>
);

// Add hardcoded comments data
const COMMENTS: Comment[] = [
    {
        date: "March 15, 2024",
        rating: 5,
        weight: 8.5,
        review_url: "This is an excellent project with great potential. The team has shown remarkable dedication and the implementation is flawless."
    },
    {
        date: "March 14, 2024",
        rating: 4,
        weight: 7.8,
        review_url: "Very good project. Well prepared and good user experience. This is one of my favorite projects on Solana."
    },
    {
        date: "March 13, 2024",
        rating: 5,
        weight: 9.2,
        review_url: "Outstanding initiative! The technical architecture is solid and the documentation is comprehensive."
    }
];

const CommentList: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-xl font-bold mb-4 text-black">All Comments</h2>
            <div className="max-h-[600px] overflow-y-auto">
                {COMMENTS.map((comment, index) => (
                    <CommentItem key={index} {...comment} />
                ))}
            </div>
        </div>
    );
};

export default CommentList;
