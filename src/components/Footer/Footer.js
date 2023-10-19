import Container from "../Container";
import { Logo } from "../Header/Header";
import NavBar from "../Header/NavBar";
function Footer(){
  return(
    <footer>
         <Container classstyle="FooterContainer">
           <Container classstyle="FooterContent">
             <Logo
            height={70}
             />
             <span>© 2023 PCBOYARE. All rights reserved.</span>
             <NavBar
             navtype= "footer"
             menu={['Privacy Policy','Terms & Conditions','Cookie Policy','Contact']}
             />
           </Container>
        </Container>
    </footer>
  );
}
export default Footer