import React from 'react';
import styled, { keyframes } from 'styled-components';


const Loading = ({size}) => {
  return (
      <LoadingComp>
        {size ? <Spinner size={size} />:<></>}
        <LoadingMsg>로딩 중입니다</LoadingMsg>
        <LoadingMsg>잠시만 기다려 주세요...</LoadingMsg>
      </LoadingComp>
  )
}
export default Loading;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`
const LoadingComp = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`
const Spinner = styled.div`
  border: ${({theme,size}) => `${size/60*8}px solid ${theme.colors.gray}`};
  border-top: ${({theme,size}) => `${size/60*8}px solid ${theme.colors.gray_dark}`};
  border-radius: 50%;
  width: ${({size}) => size }px;
  height: ${({size}) => size }px;
  animation: ${spin} 1.2s ease-in-out infinite;
  margin-bottom: 10px;
  margin-top: 20px;
`
const LoadingMsg = styled.div`
  color: ${({theme}) => theme.colors.gray_deepdark};
  font-size: ${({theme}) => theme.fontSize.font_14};
`