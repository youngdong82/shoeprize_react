import React, { useState } from 'react';
import styled from 'styled-components';
import { BiCopy } from 'react-icons/bi'

const CopyIcon = ({ data, size }) => {
  const [isShow, setIsShow] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(data)
      .then(() => console.log('text')).catch(err => console.log(err))
    setIsShow(true)
    setTimeout(() => setIsShow(false),2000);
  }
  return(
    <>
    <IconBox>
      { isShow ?
        <MessageArrow>
          <Message>
          복사 완료!
          </Message>
          <Arrow />
        </MessageArrow>
        :<></>
      }
      <BiCopy size={size} onClick={copy} />
    </IconBox>
    </>
  )
}


export default CopyIcon;

const IconBox = styled.span`
  position: relative;
  top: -2px;
  display: flex;
  color: ${({theme}) => theme.colors.gray_dark};
  margin-left: 4px;
  cursor: pointer;
`
const MessageArrow = styled.div`
  position: absolute;
  left: -25px;
  top: -38px;
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Message = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({theme}) => theme.colors.gray};
  border-radius: 3px;
  background-color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSize.font_12};
`
const Arrow = styled.div`
  position: absolute;
  left: 30px;
  top: 25.5px;
  width: 10px;
  height: 10px;
  background-color: ${({theme}) => theme.colors.white};
  border-right: 1px solid ${({theme}) => theme.colors.gray};
  border-bottom: 1px solid ${({theme}) => theme.colors.gray};
  transform: rotate(45deg);
`