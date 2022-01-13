import React, { useContext } from "react"
import Switch from 'react-switch'
import { GlobalContext } from "../../context/global.context"

import {FiSun} from 'react-icons/fi'
import {FaRegMoon} from 'react-icons/fa'
import {MdOutlineTextFields} from 'react-icons/md'
import {TiSortNumerically} from 'react-icons/ti'

import { HeaderContainer, NavBarContainer, NavItem } from "./styles"


const Header:React.FC = ()=>{


    const {contextTheme,onToggleTheme} = useContext(GlobalContext)


    return (
        <HeaderContainer>
            <NavBarContainer>
                <NavItem>
                    <h4>Texto</h4>
                    <MdOutlineTextFields size={28}/>
                </NavItem>
                <NavItem>
                    <h4>Números</h4>
                    <TiSortNumerically  size={28} />
                </NavItem>
                
                
            </NavBarContainer>
            <div>
                <Switch
                checked={contextTheme.title=='dark'?false:true}
                onChange={()=>{onToggleTheme()}}
                handleDiameter={0}
                onColor="#FCD440"
                offColor="#F2F2F2"
                onHandleColor="#2e2e2e"
                offHandleColor="#525151"
                checkedIcon={
                    <FiSun size={28}/>
                }
                uncheckedIcon={
                    <FaRegMoon size={28} />
                }
                />
            </div>
        </HeaderContainer>
    )
}
export default Header