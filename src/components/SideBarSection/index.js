
import { useState } from "react";
import {Link} from "react-router-dom"
import { IoMdMenu } from "react-icons/io";
import "./index.css"

const SideBarSection = () =>{

    const[menuButton, setMenuButton] = useState(false)
    const clickedMenuButton = () =>{
        setMenuButton(prevValue => !prevValue)
    }
        return (
            <>
             <div className="harmburget-menu">
                <button className="button-harm-burger-menu" onClick={clickedMenuButton}><IoMdMenu color="#e439ed" size={30}/></button>
               { menuButton === true && (<ul className="menu-list-container">
                    <Link to="/overview"  className="link-cusstom-style"><li className="list-itrms-menu-bar">Overview</li></Link>
                    <Link to="/analytics" className="link-cusstom-style"> <li className="list-itrms-menu-bar">Analytics</li></Link>
                   <Link to="/settings" className="link-cusstom-style"> <li className="list-itrms-menu-bar">Settings</li></Link>
                </ul>)
                }
            </div>
            <div className="side-bar-section-container">
                <ul className="list-container-side-bar">
                <Link to="/overview" className="link-cusstom-style"> <li className="list-itrms-side-bar">Overview</li></Link>
                <Link to="/analytics" className="link-cusstom-style"> <li className="list-itrms-side-bar">Analytics</li></Link>
                <Link to="/settings" className="link-cusstom-style"> <li className="list-itrms-side-bar">Settings</li></Link>
                </ul>
            </div>
            </>
        )
}
export default SideBarSection;