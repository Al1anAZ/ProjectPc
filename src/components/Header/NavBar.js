function NavBar({navtype,menu}){
   const list = menu.map(text=>
      <li><a href="#">{text}</a></li>
      );
   return(
     <ul data-nav={navtype} className="NavBar">
       {list}
     </ul>
   );
}
export default NavBar