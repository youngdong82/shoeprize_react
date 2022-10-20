import React from 'react';
import style from 'styled-components'

const ReuseBtn = ({content, clickEvent}) => {
  return(
    <ReuseBtnComp onClick={clickEvent}>
      {content}
    </ReuseBtnComp>
  )
}

export default ReuseBtn;

const ReuseBtnComp = style.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`