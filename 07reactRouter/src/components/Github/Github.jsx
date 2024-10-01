import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState(0);
  // const token = import.meta.env.VITE_GITHUB_TOKEN;

  // useEffect(() => {
  //   fetch('https://api.github.com/users/Harsh-svg988', {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error('Error fetching GitHub data:', error));
  // }, [token]);
  return (
    <div className='bg-gray-500 text-white text-center m-4 b-4 text-3xl'>
      Github Followers: {data?.followers}
    </div>
  );
}
export default Github;


export const githubInfoLoader = async () => {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const response = await fetch('https://api.github.com/users/Harsh-svg988', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.json()


}