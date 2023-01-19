import InfoBar from "../components/molecules/InfoBar";
import '../assets/styles/LifeSheet.css';
function LifeSheet() {
    const person1 = {
        img: './src/assets/imgs/Foto.jpg',
        name : 'Ulises Gálvez Miranda',
        phone : '9651032159',
        email : 'ulises.galvez@hotmail.com',
        address : 'Av. Gardenias #13 Villaflores'
    }
    return ( 
        <div>
            <InfoBar person={person1}></InfoBar>
        </div>
    );
}

export default LifeSheet;