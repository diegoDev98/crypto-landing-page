import styled from "styled-components";

export const WhyUsCont = styled.div`

width:100vw;
margin-top:100px;
position:relative;
background:#1a1a1a;
display:flex;
flex-direction:column;

h2 {
    color:white;
    text-align:center;
}
h4 {
    color:#b3b3b3;
    text-align:center;
}
div {
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap:50px;
   
    div {
        margin:50px 0 100px 0;
        h3 {
            font-size:1.2rem;
            color:white;
            text-align:center;
            margin:0;
        }
        h4 {
            font-size:.84211rem;
            text-align:center;
            max-width:220px;
            margin:0;
        }
        display:flex;
        flex-direction:column;
        gap:20px;
    }
    @media only screen and (max-width:768px) {
        flex-direction:column;
        gap:10px;
        margin-bottom:100px;
        div {
            margin:0;
        }
    }
}
&:after {
    content: "";
    position: absolute;
    bottom: -60px;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top,rgba(255,255,255,0),rgb(69 25 110));
    -webkit-filter: blur(20px);
    filter: blur(30px);
  }

`