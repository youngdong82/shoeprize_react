import React from 'react';
import style from 'styled-components';
import ReleaseEach from './ReleaseEach';
import ReuseBtn from './reuseable/ReuseBtn';

const ReleaseList = () => {
  const dummyList = [];
  return(
    <ReleaseListComp>
      <ReleaseListHead>
        <ReleaseListTitle>
          발매 정보 
          <ReleaseListElse>50</ReleaseListElse>
        </ReleaseListTitle>
        <LiveOrDone>
          <LiveOrDoneEach>진행중</LiveOrDoneEach>
          <SepVerti></SepVerti>
          <LiveOrDoneEach>종료</LiveOrDoneEach>
        </LiveOrDone>
      </ReleaseListHead>
      <ReleaseContainer>
        {dummyList.map((each, idx) => {
          if(idx === 0){
            return <ReleaseEach data={each} />
          } else{
            return(
              <>
                <ReleaseEach data={each} />
                <Sep/>
              </>
            )
          }
        })}
        <ReuseBtn content={'더 보기'} />
      </ReleaseContainer>
    </ReleaseListComp>
  )
}

export default ReleaseList;

const ReleaseListComp = style.section`
  width: ${({width}) => width/1920 * 400}px;
  min-width: 400px;
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

`
const ReleaseListElse = style.span`

`
const LiveOrDone = style.div`
  display: flex;
`
const LiveOrDoneEach = style.div`
  padding: 2px 10px;
`
const SepVerti = style.div`
  width: 1px;
  height: 100%;
  background-color: black;
`
const ReleaseContainer = style.article`
  display: flex;
  flex-direction: column;
`
const Sep = style.hr`
  width: 100%;
  margin: 20 0px;
`