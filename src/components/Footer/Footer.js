import FooterContainer from "./FooterContainer";
import { Logo } from "../Header/Header";
import NavBar from "../Header/NavBar";
function Footer(){
  return(
    <footer>
         <FooterContainer>
           <div className="FooterContent">
             <Logo
            height={70}
             />
             <span>© 2023 PCBOYARE. All rights reserved.</span>
             <NavBar
             navtype= "footer"
             menu={['Privacy Policy','Terms & Conditions','Cookie Policy','Contact']}
             />
           </div>
        </FooterContainer>
    </footer>
  );
}
export default Footer