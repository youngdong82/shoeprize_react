import React from 'react';
import styled from 'styled-components';
import ReuseBtn from './components/reuseable/ReuseBtn';



const Modal = ({ data, children }) => {
  return(
      <ModalComp>
        {children}
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
          <ModalContentBox>
            <Title>제품 코드</Title>
            <ContentBold>{data.product.code}</ContentBold>
          </ModalContentBox>
          <Sep />
          <ModalContentBox>
            <Title>가격</Title>
            <ContentBold>{data.price}</ContentBold>
          </ModalContentBox>
          <Sep />
          <ModalContentBox>
            <Title>공지 방법</Title>
            <Content>{data.method}</Content>
          </ModalContentBox>
          <Sep />
          <ModalContentBox>
            <Title>결제 방법</Title>
            <Content>{data.payMethod}</Content>
          </ModalContentBox>
          <Sep />
          <ModalContentBox>
            <Title>수령 방법</Title>
            <Content>{data.shippingMethod}</Content>
          </ModalContentBox>
          <Sep />
          <ModalContentBox>
            <Title>공식 채널</Title>
            <ChannelContainer>
              {data.releaseMarket.channels.map((each) => 
                <ChannelEach key={each.type} alt={each.typeName}/>
              )}
            </ChannelContainer>
          </ModalContentBox>
          <Sep />
          { data.mission !== undefined ?
            <ModalContentBoxColumn>
              <Title>유의 사항</Title>
              <ContentTexarea value={data.mission} />
            </ModalContentBoxColumn>
            :<></>
          }
        </ModalContent>
        <BtnBox>
          <ReuseBtn content={'응모 바로가기'} />
        </BtnBox>
      </ModalComp>
  )
}


export default Modal;

const ModalComp = styled.div`
  position: relative;
  width: 400px;
  height: 600px;
  padding: 0px 20px;
  padding-top: 13px;
  padding-bottom: 20px;
  background-color: ${({theme}) => theme.colors.white};
`
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
`
const ContentBold = styled.div`
  font-size: ${({theme}) => theme.fontSize.font_13};
  font-weight: ${({theme}) => theme.fontWeight.medium};
  line-height: 18px;
`
const Content = styled.div`
  font-size: ${({theme}) => theme.fontSize.font_13};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  line-height: 18px;
`
const ChannelContainer = styled.div`
  display: flex;
`
const ChannelEach = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 17px;
`
const ContentTexarea = styled.textarea`
  height: 100%;
  margin: 12px 0px;
  border: none;
  &::-webkit-scrollbar {
    display: none;
}
`
const Sep = styled.div`
  width: 100%;
  height: 1px;
  margin: 12px 0px;;
  background-color: ${({theme}) => theme.colors.gray};
`
const BtnBox = styled.div`
  width: 100%;
  height: 40px;
`