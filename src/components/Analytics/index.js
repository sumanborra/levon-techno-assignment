
import { SiGoogleanalytics } from "react-icons/si";

import Header from "../Header";
import Footer from "../Footer";
import SideBarSection from "../SideBarSection";
import LevonContext from "../../context/LevonContext";

import "./index.css"

const Analytics = () =>{

    return (
        <LevonContext.Consumer>
            {value =>{
                const{isDarkMode} = value;
                const backgroundColor1 = isDarkMode?"dark-analytic":"light-analytic";
                const colors = isDarkMode?"#3e1adb":"#000000";
                const textColor = isDarkMode?"blue-color":"black-color";
            
       return (
        <>
        <Header/>
        <div className={`middle-section-container ${backgroundColor1}`}>
                <SideBarSection/>
        
        <div className={`analytics-view-container ${backgroundColor1}`}>
            <SiGoogleanalytics size={80} color={colors}/>
            <p className={`over-view-text ${textColor}`}>Analytics</p>
        </div>
        </div>
        <Footer/>
        </>
            )
            }
        }
        </LevonContext.Consumer>
    )

}
export default Analytics;