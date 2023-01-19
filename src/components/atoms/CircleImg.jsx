import '../../assets/styles/CircleImg.css';

function CircleImg({route}) {
    return ( 
        <div className="divImg">
            <img className="imgPerfil" src={route} alt="Imagen de perfil" />
        </div>

     );
}

export default CircleImg;