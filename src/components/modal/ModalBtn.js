import React from 'react';
import styled from 'styled-components';
import ReuseBtn from '../reuseable/ReuseBtn';

const ModalBtn = ({ url, type, closedTimestamp }) => {
  const moveToUrl = () => {
    window.open(url);
  }
  const btnTypeRouter = () => {
    const nowStamp = Date.now();
    if(closedTimestamp - nowStamp){
      if(type === 0){
        return <ReuseBtn content={'선착순 바로가기'} type={'yellow'} />
      }else{
        return <ReuseBtn content={'응모 바로가기'} type={'yellow'} />
      }
    }else{
      return <ReuseBtn content={'종료'} type={'gray_done'} />
    }
  }

  return(
    <BtnBox onClick={moveToUrl}>
      {btnTypeRouter()}
    </BtnBox>
  )
}

export default ModalBtn;

const BtnBox = styled.div`
  width: 100%;
  height: 40px;
  min-height: 40px;
  margin-bottom: 20px;
`