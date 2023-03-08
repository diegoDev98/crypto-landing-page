import styled from 'styled-components'

export const NavBar = styled.nav`

    display:flex;
    justify-content:space-evenly;
    align-items:center;
    max-width:1000px;
    width:80%;
    margin: 50px 0 100px 50px;
    @media only screen and (max-width:1150px){
      width: 100vw;
    margin: 50px 0 0 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    @media only screen and (max-width:768px){
      margin:50px 0 50px 0;
    }
`
export const Logo = styled.a`
    color:white;
    font-size:24px;
    text-decoration:none;
    position:relative;
    flex:2;
    sub {
        font-size:15px;
        color:#AA23AB;
    }
    &::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 70%;
        height: 2px;
        background-color: white;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease-in-out;
      }
    
      &:hover::after {
        transform: scaleX(1);
      }
`
export const NavLink = styled.a`
    color:white;
    font-size:16px;
    text-decoration:none;
    position:relative;
    flex:1;
    &::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 80%;
        height: 2px;
        background-color: white;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease-in-out;
      }
    
      &:hover::after {
        transform: scaleX(1);
      }
`;

export const NavLinkContainer = styled.ul`
    flex:8;
    display: flex;
    flex: 8;
    gap: 40px;
    list-style-type:none;
`