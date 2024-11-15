import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectListProps {
  title: string; // 为 title 添加类型
}

const ProjectList: React.FC<ProjectListProps> = ({ title }) => {
  const projects = [
    { id: 1, name: 'Scroll', change: 2, score: 9.9, reviews: 5021 },
    { id: 2, name: 'Sign Protocol', change: 1, score: 9.8, reviews: 4832 },
    { id: 3, name: 'Dynamic', change: -2, score: 9.7, reviews: 4567 },
    { id: 4, name: 'Mina Protocol', change: 2, score: 9.6, reviews: 4123 },
    { id: 5, name: 'Bitkub', change: -1, score: 9.5, reviews: 3988 },
    { id: 6, name: 'Oasis Protocol', change: -1, score: 9.4, reviews: 3654 },
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
            <th className="text-right font-normal py-3 pr-4">Score</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project.id} className="border-t border-gray-100">
              <td className="py-4 pl-4 text-black">{index + 1}</td>
              <td className="py-4">
                <Link href={`/project/${project.id}`} className="flex items-center">
                  <Image 
                    src={`/images/projects/${project.name.toLowerCase().replace(/ /g, '_')}.png`}
                    alt={`${project.name} icon`}
                    width={32}
                    height={32}
                    className="rounded-full mr-3"
                  />  
                  <span className="text-black">{project.name}</span>
                </Link>
              </td>
              <td className={`py-4 ${project.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {project.change > 0 ? '▲' : '▼'} {Math.abs(project.change)}
              </td>
              <td className="py-4 pr-4">
                <div className="flex items-center justify-end">
                  <span className="font-bold text-black text-lg mr-2">{project.score}</span>
                  <span className="text-xs text-gray-400">({project.reviews} reviews)</span>
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

export default ProjectList;
