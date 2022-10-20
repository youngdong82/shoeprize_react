import React from 'react';
import style from 'styled-components';
import ReleaseList from './ReleaseList';

const DetailContainer = () => {
  return(
    <DetailContainerComp>
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
  width: ${Math.floor(720/1920 * 100)}%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${Math.floor(216/1920*100)}%;
`
const DetailHead = style.section`
  width: 94%;
  max-width: 400px;
  min-width: 360px;
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
  height: 80px;
  margin-bottom: 12px;
  background-color: red;
`
const DetailDesc = style.article`
  width: 100%;
  height: 62px;
  margin-bottom: 16px;
  background-color: red;
`
const DetailElse = style.div`
  width: 100%;
  height: 16px;
  margin-bottom: 24px;
`
const Sep = style.div`
  width: 94%;
  max-width: 400px;
  min-width: 340px;
  height: 1px;
  background-color: black;
  margin-bottom: 28px;
`
