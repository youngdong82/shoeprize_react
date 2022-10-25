import React, { useState } from 'react';
import styled from 'styled-components';

const MoreContent = ({data}) => {
  const [isLimit, setIsLimit] = useState(true);

  const limitData = (str) => {
    if(isLimit){
      return str.slice(0, 110);
    } else{
      return str.slice(0, data.length);
    }
  };

  const toggleLimit = () => {
    setIsLimit(false);
  }

  return(
    <>
      {limitData(data)}
      { isLimit ? 
        <MoreComp onClick={toggleLimit}>더보기</MoreComp>
        :<></>
      }
    </>
  )
}

export default MoreContent;

const MoreComp = styled.span`
  margin: 0px 4px;
  font-size: ${({theme}) => theme.fontSize.font_13};
  font-weight: ${({theme}) => theme.fontWeight.bold};
  box-shadow: -6px 3px 8px 4px ${({theme}) => theme.colors.white};
  line-height: 18px;
  cursor: pointer;
  word-break: keep-all;
`