import React from 'react';
import styled from 'styled-components';
import CopyIcon from '../../shared/CopyIcon';

const ModalContentTemp = ({titleData, data, isBold, needCopy }) => {
  return(
    <ModalContentBoxComp>
      <Title>{titleData}</Title>
      {isBold ? 
        <ContentBold>
          {data}
          {needCopy ? <CopyIcon data={data} size={15} />:<></>}
        </ContentBold>
        :
        <Content>
          {data}
          {needCopy ? <CopyIcon data={data} size={15} />:<></>}
        </Content>
      }
    </ModalContentBoxComp>
  )
}

export default ModalContentTemp;

const ModalContentBoxComp = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  justify-content: space-between;
`
const Title = styled.div`
  color: ${({theme}) => theme.colors.gray_deepdark};
  font-size: ${({theme}) => theme.fontSize.font_13};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  line-height: 18px;
  margin-bottom: 4px;
`
const ContentBold = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({theme}) => theme.fontSize.font_13};
  font-weight: ${({theme}) => theme.fontWeight.medium};
  line-height: 18px;
`
const Content = styled.div`
  font-size: ${({theme}) => theme.fontSize.font_13};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  line-height: 18px;
`