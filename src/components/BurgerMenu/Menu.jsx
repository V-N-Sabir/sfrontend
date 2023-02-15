import React from "react"
import InputComponent from "../InputComponent"
import CollapseApp from "../../pages/sales/Collapse"
//import NavigationRef from "../NavigationRef"

const Menu = ({active,setActive, header}) => {
    return (

        <div className={active ? "menu active":"menu"} onClick={() =>setActive(false)}>
            <div className="blur"></div>
            <div className="menu__content" onClick={e => e.stopPropagation()}>

                <div className="menu__header">{header}</div>
        {/** <ul>{items.map(item => {return <li>{item.value}</li>})}</ul> */}
                <InputComponent type='tekst' placeholder='поиск товаров ...'  clName='inputSearch'/>

                <CollapseApp />
                {/*<NavigationRef/>*/}
                </div>

                
        </div>

    )
} 

export default Menu