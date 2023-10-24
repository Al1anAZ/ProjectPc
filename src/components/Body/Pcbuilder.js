import Button from "../UI/Button";
import Container from "../UI/Container";
import CustomSelect from "../UI/Select"
import { useState,useEffect } from "react";
import { useImmer } from "use-immer";



function PcBuilder(){
    const  [pc, updatePc] = useImmer({
    GraphicCard: '',
    Processor: '',
    Motherboard: '',
    RAM: '',
    PowerSupply: '',
    DataStorage: '',
    Cooling: '',
    Case: ''
  })
  const [activesubmit,setActivesubmit] = useState(false)

  function handleBuildPC(name,value){
    updatePc(draft=>{draft[name] = value})
  }
  useEffect(()=>{
  const allSelected = Object.values(pc).every(value=>value !== '')
   setActivesubmit(allSelected)
},[pc])

   return(
    <Container classstyle="Pcbuilder">
       <Container classstyle="PcbuilderTextBox">
        <h2>
        PC Builder
        </h2>
        <p>
        Build the computer of your dreams. Choose the components you need and we'll take care of the rest!
        </p>
       </Container>
      <form name="BuildPc" onSubmit={(e)=>{
        e.preventDefault();
        if(activesubmit)
         console.log(pc)
      }}>
      <Container classstyle='SelectsBox'>
        <CustomSelect 
          setvaluetopcobj={handleBuildPC}
          name="GraphicCard"
          startvalue="Graphic Card"
          classstyle="CustomSelect"
          options={[{id: 0, title: 'RTX 4090'},{id: 1, title: 'RTX 4080'},{id: 2, title: 'RTX 4070'}
          ,{id: 3, title: 'RTX 4060 TI'},{id: 4, title: 'RTX 4060'},{id: 5, title: 'RTX 4050'},
          {id: 6, title: 'RTX 3090'},{id: 7, title: 'RTX 3080 TI'},{id: 8, title: 'RTX 3060'}]}
        />
        <CustomSelect
         setvaluetopcobj={handleBuildPC}
          name="Processor" 
          startvalue="Processor"
          classstyle="CustomSelect"
          options={[{id: 0, title: 'RTX 4090'},{id: 1, title: 'RTX 4080'},{id: 2, title: 'RTX 4070'}
          ,{id: 3, title: 'RTX 4060 TI'},{id: 4, title: 'RTX 4060'},{id: 5, title: 'RTX 4050'},
          {id: 6, title: 'RTX 3090'},{id: 7, title: 'RTX 3080 TI'},{id: 8, title: 'RTX 3060'}]}
        />
        <CustomSelect
         setvaluetopcobj={handleBuildPC}
          name="Motherboard"
          startvalue="Motherboard"
          classstyle="CustomSelect"
          options={[{id: 0, title: 'RTX 4090'},{id: 1, title: 'RTX 4080'},{id: 2, title: 'RTX 4070'}
          ,{id: 3, title: 'RTX 4060 TI'},{id: 4, title: 'RTX 4060'},{id: 5, title: 'RTX 4050'},
          {id: 6, title: 'RTX 3090'},{id: 7, title: 'RTX 3080 TI'},{id: 8, title: 'RTX 3060'}]}
        />
        <CustomSelect 
         setvaluetopcobj={handleBuildPC}
          name="RAM"
          startvalue="RAM"
          classstyle="CustomSelect"
          options={[{id: 0, title: 'RTX 4090'},{id: 1, title: 'RTX 4080'},{id: 2, title: 'RTX 4070'}
          ,{id: 3, title: 'RTX 4060 TI'},{id: 4, title: 'RTX 4060'},{id: 5, title: 'RTX 4050'},
          {id: 6, title: 'RTX 3090'},{id: 7, title: 'RTX 3080 TI'},{id: 8, title: 'RTX 3060'}]}
        />
        <CustomSelect
         setvaluetopcobj={handleBuildPC}
         name="PowerSupply"
          startvalue="Power supply"
          classstyle="CustomSelect"
          options={[{id: 0, title: 'RTX 4090'},{id: 1, title: 'RTX 4080'},{id: 2, title: 'RTX 4070'}
          ,{id: 3, title: 'RTX 4060 TI'},{id: 4, title: 'RTX 4060'},{id: 5, title: 'RTX 4050'},
          {id: 6, title: 'RTX 3090'},{id: 7, title: 'RTX 3080 TI'},{id: 8, title: 'RTX 3060'}]}
        />
        <CustomSelect 
         setvaluetopcobj={handleBuildPC}
          name="DataStorage"
          startvalue="Data storaged"
          classstyle="CustomSelect"
          options={[{id: 0, title: 'RTX 4090'},{id: 1, title: 'RTX 4080'},{id: 2, title: 'RTX 4070'}
          ,{id: 3, title: 'RTX 4060 TI'},{id: 4, title: 'RTX 4060'},{id: 5, title: 'RTX 4050'},
          {id: 6, title: 'RTX 3090'},{id: 7, title: 'RTX 3080 TI'},{id: 8, title: 'RTX 3060'}]}
        />
        <CustomSelect 
         setvaluetopcobj={handleBuildPC}
          name="Cooling"
          startvalue="Cooling"
          classstyle="CustomSelect"
          options={[{id: 0, title: 'RTX 4090'},{id: 1, title: 'RTX 4080'},{id: 2, title: 'RTX 4070'}
          ,{id: 3, title: 'RTX 4060 TI'},{id: 4, title: 'RTX 4060'},{id: 5, title: 'RTX 4050'},
          {id: 6, title: 'RTX 3090'},{id: 7, title: 'RTX 3080 TI'},{id: 8, title: 'RTX 3060'}]}
        />
        <CustomSelect 
         setvaluetopcobj={handleBuildPC}
          name="Case"
          startvalue="Case"
          classstyle="CustomSelect"
          options={[{id: 0, title: 'RTX 4090'},{id: 1, title: 'RTX 4080'},{id: 2, title: 'RTX 4070'}
          ,{id: 3, title: 'RTX 4060 TI'},{id: 4, title: 'RTX 4060'},{id: 5, title: 'RTX 4050'},
          {id: 6, title: 'RTX 3090'},{id: 7, title: 'RTX 3080 TI'},{id: 8, title: 'RTX 3060'}]}
        />
      </Container>
      <Container classstyle='SelectsButtonsBox'>
      <Button
       type="submit"
       text="Next step"
       classstyle={`NextStep ${activesubmit ? 'active' : ''}`}
      />
      </Container>
      </form>
    </Container>
   );
}

export default PcBuilder