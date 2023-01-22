function Parragraph({text}) {
    return ( 
        <>
            {
            text.map(item => (<p className="paragraph">🔸{item}</p>))
            }
        </>
        
     );
}

export default Parragraph;