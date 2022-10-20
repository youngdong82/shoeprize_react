import React from 'react';
import style from 'styled-components';
import DetailContainer from '../components/DetailContainer';
import ThumbnailList from '../components/ThumbnailList';

const PruductDetail = () => {
  return(
    <PruductDetailComp>
      <ThumbnailList />
      <DetailContainer />
    </PruductDetailComp>
  )
}

export default PruductDetail;

const PruductDetailComp = style.div`
  display: flex;
  justify-content: space-between;
`