import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import Icon from './icon';


const NavWrapper = styled.nav`
background: #ffffff;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  > ul{
    display: flex;
    >li{
      width: 33.3333%;
      text-align: center;
      >a{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px 0;
      }
      .icon{
       width:24px;
       height: 24px;
      }
      .selected{
        color:rgba(255,132,68) ;
        .icon{
          fill:rgba(255,132,68);
        }
      }
    }
  }
`

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
            <li>
           
            <NavLink to="/tags" activeClassName="selected">
            <Icon name="tags"/>标签页</NavLink>
            </li>
          <li>
          
            <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>记账页</NavLink>
            </li>
          <li>
          
            <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>统计页</NavLink>
            </li>
          </ul>
        </NavWrapper>
    )
}
export default Nav;