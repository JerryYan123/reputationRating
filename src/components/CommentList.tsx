"use client";

import React from "react";
import StarRating from "@/components/StarRating";
import { USER_COMMENTS, Comment } from '@/constants/comments';

const CommentItem: React.FC<Comment> = ({ date, rating, weight, review, username }) => {
    // Generate random numbers for likes and comments
    const likes = Math.floor(Math.random() * 50);  // Random number between 0 and 50
    const comments = Math.floor(Math.random() * 30);  // Random number between 0 and 30
    
    return (
        <div className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
            <div className="flex justify-between items-center mb-1">
                <div>
                    <span className="font-semibold text-base text-black">
                        {username}
                    </span>
                    <span className="text-gray-600 ml-2 text-sm">{date}</span>
                </div>
                <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Weight: {weight}</div>
            </div>
            <StarRating rating={rating} size="small" />
            <p className="text-gray-800 text-sm mt-2 mb-2 line-clamp-3">{review}</p>
            <div className="flex justify-end space-x-4 mt-1">
                <button className="text-gray-600 text-sm flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                    </svg>
                    {likes}
                </button>
                <button className="text-gray-600 text-sm flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                    </svg>
                    {comments}
                </button>
            </div>
        </div>
    );
};

const CommentList: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold mb-6 text-black">All Comments</h2>
            <div className="max-h-[600px] overflow-y-auto">
                {USER_COMMENTS.map((comment) => (
                    <CommentItem key={comment.id} {...comment} />
                ))}
            </div>
        </div>
    );
};

export default CommentList;
