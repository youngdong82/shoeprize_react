import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReleaseEach from './ReleaseEach';
import ReuseBtn from '../reuseable/ReuseBtn';
import { getData } from '../../shared/function/getData';
import { withComma } from '../../shared/function/withComma';

const ReleaseList = () => {
  const [releaseData, setReleaseData] = useState({liveData:[], doneData:[]});
  const sortAndSetData = (data) => {
    const unsortedData = data.results;
    const nowStamp = Date.now();
    const liveData = [];
    const doneData = [];
    unsortedData.forEach((each) => {
      if(each.closedTimestamp - nowStamp > 0){
        liveData.push(each);
      } else{
        doneData.push(each);
      }
    })
    const newReleaseData = {
      liveData, doneData
    }
    setReleaseData(newReleaseData);
  }
  useEffect(() => {
    getData('/static/releases/413.json',sortAndSetData);
  },[])

  //진행 중(false) | 종료 토글
  const [liveToggle, setLiveToggle] = useState(false);
  const liveToggleHandler = () => {
    setLiveToggle(!liveToggle);
    setReleaseLimit(5);
  }

  //5개씩 더 보여주기
  const [releaseLimit, setReleaseLimit] = useState(5);
  const showMore = () => {
    setReleaseLimit(releaseLimit+5);
  }

  return(
    <ReleaseListComp>
      <ReleaseListHead>
        <ReleaseListTitle>
          발매 정보 
          <ReleaseListElse>{withComma(releaseData.doneData.length + releaseData.liveData.length)}</ReleaseListElse>
        </ReleaseListTitle>
        <LiveOrDone>
          <LiveBtn isLive={liveToggle} onClick={liveToggleHandler}>진행중</LiveBtn>
          <SepVerti></SepVerti>
          <DoneBtn isLive={liveToggle} onClick={liveToggleHandler}>종료</DoneBtn>
        </LiveOrDone>
      </ReleaseListHead>
      <ReleaseContainer>
        {!liveToggle ? 
          <>
          {releaseData.liveData.slice(0,releaseLimit).map((each, idx) => 
            <ReleaseEach key={each.id} data={each} index={idx} isDone={false} />)}
          {releaseLimit < releaseData.liveData.length ?
            <BtnBox>
              <ReuseBtn content={'더 보기'} clickEvent={showMore} type={'black'} />
            </BtnBox>
            :<></>}
          </>
          :
          <>
            {releaseData.doneData.slice(0,releaseLimit).map((each,idx) =>
              <ReleaseEach key={each.id} data={each} index={idx} isDone={true} />)}
            {releaseLimit < releaseData.doneData.length ?
              <BtnBox>
                <ReuseBtn content={'더 보기'} clickEvent={showMore} type={'black'}/>
              </BtnBox>
              :<></>}
          </>
        }
      </ReleaseContainer>
    </ReleaseListComp>
  )
}

export default ReleaseList;

const ReleaseListComp = styled.section`
  width: 94%;
  max-width: 400px;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0px 20px;
  }
`
const ReleaseListHead = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
const ReleaseListTitle = styled.div`
  font-size: ${({theme}) => theme.fontSize.font_14};
  font-weight: ${({theme}) => theme.fontWeight.bold};
`
const ReleaseListElse = styled.span`
  margin-left: 4px;
  font-weight: ${({theme}) => theme.fontWeight.medium};
`
const LiveOrDone = styled.div`
  display: flex;
  font-size: ${({theme}) => theme.fontSize.font_14};
  font-weight: ${({theme}) => theme.fontWeight.medium};
`
const LiveBtn = styled.div`
  color: ${({isLive,theme}) => isLive ? theme.colors.gray_dark : theme.colors.black};
  cursor: pointer;
`
  const DoneBtn = styled.div`
  color: ${({isLive,theme}) => isLive ? theme.colors.black : theme.colors.gray_dark};
  cursor: pointer;
`
const SepVerti = styled.div`
  width: 1px;
  height: 14px;
  margin: 0px 8px;
  background-color: ${({theme}) => theme.colors.gray};

`
const ReleaseContainer = styled.article`
  display: flex;
  flex-direction: column;
`
const BtnBox = styled.div`
  height: 40px;
  margin-top: 20px;
`