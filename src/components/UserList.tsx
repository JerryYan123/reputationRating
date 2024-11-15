import React from 'react';
import Link from 'next/link';

interface UserListProps {
  title: string;
}

const getRandomGradient = () => {
  const gradients = [
    'from-purple-400 to-pink-600',
    'from-blue-400 to-emerald-400',
    'from-red-400 to-yellow-400',
    'from-indigo-400 to-cyan-400',
    'from-pink-400 to-orange-400',
    'from-green-400 to-blue-400',
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
};

const UserList: React.FC<UserListProps> = ({ title }) => {
  const users = [
    { id: 1, name: 'vitalik.eth', change: 2, totalReviews: 5021, rank: 1 },
    { id: 2, name: 'nick.eth', change: 2, totalReviews: 4832, rank: 2 },
    { id: 3, name: 'ricmoo.eth', change: -1, totalReviews: 4567, rank: 3 },
    { id: 4, name: 'brantly.eth', change: -3, totalReviews: 4123, rank: 4 },
    { id: 5, name: 'virgil.eth', change: 3, totalReviews: 3988, rank: 5 },
    { id: 6, name: 'alisha.eth', change: 2, totalReviews: 3654, rank: 6 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      <h2 className="text-2xl font-bold mb-6 text-black">{title}</h2>
      <table className="w-full">
        <thead>
          <tr className="text-sm text-black">
            <th className="text-left font-normal py-3 pl-4">Rank</th>
            <th className="text-left font-normal py-3">Name</th>
            <th className="text-left font-normal py-3">Changes</th>
            <th className="text-right font-normal py-3 pr-4">Reviews</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t border-gray-100">
              <td className="py-4 pl-4 text-black">#{user.rank}</td>
              <td className="py-4">
                <Link href={`/user/${user.id}`} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getRandomGradient()} flex items-center justify-center text-white text-xs font-bold`}>
                    {user.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-black ml-3">{user.name}</span>
                </Link>
              </td>
              <td className={`py-4 ${user.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {user.change > 0 ? '▲' : '▼'} {Math.abs(user.change)}
              </td>
              <td className="py-4 pr-4">
                <div className="flex items-center justify-end">
                  <span className="text-xs text-gray-400">{user.totalReviews.toLocaleString()} reviews</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right mt-6">
        <a href="#" className="text-black hover:underline text-sm">More →</a>
      </div>
    </div>
  );
};

export default UserList;
