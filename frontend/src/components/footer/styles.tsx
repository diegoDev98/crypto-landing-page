import styled from "styled-components";

export const FooterContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:40px;
    justify-content:space-evenly;
    margin:50px 0 100px;
    hr {
        border:5px solid white;
    }
    div {
        display:flex;
        flex-direction:column;
        gap:10px;
        h3 {
            color:white;
            margin:0;
        }
        p {
           color:#b3b3b3; 
           margin:0;
        }
    }
`