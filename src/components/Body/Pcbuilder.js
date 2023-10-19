import Button from "../Button";
import Container from "../Container";
import { useState } from "react";
import Arrow from "../../imgs/arrow-down.svg"
function CustomSelect({startvalue,options,classstyle}){
   const [showOptions, setshowOptions] = useState(false);
   const [inputValue, setInputValue] = useState(startvalue)
   const option_list  = options.map(option=>
      <div className="OptionBox" onClick={()=> handleClickChooseOption(option)}>{option}</div>
      );

  function handleClickShowOptions(){
     setshowOptions(!showOptions)
  }
  function handleClickChooseOption(optvalue){
     setshowOptions(!showOptions)
     setInputValue(optvalue)
  }

   return(
         <Container classstyle="CustomSelectBox" tIndex={1}>
         <input className={classstyle} value={inputValue} readOnly></input>
         <img src={Arrow} style={{
            float: "right",
            marginTop: 15,
            cursor: "pointer",
            transform: showOptions === true ? "rotate(180deg)" : "rotate(0)"
         }} onClick={handleClickShowOptions}/>
         {showOptions && <Container classstyle="CustomSelectOptions">{option_list}</Container>}
         </Container>
   );
}


function PcBuilder(){
   return(
    <Container classstyle="Pcbuilder">
       <Container classstyle="PcbuilderTextBox">
        <h1>
        PC Builder
        </h1>
        <p>
        Build the computer of your dreams. Choose the components you need and we'll take care of the rest!
        </p>
       </Container>
      <form name="">
      <Container classstyle='SelectsBox'>
        <CustomSelect 
          startvalue="Graphic Card"
          classstyle="CustomSelect"
          formname="BuildComputer"
          options={['RTX 4090','RTX 4080','RTX 4070','RTX 4060 TI','RTX 3090','RTX 3080','RTX 3070','RTX 3060','RTX 3050']}
        />
        <CustomSelect 
          startvalue="Graphic Card"
          classstyle="CustomSelect"
          formname="BuildComputer"
          options={['RTX 4090','RTX 4080','RTX 4070','RTX 4060 TI','RTX 3090','RTX 3080','RTX 3070','RTX 3060','RTX 3050']}
        />
        <CustomSelect 
          startvalue="Graphic Card"
          classstyle="CustomSelect"
          formname="BuildComputer"
          options={['RTX 4090','RTX 4080','RTX 4070','RTX 4060 TI','RTX 3090','RTX 3080','RTX 3070','RTX 3060','RTX 3050']}
        />
        <CustomSelect 
          startvalue="Graphic Card"
          classstyle="CustomSelect"
          formname="BuildComputer"
          options={['RTX 4090','RTX 4080','RTX 4070','RTX 4060 TI','RTX 3090','RTX 3080','RTX 3070','RTX 3060','RTX 3050']}
        />
        <CustomSelect 
          startvalue="Graphic Card"
          classstyle="CustomSelect"
          formname="BuildComputer"
          options={['RTX 4090','RTX 4080','RTX 4070','RTX 4060 TI','RTX 3090','RTX 3080','RTX 3070','RTX 3060','RTX 3050']}
        />
        <CustomSelect 
          startvalue="Graphic Card"
          classstyle="CustomSelect"
          formname="BuildComputer"
          options={['RTX 4090','RTX 4080','RTX 4070','RTX 4060 TI','RTX 3090','RTX 3080','RTX 3070','RTX 3060','RTX 3050']}
        />
        <CustomSelect 
          startvalue="Graphic Card"
          classstyle="CustomSelect"
          formname="BuildComputer"
          options={['RTX 4090','RTX 4080','RTX 4070','RTX 4060 TI','RTX 3090','RTX 3080','RTX 3070','RTX 3060','RTX 3050']}
        />
        <CustomSelect 
          startvalue="Graphic Card"
          classstyle="CustomSelect"
          formname="BuildComputer"
          options={['RTX 4090','RTX 4080','RTX 4070','RTX 4060 TI','RTX 3090','RTX 3080','RTX 3070','RTX 3060','RTX 3050']}
        />
      </Container>
      <Container classstyle='SelectsButtonsBox'>
      <Button
       text="All boxes"
       style={buttonstyleAllboxes}
      />
      <Button
       type="submit"
       text="Next step"
       style={buttonstyleSubmit}
      />
      </Container>
      </form>
    </Container>
   );
}

export default PcBuilder


const buttonstyleAllboxes ={
  border: "none",
  fontSize: 16,
  color: "rgba(101, 101, 101, 1)",
  width: 170,
}
const buttonstyleSubmit ={
   borderRadius: 10,
   border: "1px solid rgba(154, 154, 154, 1)",
   color: "rgba(101, 101, 101, 1)", 
   fontSize: 18,
   width: 170
}