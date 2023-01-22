import InfoBar from "../components/molecules/InfoBar";
import Content from "../components/molecules/Content";
import '../assets/styles/LifeSheet.css';
import {data} from '../data/data'
function LifeSheet() {
    return ( 
        <div id="mainC">
            <InfoBar person={data}></InfoBar>
            <Content person={data}></Content>
        </div>
      );
}

export default LifeSheet;