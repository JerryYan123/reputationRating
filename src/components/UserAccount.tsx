"use client";

import React from "react";
import StarRating from "@/components/StarRating";

const UserAccount: React.FC = () => {
    const [rating, setRating] = React.useState(0);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
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
                ></textarea>
            </div>
            <button
                className="bg-black text-white w-full py-2 rounded-full mt-4 text-sm font-medium hover:bg-gray-800 transition-colors"
            >
                Submit Review
            </button>
        </div>
    );
};

export default UserAccount;
