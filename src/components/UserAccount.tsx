"use client";

import React from "react";
import StarRating from "@/components/StarRating";
import { getInformation } from "@/components/helper_function/search_validity";
import { createNotaryAttestation } from "@/components/helper_function/upload_data";
import { PROJECTS } from '@/constants/projects';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'; 

interface UserAccountProps {
    projectId: number;
}

const UserAccount: React.FC<UserAccountProps> = ({ projectId }) => {
    const [rating, setRating] = React.useState(0);
    const [comment, setComment] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const { primaryWallet } = useDynamicContext();

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        const SCROLLSCAN_API_KEY = "API_TOKEN";
        const wallet_address = primaryWallet?.address || "";
        console.log(wallet_address);
        const project = PROJECTS.find(p => p.id === projectId);
        const project_address = project?.address || "";
        console.log(project_address)
        
        const url = `https://api-sepolia.scrollscan.com/api?module=account&action=txlist&address=${wallet_address}&startblock=90000&endblock=9999999&page=0&offset=10&sort=asc&apikey=${SCROLLSCAN_API_KEY}`
        try {
            const result = await getInformation(url, project_address);
            console.log(result)
            if (result.interactionFound) {
                // Create attestation
                await createNotaryAttestation(
                    project_address, // contract address
                    wallet_address, // user address
                    result.txHash,
                    rating,
                    comment
                );
                console.log("Review submitted successfully");
                // Clear form
                setRating(0);
                setComment("");
            } else {
                alert("No valid interaction found. You must have a transaction history to submit a review.");
            }
        } catch (error) {
            console.error("Error submitting review:", error);
            alert("Error submitting review");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-black">Write a Review</h2>
            <div className="mb-4">
                <p className="mb-2 text-sm text-gray-800">Select your rating</p>
                <StarRating 
                    rating={rating} 
                    editable={true} 
                    onChange={handleRatingChange}
                />
            </div>
            <div>
                <p className="mb-2 text-sm text-gray-800">Your Comment</p>
                <textarea
                    className="w-full border rounded-lg p-2 text-sm text-gray-800 bg-white"
                    rows={4}
                    placeholder="Share your thoughts about this project..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
            </div>
            <button
                className="bg-black text-white w-full py-2 rounded-full mt-4 text-sm font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400"
                onClick={handleSubmit}
                disabled={isSubmitting}
            >
                {isSubmitting ? "Verifying..." : "Submit Review"}
            </button>
        </div>
    );
};

export default UserAccount;
