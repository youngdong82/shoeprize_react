import React from 'react';
import style from 'styled-components';

const ThumbnailList = ({imgList}) => {
  return(
    <ThumbnailListComp>
      {imgList ? imgList.map((each,idx) => 
        <ImgBox>
            <Img key={idx} src={each} alt="detail image" />
        </ImgBox>
      ):<></>}
    </ThumbnailListComp>
  )
}

export default ThumbnailList;

const ThumbnailListComp = style.main`
  width: ${Math.floor(1220/1920 * 100)}%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: ${Math.floor(40/1080 * 100)}%;
  margin-bottom: ${Math.floor(40/1080 * 100)}%;
`
const ImgBox = style.div`
width: ${Math.floor(600/1220 * 100)}%;
max-width: 600px;
max-height: 600px;
margin-bottom: 1%;
`
const Img = style.img`
max-width: 100%;
height: auto;
`