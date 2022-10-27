import React from 'react';
import styled from 'styled-components';
import { iconRouter } from '../../shared/iconRouter';
import { stringConverter } from '../../shared/stringConverter';
import ModalContentTemp from './ModalContetBox';
import ModalBtn from './ModalBtn';

const Modal = ({ data }) => {
  return(
    <>
        <div>
          <ModalHeader>
            <ModalHeaderCont>
              <BrandLogo src={data.releaseMarket.icon} alt='brand Logo' />
              <BrandName>{data.releaseMarket.name}</BrandName>
            </ModalHeaderCont>
          </ModalHeader>
          <ModalContent>
            <ModalContentBoxFree>
              <ProductImg src={data.product.thumb} alt='product thumbnail'/>
              <ProductDetail>
                <ProductBrand>{data.product.brandName}</ProductBrand>
                <ProductName>{data.product.name}</ProductName>
              </ProductDetail>
            </ModalContentBoxFree>
            <Sep />
            <ModalContentTemp titleData={"제품 코드"} data={data.product.code} isBold={true} needCopy={true} />
            <Sep />
            <ModalContentTemp titleData={"가격"} data={data.price} isBold={true} />
            <Sep />
            <ModalContentTemp titleData={"공지 방법"} data={data.method} />
            <Sep />
            <ModalContentTemp titleData={"결제 방법"} data={data.payMethod} />
            <Sep />
            <ModalContentTemp titleData={"수령 방법"} data={data.shippingMethod} />
            <Sep />
            <ModalContentBox>
              <Title>공식 채널</Title>
              <ChannelContainer>
                {data.releaseMarket.channels.map((each) => 
                  <ChannelEach key={each.type} src={iconRouter(each.type)} alt={each.typeName} onClick={() => window.open(each.link)} />
                )}
              </ChannelContainer>
            </ModalContentBox>
            <Sep />
            { data.mission !== undefined ?
              <ModalContentBoxColumn>
                <Title>유의 사항</Title>
                <MissionContainer height={window.innerHeight}>
                  {stringConverter(data.mission)}
                </MissionContainer>
              </ModalContentBoxColumn>
              :<Blank></Blank>
            }
          </ModalContent>
        </div>
        <ModalBtn url={data.url} type={data.type} closedTimestamp={data.closedTimestamp}  />
      </>
  )
}


export default Modal;

const ModalHeader = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`
const ModalHeaderCont = styled.div`
  display: flex;
`
const BrandLogo = styled.img`
  width: 20px;
  height: 20px;
  border: 1px solid ${({theme}) => theme.colors.gray};
  border-radius: 20px;
  margin-right: 6px;
`
const BrandName = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({theme}) => theme.fontSize.font_15};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  line-height: 18px;
`
const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ModalContentBox = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  justify-content: space-between;
`
const ModalContentBoxFree = styled.div`
  width: 100%;
  display: flex;
`
const ModalContentBoxColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const ProductImg = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 12px;
`
const ProductDetail = styled.div`
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ProductBrand = styled.div`
  font-size: ${({theme}) => theme.fontSize.font_13};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  line-height: 18px;
`
const ProductName = styled.div`
  font-size: ${({theme}) => theme.fontSize.font_13};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  line-height: 18px;
`
const Title = styled.div`
  color: ${({theme}) => theme.colors.gray_deepdark};
  font-size: ${({theme}) => theme.fontSize.font_13};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  line-height: 18px;
  margin-bottom: 4px;
`
const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
`
const ChannelEach = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 17px;
  cursor: pointer;
`
const MissionContainer = styled.div`
  height: 110px;
  margin-bottom: 12px;
  font-size: ${({theme}) => theme.fontSize.font_13};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  line-height: 18px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    height: ${({height}) => height-(182 + 301)}px;
  }
`
const Blank = styled.div`
  height: 132px;
  margin-bottom: 12px;
`
const Sep = styled.div`
  width: 100%;
  height: 1px;
  margin: 12px 0px;;
  background-color: ${({theme}) => theme.colors.gray};
`