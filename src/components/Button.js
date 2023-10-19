function Button({style ,text,type = "button"}){
   return(
    <button style={style} className="Button" type={type}>
        {text}
    </button>
   );  
} 

export default Button