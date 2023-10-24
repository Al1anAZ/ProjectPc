import ArrowUp from "../../imgs/arrow-up.svg"
import ArrowDown from "../../imgs/arrow-down.svg"
import Container from "../UI/Container";
import { useState } from "react";

function CustomSelect({options,classstyle,name,setvaluetopcobj,startvalue}){
    const [showOptions, setshowOptions] = useState(false);
    const [inputValue, setInputValue] = useState(startvalue)
     const option_list  = options.map(option=>
        <div className="OptionBox" onClick={()=> handleClickChooseOption(option.title)} key={option.id}><p><span>{option.title}</span></p></div>
        );
  
    function handleClickShowOptions(){
       setshowOptions(!showOptions)
    }
    function handleClickChooseOption(optvalue){
      setshowOptions(!showOptions)
      setInputValue(optvalue)
      setvaluetopcobj(name,optvalue)
   }
     return(
           <Container classstyle={`CustomSelectContainer ${showOptions ? `opened` : ``}`}>
                <Container classstyle={`CustomSelectBox ${showOptions ? `opened` : ``}`} tIndex={1}>
                 <input className={classstyle} value={inputValue} readOnly name={name}></input>
              <img src={showOptions ? ArrowUp : ArrowDown} style={{
     float: "right",
     marginTop: 15,
     cursor: "pointer",
             }} onClick={handleClickShowOptions}/>
             </Container>
             {
             showOptions&&
              <Container classstyle="CustomSelectOptions">
               <Container>{option_list}</Container>
             </Container>
             }
           </Container>
           
     );
  }

export default CustomSelect