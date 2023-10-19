function Container({children,classstyle,style,tIndex}){
    return(
          <div className={classstyle} style={style} tabIndex={tIndex}>
           {children}
          </div>
    );
}
export default Container