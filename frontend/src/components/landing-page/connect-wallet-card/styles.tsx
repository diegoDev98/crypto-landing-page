import styled, { keyframes } from "styled-components";
const hoverEffect = keyframes`
  0% {
    bottom:0;
    box-shadow:0px 0px 0px transparent;
  }
  100% {
    bottom:20px;
    box-shadow:2px 2px 10px #ff00f09e;
  }
`;

export const CardsContainer = styled.div`
display:flex;
justify-content:center;
gap:25px;
margin-top:100px;
`
export const Card = styled.div`
width:100px;
padding:20px 25px 0px;
display:flex;
justify-content:start;
align-items:center;
border:2px solid purple;
border-radius:16px;
color:white;
flex-direction:column;
position:relative;
gap:20px;
p {
    margin:0;
}
p:last-of-type {
    margin-bottom:20px;
}
#img {
    width: 25px;
    height: 25px;
    background-size: cover;
    background-image:url('https://coinstats.app/static/images/icons-more-arrow-light.svg')
}
&:before {
    content: "";
    display: inline-block;
    width: 100px;
    height: 100px;
    background-image: url("${(props:any) => props.url}");
    background-size: contain;
    background-repeat: no-repeat;
  }
  &:hover {
    cursor:pointer;
    animation: ${hoverEffect} 0.3s forwards;
    #img{
        background-image:url('https://coinstats.app/static/images/icons-more-arrow-orange.svg')
    }
  }
p:nth-of-type(1){
    color:#666666;
    text-shadow:2px 2px 5px black;
}
p:nth-of-type(2){
    display:flex;
    gap:10px;
    align-items:center;
    justify-content:center;
}
img {
    width:20px;
    filter:invert(1)
}
`