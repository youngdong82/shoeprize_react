import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Carousel = ({imgList}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef([]);
  let startPoint = null;

  const swipeLock = (afterTouch) => {
    if(afterTouch < 0){
      return 0
    } else if(afterTouch > imgList.length-1){
      return afterTouch-1
    }else{
      return afterTouch
    }
  }
  const onTouchHandler = (e) => {
    const firstTouch = e.touches[0];
    startPoint = firstTouch.clientX;
  }
  const onTouchEndHandler = (e) => {
    const endPoint = e.changedTouches[0];
    const diff = endPoint.clientX - startPoint;
    if(diff < -10){
      setCurrentSlide(swipeLock(currentSlide+1));
    } else if(diff > 10){
      setCurrentSlide(swipeLock(currentSlide-1));
    }
  }

  return(
    <CarouselComp>
      <ImgContainer currentSlide={currentSlide} viewport={window.innerWidth}>
        {imgList.map((each,idx) => 
          <ImgBox
            key={idx} 
            ref={(el) => slideRef.current[idx] = el}
            onTouchStart={onTouchHandler}
            onTouchEnd={onTouchEndHandler}
            >
            <Img src={each} alt="detail shot" />
          </ImgBox>
        )}
      </ImgContainer>
      <BtnContainer>
        {imgList.map((each,idx) => 
            <Btn key={idx} index={idx} currentSlide={currentSlide} />
          )}
      </BtnContainer>
    </CarouselComp>
  )
}

export default Carousel;


const CarouselComp = styled.main`
  position: relative;
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  overflow: hidden;

`;
const ImgContainer = styled.div`
  width: 100vw;
  display: flex;
  margin-left: ${({currentSlide, viewport}) => -(currentSlide * (2*viewport))}px;
  transition: margin-left 0.3s ease-in-out;
`;
const ImgBox = styled.div`
  width: 100vw;
  height: 100vw;
`
const Img = styled.img`
  width: 100vw;
  height: auto;
`
const BtnContainer = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
`
const Btn = styled.div`
  width: ${({currentSlide,index}) => currentSlide === index ? '48':'24'}px;
  height: 1px;
  margin: 0px 2px;
  border-radius: 1px;
  background-color: ${({theme}) => theme.colors.gray_dark};
  transition: width 0.3s ease-in-out;
`