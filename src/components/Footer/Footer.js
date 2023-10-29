import Container from "../UI/Container";
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
             menu={[{id: 0, title: 'Privacy Policy'},{id: 1, title: 'Terms & Conditions'},{id: 2, title: 'Cookie Policy'},{id: 3, title: 'Contact'}]}
             />
           </Container>
        </Container>
    </footer>
  );
}
export default Footer