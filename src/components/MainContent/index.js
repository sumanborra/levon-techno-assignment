


import BardGraph from "../BardGraph";
import LineChartGraph from "../LineChartGraph";
import PieChartGraph from "../PieChartGraph";
import "./index.css";

const MainContent = () =>{

    return (
        <div className="main-content-container">
            <BardGraph/>
            <PieChartGraph/>
            <LineChartGraph/>
        </div>
    )
}
export default MainContent;