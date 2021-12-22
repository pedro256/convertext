import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        background-color:${props => props.theme.colors.background};
        color:${props => props.theme.colors.text}
    }
`