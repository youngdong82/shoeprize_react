import React, { useEffect, useState } from 'react';
import style from 'styled-components';
import DetailContainer from '../components/DetailContainer';
import ThumbnailList from '../components/ThumbnailList';

const PruductDetail = () => {
  const [data, setData] = useState(null);

  const getData = async() => {
    const res = await fetch('/static/product/id/413.json', {
      method: 'GET',
    })
    const json = await res.json();
    setData(json);
  }
  useEffect(() => {
    getData()
  },[])

  return(
    <PruductDetailComp>
      <ThumbnailList imgList={data ? data.images : null} />
      <DetailContainer />
    </PruductDetailComp>
  )
}

export default PruductDetail;

const PruductDetailComp = style.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: ${Math.floor(40/1920*100)}%;
`

// 1920px에서 40px을 차지하고 있다.
// 백분율은?