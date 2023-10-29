import LogoImg from "../../imgs/Logo.svg"
import NavBar from "./NavBar"
import Button from "../UI/Button";
import Container from "../UI/Container";
function Logo({height = 80,width = 70}){
    return(
      <img src={LogoImg} alt="ProjectPcLogo" width={width} height={height}/>
    );
}


function Header(){
    return(
        <Container classstyle="Header">
          <Logo/>
          <NavBar 
           navtype="header"
           menu={[{id: 0, title: 'Home'},{id: 1, title: 'Builder'},{id: 2, title: 'Assemblies'},{id: 3, title: 'Contact'}]}
          />
         <Button
         classstyle="SingLog"
           text={"Sing in"}
          />
          <Button
          classstyle="SingLog"
           style={{border: "none"}}
           text={"Log in"}
          />
        </Container>
    );
}


export {Logo} 
export default Header