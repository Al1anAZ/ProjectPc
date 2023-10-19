function NavBar({navtype,menu}){
   const list = menu.map((item)=>
      <li><a href="#">{item}</a></li>
      );
   return(
     <ul data-nav={navtype} className="NavBar">
       {list}
     </ul>
   );
}
export default NavBar