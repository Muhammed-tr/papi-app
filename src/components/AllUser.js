// AllUser.js
import React from 'react';
import { useApiContext } from '../context/ApiContext';

export default function AllUser() {
  const { responses } = useApiContext();

  const sortedResponses = responses.slice().reverse(); // Reverse the order of responses

  return (
    <div className="border border-gray-300 p-4 grid grid-cols-2 gap-3">
      {sortedResponses.map((responseList, index) => (
        <div key={index} className="mb-4  ">
          <h2 className="text-xl font-semibold mb-2">User {index + 1}</h2>
          <ul className=''>
            {responseList.map((post) => (
              <li className='border border-gray-300 text-center items-center text-lg ' key={post.id}>
                User ID: {post.id}, Name: {post.title}, <img className='scale-50 border border-gray-300' src={post.images} alt="" />
              </li>
            ))}
          </ul>
      
        </div>
      ))}
    </div>
  );
}
