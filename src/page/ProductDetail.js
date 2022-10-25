import React, { useEffect, useState } from 'react';
import style from 'styled-components';
import DetailContainer from '../components/DetailContainer';
import DetailHead from '../components/DetailHead';
import ThumbnailList from '../components/ThumbnailList';
import { getData } from '../shared/getData';

const PruductDetail = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getData('/static/product/id/413.json', setData);
  },[])

  return(
    <>
      {data !== null ? 
      <PruductDetailComp>
        <ThumbnailList imgList={data.images} />
        <DetailContainer>
          <DetailHead detailData={data} />
        </DetailContainer>
      </PruductDetailComp>
      :<></>
      }
    </>
  )
}

export default PruductDetail;

const PruductDetailComp = style.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: ${Math.floor(40/1920*100)}%;
`
