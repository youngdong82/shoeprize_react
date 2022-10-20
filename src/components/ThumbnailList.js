import React from 'react';
import style from 'styled-components';

const ThumbnailList = ({imgList}) => {
  return(
    <ThumbnailListComp>
      {imgList ? imgList.map((each,idx) => 
        <Img key={idx} src={each} alt="detail image" />
      ):<></>}
    </ThumbnailListComp>
  )
}

export default ThumbnailList;

const ThumbnailListComp = style.main`
  width: ${Math.floor(1220/1920 * 100)}%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: ${Math.floor(96/1920 * 100)}%;
`
const Img = style.img`
  width: ${Math.floor(600/1220 * 100)}%;
  height: auto;
  max-width: 600px;
  max-height: 600px;
  margin-bottom: 2%;
`