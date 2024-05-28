// News.js
import React, { useEffect, useState } from 'react';
import CustomSwiper from '../Others/Swiper/Swiper';
import axios from 'axios';

const News = () => {
  let [news, setNews] = useState([]);

  const NewsApi = () => {
    const apiUrl = window.env.REACT_API_URL;
    const accessToken = window.env.REACT_API_TOKEN;

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    axios.get(`${apiUrl}/news`, { headers })
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    NewsApi();
  }, []);

  return (
    <div className="relative">
      <div className="w-full h-full absolute top-0 left-0 z-20 rounded-3xl"></div>
      <CustomSwiper className="h-full w-full" item={news} spaceBetween={30} autoplay={true} autoplaySecond={1} pagination={true} scrollbar={false} navigation={false} />
    </div>
  );
};

export default News;
