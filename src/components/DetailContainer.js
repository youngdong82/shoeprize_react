import React from 'react';
import style from 'styled-components';
import ReleaseList from './ReleaseList';

const DetailContainer = () => {
  const viewportWidth = window.innerWidth;
  return(
    <DetailContainerComp width={viewportWidth}>
      <DetailHead>
        <DetailTitle>
          DetailTitle
        </DetailTitle>
        <DetailData>
          DetailData
        </DetailData>
        <DetailDesc>
          DetailDesc
        </DetailDesc>
        <DetailElse>
          DetailElse
        </DetailElse>
      </DetailHead>
      <Sep />
      <ReleaseList />
    </DetailContainerComp>
  )
}

export default DetailContainer;

const DetailContainerComp = style.aside`
  width: ${({width}) => (width/1920 * 700)-(width/1920 * 40)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({width}) => width/1920 * 216}px;
`
const DetailHead = style.section`
  width: ${({width}) => width/1920 * 400}px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
`
const DetailTitle = style.article`
  width: 100%;
  height: 62px;
  margin-bottom: 12px;
  background-color: red;
`
const DetailData = style.article`
  width: 100%;
  min-width: 400px;
  height: 80px;
  margin-bottom: 12px;
  background-color: red;
`
const DetailDesc = style.article`
  width: 100%;
  min-width: 400px;
  height: 62px;
  margin-bottom: 16px;
  background-color: red;
`
const DetailElse = style.div`
  width: 100%;
  min-width: 400px;
  height: 16px;
  margin-bottom: 24px;
`
const Sep = style.div`
  width: 400px;
  min-width: 400px;
  height: 1px;
  background-color: black;
  margin-bottom: 28px;
`
