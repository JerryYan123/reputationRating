import React from 'react';
import Link from 'next/link';
import { USERS, User } from '@/constants/users';

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
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      <h2 className="text-2xl font-bold mb-6 text-black">{title}</h2>
      <table className="w-full">
        <thead>
          <tr className="text-sm text-black">
            <th className="text-left font-normal py-3 pl-4">Rank</th>
            <th className="text-left font-normal py-3">Name</th>
            <th className="text-left font-normal py-3">Changes</th>
            <th className="text-right font-normal py-3">Reviews</th>
            <th className="text-right font-normal py-3 pr-4">Likes</th>
          </tr>
        </thead>
        <tbody>
          {USERS.map((user) => (
            <tr key={user.id} className="border-t border-gray-100">
              <td className="py-4 pl-4 text-black">{user.rank}</td>
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
              <td className="py-4 pr-4">
                <div className="flex items-center justify-end">
                  <span className="text-xs text-gray-400">{user.totalLikes.toLocaleString()} likes</span>
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
