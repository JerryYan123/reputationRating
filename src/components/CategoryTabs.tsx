import React from 'react';

const CategoryTabs = () => {
  const categories = ['All', 'Blockchain', 'NFTs', 'DeFi', 'DAOs', 'Metaverse', 'Gaming'];

  return (
    <div className="flex space-x-4 mb-0">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-6 py-2.5 rounded-full text-base font-medium ${
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