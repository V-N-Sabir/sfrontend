
import React from "react"
import  Menu  from "./Menu"
import "./index.css"
import { useSelector } from "react-redux"
import { getCountProduct } from "../../redux/slices/productSlice"

const BurgerMenu = () => {

    const [menuActive, setMenuActive] = React.useState(false)

    const {routeLoading} = useSelector(getCountProduct)

    React.useEffect(() => { 
        setMenuActive(routeLoading)
    }, [routeLoading])


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