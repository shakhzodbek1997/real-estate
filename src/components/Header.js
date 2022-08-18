import React from 'react'
import styled from 'styled-components';

const Header = (props) => {
  return (
    <Nav>
        <Logo>
            <img src='/images/logo.svg' alt='Disney Plus Logo' />
        </Logo>

        <NavMenu>
            <a href='/home'>
                <img src='/images/home-icon.svg' alt='Home' />
                <span>HOME</span>
            </a>
            <a href='/home'>
                <img src='/images/search-icon.svg' alt='Home' />
                <span>SEARCH</span>
            </a>
            <a href='/home'>
                <img src='/images/watchlist-icon.svg' alt='Home' />
                <span>WATCHLIST</span>
            </a>
            <a href='/home'>
                <img src='/images/original-icon.svg' alt='original' />
                <span>ORIGINALS</span>
            </a>
            <a href='/home'>
                <img src='/images/movie-icon.svg' alt='movie' />
                <span>MOVIES</span>
            </a>  
            <a href='/home'>
                <img src='/images/series-icon.svg' alt='series' />
                <span>SERIES</span>
            </a>    
        </NavMenu>
    </Nav>
  )
}

const Nav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;  /** vertically centered */
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;  /** header always will be on top of the web site */
`;

const Logo = styled.div`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img{
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img{
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
    }

    span{
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;


        &::before{
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: '';
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
        }
    }

    &:hover{
        span::before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }
  }

  @media (max-width: 768px){  /** max-width: 768 -->> it will works when screen will be small than 768 */  /** if min-width: 768px --> the code works when the screen size bigger than 768 */
    display: none;
  }
`;

export default Header;