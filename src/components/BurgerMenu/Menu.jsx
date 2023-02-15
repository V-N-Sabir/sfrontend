import React from "react"
import InputComponent from "../InputComponent"
import CollapseApp from "../../pages/sales/Collapse"
import NavigationRef from "../NavigationRef"

const Menu = ({active,setActive, header}) => {
    return (

        <div className={active ? "menu active":"menu"} onClick={() =>setActive(false)}>
            <div className="blur"></div>
            <div className="menu__content" onClick={e => e.stopPropagation()}>

                <div className="menu__header">{header}</div>
                <InputComponent type='tekst' placeholder='поиск товаров ...'  clName='inputSearch'/>

                <div className="colps">
               <NavigationRef/>
               </div>
               
                <CollapseApp />
               
                </div>

                
        </div>

    )
} 

export default Menu