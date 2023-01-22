import '../../assets/styles/Info.css';
function Info({person}) {
    return (
        <div className="info">
            <h3 className="datos">📞 {person.phone}</h3>
            <h3 className="datos">✉️ {person.email}</h3>
            <h3 className="datos">🏠 {person.address}</h3>
            <h3 className="datos">🏙️ {person.city}</h3>
        </div> 
            
     );
}

export default Info;