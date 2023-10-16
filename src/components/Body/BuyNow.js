import Img from "../../imgs/Img.svg"
import Button from "../Button";
function BuyNow(){
  return(
     <section className="BuyNow">
         <hr/>
         <div className="TextBox">
             <h1>Powerful, stylish, innovative!</h1>
             <p>Already assembled and cool PC setup that will allow you to play anything in ultra quality!</p>
             <Button
               text={"Buy now"}
               style={buttonstyle}
             />
                      <div style={{width: 270,
            height: 60, 
            borderBottom: "1px solid black"}}></div>
         </div>
         <span className="ImgBox">
         <img src={Img}/>
         </span>
     </section>
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