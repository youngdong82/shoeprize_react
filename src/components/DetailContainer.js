import React from 'react';
import style from 'styled-components';
import ReleaseList from './release/ReleaseList';

const DetailContainer = ({children}) => {
  return(
    <DetailContainerComp>
      {children}
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
  margin-top: ${Math.floor(120/1080 * 100)}%;
  margin-bottom: ${Math.floor(80/1080 * 100)}%;
  @media screen and (max-width: 768px) {
    width: 100vw;
    margin-top: 0px;
    margin-bottom: 28px;
  }
`
const Sep = style.div`
  width: 94%;
  max-width: 400px;
  min-width: 340px;
  height: 1px;
  background-color: ${({theme}) => theme.colors.gray};
  margin-bottom: 28px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
