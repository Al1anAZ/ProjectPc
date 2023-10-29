function Button({style ,text,type = "button",classstyle = ""}){
   return(
    <button style={style} className={`Button ${classstyle}`} type={type}>
        {text}
    </button>
   );  
} 

export default Button