import CircleImg from "../atoms/CircleImg";
import '../../assets/styles/InfoBar.css';
function InfoBar({person}) {
    return ( 
        <div className="infoBar">
            <div className="principal">
                <CircleImg route={person.img}></CircleImg>
                <h2 className="nombre">{person.name}</h2>   
            </div>
            <h3 className="datos">📞 {person.phone}</h3>
            <h3 className="datos">✉️ {person.email}</h3>
            <h3 className="datos">🏠 {person.address}</h3>

            

        </div>
     );
}

export default InfoBar;