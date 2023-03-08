import styled from "styled-components";

export const StatsSection = styled.div`
    width:100vw;
    background:green;
    display:flex;
    justify-content:center;
    position:relative;
    gap:100px;
    margin-bottom:200px;
    background: rgb(30,0,46);
    background: linear-gradient(-90deg, rgba(30,0,46,1) 0%, rgba(80,9,128,1) 35%, rgba(173,0,255,1) 100%);
    @media only screen and (max-width:768px) {
        flex-direction:column;
        gap:10px;
        margin-bottom:100px;
        div {
            display:flex;
            flex-direction:column;
            align-items:center;
            margin:0;
        }
    }
}
    div {
        text-align:center;
        color:white;
        p {
            max-width:200px;
            font-size:1rem;
            line-height:1.5;
        }
    }

`