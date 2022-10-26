import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import ThumbnailList from './ThumbnailList';

const ImgContainer = ({data}) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const resizeHandler = () => {
    setWindowSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize',resizeHandler);
    return () => {
      window.removeEventListener('resize',resizeHandler);
    }
  },[])

  return(
    <>
      { windowSize <= 768 ?
        <Carousel imgList={data} />
        :<ThumbnailList imgList={data} />
      }
    </>
  )
}

export default ImgContainer;