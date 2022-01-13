import styled from "styled-components";


export const ContentPage = styled.div`
    padding: 2rem 4rem 2rem 4rem;
    display:grid;
    grid-template-columns: 1fr 1fr;

    @media (min-width: 100px) and (max-width: 600px){
        grid-template-columns: 1fr;
    }

    && h1{
        margin: 16px 8px 16px 0px;
        text-align:right;
    }
    && p{
        text-align:right;
    }
`

export const InputSeacher = styled.input`
    padding: 0.8rem;
    border:none;
    background:#FFF;
    font-size:18px;
    font-weight:bold;
`

export const TextArea = styled.textarea`
    padding: 0.4rem;
    border:  none;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.textSecundary};
    min-width: 380px;
    min-height: 200px;
    font-size: 16px;
    border-radius: 8px;
    padding: 16px;
    @media (min-width: 100px) and (max-width: 600px){
        min-width: 300px;
    }
`