import React from 'react';
import style from 'styled-components'
import logo from '../../asset/shoeprize_logo.png'

const Header = () => {
  return(
    <HeaderComp>
      <LogoImg src={logo} alt='logo' />
    </HeaderComp>
  )
}

export default Header;

const HeaderComp = style.header`
  width: 100vw;
  height: ${Math.round(56/1080 * 100)}%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${Math.floor(40/1920*100)}%;
  border-bottom: 1px solid ${({theme}) => theme.colors.gray};
  @media screen and (max-width: 768px) {
    height: ${Math.round(56/667 * 100)}%;
    justify-content: center;
    padding: 0px;
    border-bottom: none;
  }
`
const LogoImg = style.img`
  width: ${Math.ceil(122/1920 * 100)}%;
  min-width: 80px;
  @media screen and (max-width: 768px) {
    width: ${Math.ceil(116/375 * 100)}%;
  }
`