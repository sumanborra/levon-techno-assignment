
import axios from "axios";
import { useState,useEffect } from "react";
import SideBarSection from "../SideBarSection"
import Header from "../Header"
import MainContent from "../MainContent"
import LevonContext from "../../context/LevonContext";

import Footer from "../Footer"
import "./index.css"

const Home = () =>{

    const[data, setData] = useState([])
    const[error, setError] = useState("")

    useEffect(() =>{
        const dataFetching = async () =>{

            try {
                const response = await axios.get('https://api.example.com/data');   
        
                setData(response.data);
              } catch (error) {
                setError(error);
              } 
        }
        dataFetching();

    },[])

    return(
        <LevonContext.Consumer>
            { value => {
                const{isDarkMode} = value
            const backgroundColor = isDarkMode?"Dark-home":"light-home";
       return (<div className="home-main-container">
            <Header/>
            <div className={`side-section-and-main-content-container ${backgroundColor}`}>
                <SideBarSection/>
                <MainContent/>
            </div>
            <Footer/>
            
        </div>
       )
        }
    }
        </LevonContext.Consumer>
    )
}
export default Home;