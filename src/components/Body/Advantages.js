import Container from "../UI/Container";
import Ellipse from "../../imgs/Ellipse 1.svg"

function Advantage({title,discription}){
  return(
    <Container  classstyle="AdvantageBox">
      <img src={Ellipse}/>
      <h3>{title}</h3>
      <p>{discription}</p>
    </Container>
  );
}

function Advantages(){
 return(
    <Container classstyle="Advantages">
            <h2>Our Advantages</h2>
       <Container classstyle="AdvantagesContainer">
        <Advantage
           title="Quality service"
           discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
        />
        <Advantage
           title="Experience"
           discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
        />
         <Advantage
           title="Original components"
           discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
        />
      </Container>
    </Container>
 );
}

export default Advantages