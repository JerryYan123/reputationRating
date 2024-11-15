import React from 'react';

const CategoryTabs = () => {
  const categories = ['All', 'Blockchain', 'NFTs', 'DeFi', 'DAOs', 'Metaverse', 'Gaming'];

  return (
    <div className="flex space-x-3 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-1.5 rounded-full text-sm ${
            category === 'All' ? 'bg-black text-white' : 'bg-gray-100 text-black'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;