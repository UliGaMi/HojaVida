import CircleImg from "../atoms/CircleImg";
import '../../assets/styles/InfoBar.css';
import Info from "../atoms/info";

function InfoBar({person}) {
    return ( 
        <div className="infoBar">
            <div className="principal">
                <CircleImg route={person.img}></CircleImg>
                <h2 className="nombre">{person.name}</h2>   
            </div>
            <Info person={person}></Info>

            

        </div>
     );
}

export default InfoBar;