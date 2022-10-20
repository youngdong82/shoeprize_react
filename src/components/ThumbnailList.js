import React from 'react';
import style from 'styled-components';

const ThumbnailList = () => {
  const viewportWidth = window.innerWidth;

  return(
    <ThumbnailListComp width={viewportWidth}>
      <Img width={viewportWidth} src={null} alt="detail image" />
      <Img width={viewportWidth} src={null} alt="detail image" />
      <Img width={viewportWidth} src={null} alt="detail image" />
      <Img width={viewportWidth} src={null} alt="detail image" />
      <Img width={viewportWidth} src={null} alt="detail image" />
      <Img width={viewportWidth} src={null} alt="detail image" />
    </ThumbnailListComp>
  )
}

export default ThumbnailList;

const ThumbnailListComp = style.main`
  width: ${({width}) => width/1920 * 1220}px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: ${({width}) => width/1920 * 96}px;
  margin-left: ${({width}) => width/1920 * 40}px;
  background-color: beige;
`
const Img = style.img`
  width: ${({width}) => width/1920 * 600}px;
  height: ${({width}) => width/1920 * 600}px;
`