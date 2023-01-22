import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import '../../assets/styles/Section.css';
function Section({atribute}) {


    return (  
        <div className="section">
            <Title title={atribute.title}></Title>
            <Paragraph text={atribute.text}></Paragraph>

        </div>
    );
}

export default Section;