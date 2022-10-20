import React from 'react';
import style from 'styled-components';
import ReleaseList from './ReleaseList';

const DetailContainer = () => {
  const viewportWidth = window.innerWidth;
  return(
    <DetailContainerComp width={viewportWidth}>
      <DetailTitle>
        DetailTitle
      </DetailTitle>
      <DetailData>
        DetailData
      </DetailData>
      <DetailDesc>
        DetailDesc
      </DetailDesc>
      <Sep />
      <ReleaseList />
    </DetailContainerComp>
  )
}

export default DetailContainer;

const DetailContainerComp = style.aside`
  width: ${({width}) => width - (width/1920 * 1316)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({width}) => width/1920 * 216}px;
`
const DetailTitle = style.section`
  width: ${({width}) => width/1920 * 400}px;
  min-width: 400px;
  height: 62px;
  background-color: red;
`
const DetailData = style.section`
  width: ${({width}) => width/1920 * 400}px;
  min-width: 400px;
  height: 80px;
`
const DetailDesc = style.section`
  width: ${({width}) => width/1920 * 400}px;
  min-width: 400px;
  height: 62px;
`
const Sep = style.div`
  width: ${({width}) => width/1920 * 400}px;
  min-width: 400px;
  height: 1px;
  background-color: black;
`
