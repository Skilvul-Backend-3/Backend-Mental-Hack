import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Test = () => {
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios('https://634a6eef33bb42dca403ecb0.mockapi.io/blogMSWellbeing').then(
      (res) => {
        // console.log(res.data);
        setBlogs(res.data);
        setisLoading(false);
      }
    );
  }, []);

  console.log(blogs);

  return (
    <div className="mx-auto">
      {isLoading ? (
        <img alt="isLoading" className="mx-auto my-1/2 h-40 sm:h-60" />
      ) : (
        blogs
          .filter((item) => item.id === id)
          .map((item, id) => {
            return (
              <div key={id}>
                <div className="mx-20 sm:mx-60 px-5 pt-5 text-2xl sm:text-4xl font-bold text-textPrimary text-center">
                  {item.tittle}
                </div>
                <div>
                  <div className="font-serif px-5 font-semibold text-sm sm:text-lg text-[#71717a] text-center mt-2">
                    {item.releaseDate}
                  </div>
                  <div className="font-serif px-5 mb-3 italic text-center text-sm sm:text-lg">
                    Author by : {item.author}
                  </div>
                  <div className="m-auto w-[80%] sm: flex flex-wrap justify-center">
                    <img src={item.img} alt="" />
                  </div>
                </div>
                <div className="mt-8">
                  <h3 class="lg:text-xl font-semibold text-textSecondary my-10 mx-16">
                    {item.subtittle}
                  </h3>
                  <p className="text-sm text-justify lg:text-lg mt-4 my-10 mx-16">
                    {item.descContent}
                  </p>
                </div>
              </div>
            );
          })
      )}
    </div>
  );
};

export default Test;
