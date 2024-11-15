"use client";

import React from "react";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import { USER_COMMENTS, Comment } from "@/constants/comments";
import { PROJECTS } from "@/constants/projects";

const CommentItem: React.FC<Comment> = ({ projectId, date, rating, weight, review }) => {
    const project = PROJECTS.find(p => p.id === projectId);

    return (
        <div className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
            <div className="flex justify-between items-center mb-1">
                <div className="flex flex-col">
                    <Link 
                        href={`/project/${projectId}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                        {project?.name}
                    </Link>
                    <span className="text-gray-500 text-xs">{project?.rank}</span>
                    <span className="text-gray-600 text-xs mt-1">{date}</span>
                </div>
                <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                    Weight: {weight}
                </div>
            </div>
            <StarRating rating={rating} size="small" />
            <p className="text-gray-800 text-xs mt-1 line-clamp-3">{review}</p>
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
                    {Math.floor(Math.random() * 100)}
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
                    {Math.floor(Math.random() * 50)}
                </button>
            </div>
        </div>
    );
};

interface CommentHistoryProps {
    userId: number;
}

const CommentHistory: React.FC<CommentHistoryProps> = ({ userId }) => {
    const userComments = USER_COMMENTS.filter(comment => comment.userId === userId);

    if (userComments.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <p className="text-gray-500 text-center">No comments yet</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="max-h-[600px] overflow-y-auto">
                {userComments.map((comment) => (
                    <CommentItem key={comment.id} {...comment} />
                ))}
            </div>
        </div>
    );
};

export default CommentHistory;