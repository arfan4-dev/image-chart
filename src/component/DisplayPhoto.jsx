import React, { useContext, useEffect, useState } from 'react';
import { Context } from './ContextApp';
import Navbar from './Navbar';

const DisplayPhoto = () => {
  const [imageURLs, setImageURLs] = useState(null);
  const { currentUser } = useContext(Context);

  useEffect(() => {
    // Fetch and set the user's photoURL in the useEffect
    const fetchPhotoURL = async () => {
      if (currentUser) {
        setImageURLs([currentUser.photoURL]);
      }
    };

    fetchPhotoURL();
  }, [currentUser]);

  return (
    <>
    <Navbar/>


    <div className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-3xl font-semibold text-center mb-4">Display Photos</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {imageURLs?(imageURLs.map((url, index) => (
          <div key={index} className="m-10">
            <img
              src={url}
              alt={`Image ${index}`}
              className="w-[200px] h-auto"
            />
          </div>
        ))):(<h1 className='flex justify-center text-2xl mt-5'>No Image</h1>)}
      </div>
    </div>
    </>
    
  );
};

export default DisplayPhoto;
