function NavBar({style,menu,listyle}){
   return(
     <ul style={style} className="NavBar">
        <li style={listyle}><a href="#" data-selected ={"selected"}>{menu[0]}</a></li>
        <li style={listyle}><a href="#" data-selected ={""}>{menu[1]}</a></li>
        <li style={listyle}><a href="#" data-selected ={""}>{menu[2]}</a></li>
        <li style={listyle}><a href="#" data-selected ={""}>{menu[3]}</a></li>
     </ul>
   );
}
export default NavBar