import Container from "../UI/Container";
import Button from "../UI/Button";
import Img from "../../imgs/Img.svg"
import { useState } from "react"

function Timer(){
   const [time, setTime] = useState(new Date)
    return(
      <p>{time.toLocaleTimeString()}</p>
    );
}

function SpecialOffer(){
   return(
    <Container classstyle="SpecialOffer">
      <Container classstyle="ImgBox">
       <img src={Img}/>
      </Container>
      <Container classstyle="SpecialOfferBox">
        <h2>Special offer</h2>
         <Timer
         />
        <Button text="Buy now"
         style={buttonstyle}
         classstyle="Buy"
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