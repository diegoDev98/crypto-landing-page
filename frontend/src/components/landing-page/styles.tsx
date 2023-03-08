import styled, {keyframes} from 'styled-components'


export const MainContainer = styled.div`
    display:flex;
    color:white;
    padding: 50px 0 50px 100px;
    
    @media only screen and (max-width:768px){
      padding:0;
      display:block;
    }
`
export const MainLeftCont = styled.div`
    display:flex;
    flex-direction:column;
    color:white;

    h1 {
        color:white;
        font-size:48px;
        margin:0;
    }
    h2 {
        color:white;
        font-size:32px;
        margin:0 0 20px 0;
    }
    h3 {
        font-size:16px;
        color:#5C1A58;
        margin:0;
    }
`

const slide = keyframes`
  0% {
    width:50px;
    height:50px;
  }
  50% {
    width:150px;
    height:150px;
  }
  100% {
    width:50px;
    height:50px;
  }
`;
export const MainRightCont = styled.div`
   position:relative;
   display:flex;
   flex:1;
   justify-content:center;
   &:after {
    content:'';
    position:absolute;
    width:50px;
    height:50px;
    top:50%;
    left:50%;
    background-color:#B424B6;
    filter: blur(70px);
    z-index:-1;
    border-radius:50%;
    animation-name: ${slide};
    animation-duration: 5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
   }
   @media only screen and (max-width:1150px){
    position:absolute;
    z-index:-1;
    opacity:0.3
   }
   @media only screen and (max-width:768px){
    position:relative;
    width:570px;
   }
`

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap:10px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  background-color: #111111;
  border:2px solid white;
  border-radius:16px;
  max-width:200px;
  width:200px;
  margin-top:50px;
  &:hover {
    cursor:pointer;
    filter:invert(1);
  }
  div .download {
    font-size:12px;
  }
  div .store {
    font-size:16px;
  }
  &:before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    background-image: url("${(props:any) => props.url}");
    filter: ${({ invert }) => (invert ? 'invert(1)' : 'invert(0)')};
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const ButtonCont = styled.div`
  display:flex;
  gap:20px;
  @media only screen and (max-width:768px){
    flex-direction:column;
    gap:25px;
    margin:50px 0 0 50px ;
    button {
      margin:0;
    }
  }
`

//RIGHT CONTAINER

export const CryptoCircle = styled.div`
  width:${({width})=> width};
  height:${({height})=> height};
  z-index:${({zIndex})=> zIndex};
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  background: ${({background})=>background};
  border: ${({border})=>border};
  left: ${({left})=>left};
  bottom: ${({bottom})=>bottom};
  top: ${({top})=>top};
  right: ${({right})=>right};
  &:after {
    content: '';
    width: ${({afterWidth})=>afterWidth};
    height: ${({afterHeight})=>afterHeight};
    position: absolute;
    transform: translateY(${({afterTranslateY})=>afterTranslateY ? afterTranslateY : '0%'});
    bottom: 0;
    border:${({afterBorder})=>afterBorder ? afterBorder : ''};
    border-radius: 50%;
    box-shadow:${({afterBoxShadow})=>afterBoxShadow ? afterBoxShadow : ''};
    background:${({afterBackground})=>afterBackground ? afterBackground : ''};
    z-index:${({afterZIndex})=>afterZIndex ? afterZIndex : ''};
  }  
  svg {
    z-index:2;
    border-radius:50%;
    padding:${({svgPadding})=>svgPadding};
    background: ${({svgBackground})=>svgBackground}; 
  }

  &:before {
    content: '';
    background:${({beforeBg})=>beforeBg ? beforeBg : ''};    
    border-radius: 50%;
    width: ${({beforeWidth})=>beforeWidth ? beforeWidth : '71%'};
    height: 100%;
    z-index:${({beforeZIndex})=>beforeZIndex ? beforeZIndex : ''};
    position: absolute;
    box-shadow:${({beforeBoxShadow})=>beforeBoxShadow}; 
  }
`

export const TradesContentContainer = styled.div`
  display:flex;
  justify-content:space-evenly;
  margin-top:300px;
  @media only screen and (max-width:1150px){
    gap:20px;
    div {
      width:40vw;
   }
  @media only screen and (max-width:768px){
    flex-direction:column;
    align-items:center;
    margin-top:150px;
    div {
      width:90%;
    }
  }
  `
  
export const TradesDiv = styled.div`
z-index:200;
background-color:#100f0f;
display:flex;
flex-direction:column;
color:white;
justify-content:center;
align-items:center;
border:1px solid purple;
width:35%;
max-width:800px;
height:150px;
border-radius:16px;
position:relative;
overflow:hidden;
&:before {
  position:absolute;
  content:'';
  width:150px;
  height:100px;
  background:#f726f7;
  opacity:0.6;
  filter:blur(100px);
  border-radius:200px;
}
  &:first-of-type {
    &:before {
      left:100px;
    }
  }
h4 {
  color:grey;
}

  `




