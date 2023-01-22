import Section from "../molecules/Section";
import '../../assets/styles/Content.css';
function Content({person}) {
    return ( 
        <div className="content">
            <Section atribute={person.about}/>
            <Section atribute={person.aptitudes}/>
            <Section atribute={person.skills}/>
            <Section atribute={person.courses}/>
            <Section atribute={person.languages}/>

        </div>
     );
}

export default Content;