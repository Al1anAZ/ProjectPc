import Img from "../../imgs/Img.svg"
import Button from "../UI/Button";
import Container from "../UI/Container";
function BuyNow(){
  return(
     <Container classstyle="BuyNow">
         <Container classstyle="BuyNowTextBox">
         <Container style={{width: 70,
            borderBottom: "1px solid black"}}></Container>
             <h1>Powerful, stylish, innovative!</h1>
             <p>Already assembled and cool PC setup that will allow you to play anything in ultra quality!</p>
             <Container style={{height: 55}}>
             <Button
               text={"Buy now"}
               style={buttonstyle}
               classstyle="Buy"
             />
             </Container>
            <Container style={{width: 270,
            height: 80, 
            borderBottom: "1px solid black"}}></Container>
         </Container>
         <Container classstyle="ImgBox">
         <img src={Img}/>
         </Container>
     </Container>
  );
}
export default BuyNow



const buttonstyle = {
    background: 'black',
    color: 'white',
    borderRadius: 10,
    width: 170,
    fontSize: 20
}