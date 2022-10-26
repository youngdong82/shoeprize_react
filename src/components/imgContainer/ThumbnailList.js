import React from 'react';
import styled from 'styled-components';

const ThumbnailList = ({imgList}) => {
  return(
    <ThumbnailListComp>
      {imgList.map((each,idx) => 
        <ImgBox key={idx}>
          <Img src={each} alt="detail shot" />
        </ImgBox>
      )}
    </ThumbnailListComp>
  )
}

export default ThumbnailList;

const ThumbnailListComp = styled.main`
  width: ${Math.floor(1220/1920 * 100)}%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: ${Math.floor(40/1080 * 100)}%;
  margin-bottom: ${Math.floor(40/1080 * 100)}%;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vw;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 0px;
    overflow-x: scroll;
  }
`
const ImgBox = styled.div`
  width: ${Math.floor(600/1220 * 100)}%;
  max-width: 600px;
  max-height: 600px;
  margin-bottom: 1%;
  @media screen and (max-width: 768px) {
    width: 345px;
  }
`
const Img = styled.img`
  max-width: 100%;
  height: auto;
`