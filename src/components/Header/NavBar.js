function NavBar({navtype,menu}){
   const list = menu.map(item=>
      <li key={item.id}><a href="#">{item.title}</a></li>
      );
   return(
     <ul data-nav={navtype} className="NavBar">
       {list}
     </ul>
   );
}
export default NavBar