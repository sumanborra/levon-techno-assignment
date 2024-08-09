
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import LevonContext from "../../context/LevonContext";

import "./index.css";

const Footer = () =>{

    return (
        <LevonContext.Consumer>
            { value => {
                const{isDarkMode} = value
          const backgroundColor = isDarkMode?"Dark-footer":"light-footer";
       return  (<div className={`footer-section-container ${backgroundColor}`}>
            <div className="social-network-container">
                <p className="social-link-text">Get Connected with us</p>
                <div className="social-icons-container">
                    <FaFacebook size={30}/>
                    <FaInstagramSquare size={30}/>
                    <FaLinkedin size={30}/>
                    <MdAttachEmail size={30}/>
                </div>
            </div>
            <hr className="hr-line"/>
            <p className="about-text">About</p>
            <p className="about-project">Levon assignment project with responsive in this project we analising widgets.
                the sidebar section have for navigating in different components using links.
            </p>
        </div>
       )
          }
          }
        </LevonContext.Consumer>
    )
}
export default Footer;