"use client";

import React from "react";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import { PROJECTS } from "@/constants/projects";
import { getUserData } from "@/components/helper_function/get_data";
import { USERS } from "@/constants/users";
import { Comment } from "@/constants/comments";

const CommentItem: React.FC<Comment> = ({ projectId, date, rating, weight, review }) => {
    const project = PROJECTS.find(p => p.id === projectId);

    return (
        <div className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
            <div className="flex justify-between items-center mb-1">
                <div className="flex flex-col">
                    <Link 
                        href={`/project/${projectId}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-lg"
                    >
                        {project?.name}
                    </Link>
                    <span className="text-gray-500 text-base">{project?.rank}</span>
                    <span className="text-gray-600 text-base mt-1">{date}</span>
                </div>
                <div className="bg-blue-500 text-white px-3 py-1.5 rounded-full text-sm">
                    Weight: {weight}
                </div>
            </div>
            <StarRating rating={rating} size="small" />
            <p className="text-gray-800 text-base mt-2 line-clamp-3">{review}</p>
            <div className="flex justify-end space-x-4 mt-2">
                <button className="text-gray-600 text-base flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                    </svg>
                    {Math.floor(Math.random() * 100)}
                </button>
                <button className="text-gray-600 text-base flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    const [userComments, setUserComments] = React.useState<Comment[]>([]);

    React.useEffect(() => {
        const fetchUserData = async () => {
            const user = USERS.find(u => u.id === userId);
            if (!user) {
                console.error('User not found');
                return;
            }
            const userData = await getUserData(user.address);
            
            // Transform the userData into Comment array
            const comments = userData.map(item => ({
                id: item.attestation.id,
                projectId: item.parsedData.Contract,
                date: new Date(Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)).toLocaleDateString(),
                rating: Number(item.parsedData.Score),
                weight: Math.floor(Math.random() * 4) + 7, // Random number between 7-10
                review: item.parsedData.Comment
            }));
            
            setUserComments(comments);
        };

        fetchUserData();
    }, [userId]);

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