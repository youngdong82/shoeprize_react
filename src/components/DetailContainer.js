import React from 'react';
import style from 'styled-components';
import ReleaseList from './ReleaseList';

const DetailContainer = ({detailData}) => {
  return(
    <DetailContainerComp>
      {detailData !== null ?
      <>
        <DetailHead>
          <DetailTitle>
            <DetailTitleSection>
              <Title>{detailData.brandName}</Title>
              <Title>{detailData.nameEn}</Title>
              <Detail>{detailData.name}</Detail>
            </DetailTitleSection>
            <BrandImgBox>
              <BrandImg src={detailData.brandIcon} alt='brand logo' />
            </BrandImgBox>
          </DetailTitle>
          <DetailData>
            <DetailName>
              <div>제품 코드</div>
              <div>가격</div>
              <div>발매일</div>
              <div>총 응모 횟수</div>
            </DetailName>
            <DetailContent>
              <div>{detailData.code}</div>
              <div>{detailData.price}</div>
              <div>{detailData.firstReleaseDate}</div>
              <div>{detailData.applyCount}</div>
            </DetailContent>
          </DetailData>
          <DetailDesc>{detailData.comment}</DetailDesc>
          <DetailElse>
            발매처 <span>{detailData.releaseSiteCount}</span> · 조회수 <span>{detailData.views}</span>
          </DetailElse>
        </DetailHead>
        <Sep />
        <ReleaseList />
      </>
      : <></>}
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
  display: flex;
  margin-bottom: 12px;
  border-left: 1px solid ${({theme}) => theme.colors.gray_dark};
  border-bottom: 1px solid ${({theme}) => theme.colors.gray_dark};
  border-right: 1px solid ${({theme}) => theme.colors.gray_dark};
`
const DetailTitleSection = style.div`
  flex-grow: 2;
  padding-left: 11px;
  display: flex;
  flex-direction: column;
`
const Title = style.div`
  height: 18px;
  font-weight: ${({theme}) => theme.fontWeight.bold};
  font-size: ${({theme}) => theme.fontSize.font_14};
  line-height: 18px;
`
const Detail = style.div`
  height: 16px;
  margin-right: 2px;
  font-weight: ${({theme}) => theme.fontWeight.regular};
  font-size: ${({theme}) => theme.fontSize.font_12};
  color: ${({theme}) => theme.colors.gray_deepdark};
`
const BrandImgBox = style.div`
  width: 60px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${({theme}) => theme.colors.gray_dark};
`
const BrandImg = style.img`
  width: 48px;
`
const DetailData = style.article`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0px 11px;
  margin-bottom: 12px;
  border-left: 1px solid ${({theme}) => theme.colors.gray_dark};
  border-bottom: 1px solid ${({theme}) => theme.colors.gray_dark};
  border-right: 1px solid ${({theme}) => theme.colors.gray_dark};
`
const DetailName = style.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.colors.gray_deepdark};
  font-size: ${({theme}) => theme.fontSize.font_13};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  line-height: 18px;
`
const DetailContent = style.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  font-size: ${({theme}) => theme.fontSize.font_13};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  line-height: 18px;
`
const DetailDesc = style.article`
  width: 100%;
  // height: 62px;
  padding: 0px 11px;
  padding-bottom: 9px;
  margin-bottom: 16px;
  border-left: 1px solid ${({theme}) => theme.colors.gray_dark};
  border-bottom: 1px solid ${({theme}) => theme.colors.gray_dark};
  border-right: 1px solid ${({theme}) => theme.colors.gray_dark};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  font-size: ${({theme}) => theme.fontSize.font_13};
  line-height: 18px;
`
const DetailElse = style.div`
  width: 100%;
  height: 16px;
  margin-bottom: 24px;
  color: ${({theme}) => theme.colors.gray_dark};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  font-size: ${({theme}) => theme.fontSize.font_12};
  line-height: 16px;
  & span{
    font-weight: ${({theme}) => theme.fontWeight.medium};
  }
`
const Sep = style.div`
  width: 94%;
  max-width: 400px;
  min-width: 340px;
  height: 1px;
  background-color: ${({theme}) => theme.colors.gray};
  margin-bottom: 28px;
`
