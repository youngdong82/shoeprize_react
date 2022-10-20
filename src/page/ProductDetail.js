import React from 'react';
import style from 'styled-components';
import DetailContainer from '../components/DetailContainer';
import ThumbnailList from '../components/ThumbnailList';

const PruductDetail = () => {
  const viewportWidth = window.innerWidth;
  return(
    <PruductDetailComp width={viewportWidth}>
      <ThumbnailList />
      <Sep width={viewportWidth} />
      <DetailContainer />
    </PruductDetailComp>
  )
}

export default PruductDetail;

const PruductDetailComp = style.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px ${({width}) => width/1920 * 40}px;
`
const Sep = style.div`
  min-width: ${({width}) => width/1920 * 40}px;
`