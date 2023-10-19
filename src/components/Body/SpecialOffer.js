import Container from "../Container"
import Button from "../Button"
import Img from "../../imgs/Img.svg"
function Timer({time}){
    return(
      <p>{time}</p>
    );
}

function SpecialOffer(){
   return(
    <Container classstyle="SpecialOffer">
      <Container classstyle="ImgBox">
       <img src={Img}/>
      </Container>
      <Container classstyle="SpecialOfferBox">
        <h1>Special offer</h1>
         <Timer
         time = "10:10:05"
         />
        <Button text="Buy now"
         style={buttonstyle}
        />
      </Container>
    </Container>
   );
}

export default SpecialOffer

const buttonstyle = {
    background: 'black',
    color: 'white',
    borderRadius: 10,
    width: 170,
    fontSize: 20
}