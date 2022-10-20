import React from 'react';
import style from 'styled-components'
import logo from '../asset/shoeprize_logo.png'

const Header = () => {
  return(
    <HeaderComp>
      <LogoImg src={logo} alt='logo' />
    </HeaderComp>
  )
}

export default Header;

const HeaderComp = style.header`
  position: absolute;
  width: 100vw;
  height: ${Math.round(56/1920 * 100)}%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${Math.floor(40/1920*100)}%;
  border-bottom: 1px solid black;
`
const LogoImg = style.img`
  width: ${Math.ceil(122/1920 * 100)}%;
`