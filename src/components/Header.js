import React from 'react';
import style from 'styled-components'

const Header = () => {
  const viewportWidth = window.innerWidth;

  return(
    <HeaderComp width={viewportWidth}>
      <LogoImg src={null} alt='logo' />
    </HeaderComp>
  )
}

export default Header;

const HeaderComp = style.header`
  width: 100vw;
  height: ${({width}) => width/1920 * 56}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  border-bottom: 1px solid black;
`
const LogoImg = style.img`
  width: ${({width}) => width/1920 * 116}px;
`