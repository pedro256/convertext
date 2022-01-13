import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding:1rem;
    width: 100%;
    display: grid;
    grid-template-columns: 5fr 1fr;

`

export const NavBarContainer = styled.nav`
    padding: 0.4rem;
    display: flex;
    justify-content:center;
    width:100%;
    
    @media (min-width: 100px) and (max-width: 600px){
        display: block;
    }
`

export const NavItem = styled.div`
    display: block;
    margin: 2px 16px 2px 16px;
    text-align:center;

    @media (min-width:100px) and (max-width: 600px){
        margin: 16px 2px 16px 2px;
    }

    && h4{
        text-transform:uppercase;
        
    }
`