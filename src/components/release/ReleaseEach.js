import React, { useState } from 'react';
import style from 'styled-components';
import ReuseBtn from '../reuseable/ReuseBtn';
import PortalModal from '../../PortalModal';

const ReleaseEach = ({data, index, isDone}) => {
  const [modalToggle, setModalToggle] = useState(false);
  const showModal = () => {
    setModalToggle(!modalToggle);
  }
  
  return(
    <>
      {index === 0 ? <></> : <Sep/>}
      <ReleaseEachComp>
        <ImgBox>
          <Img src={data.releaseMarket.icon} alt='relase icon' />
        </ImgBox>
        <ReleaseInfo>
          <ReleaseCop isDone={isDone}>
            {data.releaseMarket.name}
          </ReleaseCop>
          <TagContainer>
            { data.isEvent ? <Tag>이벤트</Tag>:<></>}
            <Tag>{data.region}</Tag>
            <Tag>{data.shippingMethod}</Tag>
            <Tag>{data.method}</Tag>
          </TagContainer>
          <BtnBox>
            {isDone ? 
              <ReuseBtn content={'종료'} clickEvent={showModal} type={'gray_done'} />
              :
              <ReuseBtn content={data.type === 0 ? '선착순' : '응모'} clickEvent={showModal} type={'gray'} />
            }
          </BtnBox>
        </ReleaseInfo>
      </ReleaseEachComp>
      {modalToggle ? <PortalModal uuid={data.uuid} clickEvent={showModal} />:<></>}
    </>
  )
}

export default ReleaseEach;

const ReleaseEachComp = style.section`
  width: 100%;
  height: 96px;
  display: flex;
`
const ImgBox = style.div`
  width: 96px;
  height: 100%;
`
const Img = style.img`
  width: 100%;
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: 10rem;
  object-fit: cover;
`
const ReleaseInfo = style.div`
  width: 304px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;
`
const ReleaseCop = style.div`
  font-size: ${({theme}) => theme.fontSize.font_15};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  line-height: 17px;
  margin-bottom: 4px;
  color: ${({isDone, theme}) => isDone ? theme.colors.gray_deepdark: theme.colors.black}
`
const TagContainer = style.div`
  width: 100%;
  height: 20px;
  display: flex;
  margin-bottom: 8px;
`
const Tag = style.div`
  display: flex;
  align-items: center;
  padding: 2px 6px;
  margin-right: 4px;
  border-radius: 5rem;
  font-size: ${({theme}) => theme.fontSize.font_12};
  color: ${({theme}) => theme.colors.black_pale};
  background-color: ${({theme}) => theme.colors.gray_pale};
`
const Sep = style.div`
  width: 100%;
  height: 1px;
  margin: 20px 0px;
  background-color: ${({theme}) => theme.colors.gray};
`
const BtnBox = style.div`
  height: 28px;
`