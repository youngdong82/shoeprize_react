import React from 'react';
import style,{ css } from 'styled-components'

const ReuseBtn = ({content, clickEvent, type}) => {
  return(
    <ReuseBtnComp onClick={clickEvent} type={type} >
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
  border-radius: 2px;
  line-height: 16px;
  ${({type, theme}) => {
    if(type === 'yellow'){
      return css`
        font-size: ${theme.fontSize.font_13};
        font-weight: ${theme.fontWeight.bold};
        background-color: ${theme.colors.yellow};
      `
    } else if(type === 'gray'){
      return css`
        font-size: ${theme.fontSize.font_13};
        font-weight: ${theme.fontWeight.semi_bold};
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.gray};
      `
    } else if(type === 'gray_done'){
      return css`
        color: ${theme.colors.gray_dark};
        font-size: ${theme.fontSize.font_13};
        font-weight: ${theme.fontWeight.semi_bold};
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.gray};
      `
    } else if(type === 'black'){
      return css`
        font-size: ${theme.fontSize.font_13};
        font-weight: ${theme.fontWeight.bold};
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.gray_deepdark};
      `
    }
  }}
`