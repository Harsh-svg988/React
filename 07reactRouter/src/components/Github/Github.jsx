import React, { useState, useEffect } from 'react';

function Github() {
  const [data, setData] = useState(0);
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    fetch('https://api.github.com/users/Harsh-svg988', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching GitHub data:', error));
  }, [token]);
  return (
    <div className='bg-gray-500 text-white text-center m-4 b-4 text-3xl'>
      Github Followers: {data?.following}
    </div>
  );
}
export default Github;
