'use client';

import React from 'react';

interface StarRatingProps {
  rating: number;
  editable?: boolean;
  onChange?: (rating: number) => void;
  size?: 'small' | 'medium' | 'large';
}

const StarRating: React.FC<StarRatingProps> = ({ rating, editable = false, onChange, size = 'medium' }) => {
  const handleRating = (value: number) => {
    if (editable && onChange) {
      onChange(value);
    }
  };

  const starSize = {
    small: 'text-sm',
    medium: 'text-lg',
    large: 'text-2xl'
  }[size];

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          className={`${starSize} ${value <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          onClick={() => handleRating(value)}
          disabled={!editable}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default StarRating;