
import React from "react"
import  Menu  from "./Menu"
import "./index.css"

const BurgerMenu = () => {

    const [menuActive, setMenuActive] = React.useState(false)

    //const items = [{value: "Главная"}, {value: "О нас"}, {value: "Прочее"},{value: "Услуги"},]

    return (
        <>

    <nav>
        <div className="burger-btn" onClick={()=> setMenuActive(!menuActive)}>
            <span></span>
        </div>

    </nav>
    <Menu active={menuActive} setActive={setMenuActive} header={"Меню"}/>

   

      </>

    )
} 

export default BurgerMenu