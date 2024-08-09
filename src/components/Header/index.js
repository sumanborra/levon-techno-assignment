
import { CgProfile } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import {Link} from "react-router-dom"
import LevonContext from "../../context/LevonContext";


import "./index.css"

const Header = () =>{

        return (
            <LevonContext.Consumer>
                { value => {
                    const{isDarkMode,changeIsDarkMode} = value
                   const backgroundColor = isDarkMode=== true? "dark":"light"
                    const changeTheme = () =>{
                        changeIsDarkMode();
                    }
            return (<div className={`header-container ${backgroundColor}`}>
                <div className="profile-image-text-container">
                <Link className="link-custom" to="/"><CgProfile size={30}/></Link>
                <Link className="link-custom" to="/"><p className="profile-text">Levon</p></Link>
                </div>
                <div className="notification-container">
                    {isDarkMode === false && <button type="button" className="button-darkmode" onClick={changeTheme}><MdDarkMode size={30}/></button>}
                    {isDarkMode === true && <button type="button" className="button-darkmode" onClick={changeTheme}><MdLightMode size={30} color="#ffffff"/></button>}
                <Link className="link-custom" to="/notification"><IoNotifications size={30}/></Link>
                <Link className="link-custom" to="/messages"><IoChatbubbleEllipsesSharp size={30}/></Link>
                </div>
                
            </div>
            )
                }
            }
            </LevonContext.Consumer>
        )
}
export default Header;