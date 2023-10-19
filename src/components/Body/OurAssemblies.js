import Button from "../Button"
import Container from "../Container"
import ComputerAva from "../../imgs/ComputerAva.svg"
import ArrowRight from "../../imgs/arrow-right.svg"


function Computer({name, discription}){
    return(
       <Container classstyle="ComputerBox">
        <img src={ComputerAva}/>
         <h1>{name}</h1>
         <p>{discription}</p>
         <Button
           text="More"
           style={buttonMorestyle}
         />
        </Container>
    );
}


function OurAssemblies(){
    return(
    <Container classstyle="OurAssemblies">
        <h1>Our Assemblies</h1>
        <Container classstyle="ComputersContainer">
            <Computer
            name = "Gaming"
            discription= "Our gaming computers are not only powerful but also stylish. The modern and aesthetic design gives the device..."
            />
            <Computer
            name = "Work"
            discription= "The work computer is a reliable tool for daily tasks, providing efficient data processing and multitasking capabilities...."
            />
            <Computer
             name= "Study"
             discription= "A computer for studying is a crucial tool in education, providing access to extensive educational resources and..."
            />
        </Container>
    </Container>
    );
}

export default  OurAssemblies


const buttonMorestyle = {
   padding: 0,
   border: "none",
   fontSize: 18,
   background: `url(${ArrowRight}) no-repeat`,
   backgroundPosition: "left",
   width: 67,
   textAlign: "end"
   
}