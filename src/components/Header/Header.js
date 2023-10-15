import LogoImg from "../../imgs/Logo.svg"
import NavBar from "./NavBar"
import Button from "../Button";
function Logo(){
    return(
      <img src={LogoImg} alt="ProjectPcLogo" />
    );
}


function Header(){
    return(
        <div className="Header">
          <Logo/>
          <NavBar 
           style={{
            fontSize: 20,
           }}
           menu={[`Home`,`Builder`,`Assemblies`,`Contact`]}
           listyle={{
            marginTop: 26
           }}
          />
         <Button
          style={{fontSize: 18,
            width: 100,
            height: 43,
            marginRight: 135,
            marginTop: 19,
            float: "right"
          }}
           text={"Sing in"}
          />
          <Button 
          style={{fontSize: 18,
             width: 100,
             height: 43,
             marginTop: 19,
             border: 'none',
             float: "right"
          }}
           text={"Log in"}
          />
        </div>
    );
}



export default Header