function NavBar({style,menu,listyle}){
   const list = menu.map(text=>
      <li style={listyle}><a href="#">{text}</a></li>
      );
   return(
     <ul style={style} className="NavBar">
       {list}
     </ul>
   );
}
export default NavBar