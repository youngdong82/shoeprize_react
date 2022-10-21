import React, { useEffect, useState } from 'react';
import style from 'styled-components';
import ReleaseEach from './ReleaseEach';
import ReuseBtn from './reuseable/ReuseBtn';

// 3. 5개씩 잘라야해

const ReleaseList = () => {
  const [releaseData, setReleaseData] = useState({liveData:[], doneData:[]});
  //로컬 json 파일 가져오기
  const getData = async() => {
    const res = await fetch('/static/releases/413.json', {
      method: 'GET',
    })
    const json = await res.json();
    const unsortedData = json.results;
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
    getData();
  },[])

  //진행 중(false) | 종료 토글
  const [liveToggle, setLiveToggle] = useState(false);
  const liveToggleHandler = () => {
    setLiveToggle(!liveToggle);
  }


  return(
    <ReleaseListComp>
      <ReleaseListHead>
        <ReleaseListTitle>
          발매 정보 
          <ReleaseListElse>{releaseData.doneData.length + releaseData.liveData.length}</ReleaseListElse>
        </ReleaseListTitle>
        <LiveOrDone>
          <LiveBtn isLive={liveToggle} onClick={liveToggleHandler}>진행중</LiveBtn>
          <SepVerti></SepVerti>
          <DoneBtn isLive={liveToggle} onClick={liveToggleHandler}>종료</DoneBtn>
        </LiveOrDone>
      </ReleaseListHead>
      <ReleaseContainer>
        {!liveToggle ? 
          releaseData.liveData.map((each, idx) => 
            <ReleaseEach key={each.id} data={each} index={idx} isDone={false} />)
          :
          releaseData.doneData.map((each,idx) =>
            <ReleaseEach key={each.id} data={each} index={idx} isDone={true} />)
        }
        <BtnBox>
          <ReuseBtn content={'더 보기'} />
        </BtnBox>
      </ReleaseContainer>
    </ReleaseListComp>
  )
}

export default ReleaseList;

const ReleaseListComp = style.section`
  width: 94%;
  max-width: 400px;
  min-width: 360px;
  display: flex;
  flex-direction: column;
`
const ReleaseListHead = style.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
const ReleaseListTitle = style.div`
  font-size: ${({theme}) => theme.fontSize.font_14};
  font-weight: ${({theme}) => theme.fontWeight.bold};
`
const ReleaseListElse = style.span`
  margin-left: 4px;
  font-weight: ${({theme}) => theme.fontWeight.medium};
`
const LiveOrDone = style.div`
  display: flex;
  font-size: ${({theme}) => theme.fontSize.font_14};
  font-weight: ${({theme}) => theme.fontWeight.medium};
`
const LiveBtn = style.div`
  color: ${({isLive,theme}) => isLive ? theme.colors.gray_dark : theme.colors.black};
  cursor: pointer;
`
  const DoneBtn = style.div`
  color: ${({isLive,theme}) => isLive ? theme.colors.black : theme.colors.gray_dark};
  cursor: pointer;
`
const SepVerti = style.div`
  width: 1px;
  height: 14px;
  margin: 0px 8px;
  background-color: ${({theme}) => theme.colors.gray};

`
const ReleaseContainer = style.article`
  display: flex;
  flex-direction: column;
`
const BtnBox = style.div`
  height: 40px;
  margin-top: 20px;
`