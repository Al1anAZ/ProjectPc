import LogoImg from "../../imgs/Logo.svg"
import NavBar from "./NavBar"
import Button from "../Button";
function Logo({height = 80,width = 70}){
    return(
      <img src={LogoImg} alt="ProjectPcLogo" width={width} height={height}/>
    );
}


function Header(){
    return(
        <div className="Header">
          <Logo/>
          <NavBar 
           navtype="header"
           menu={[`Home`,`Builder`,`Assemblies`,`Contact`]}
          />
         <Button
          style={{fontSize: 18,
            width: 100,
            height: 43,
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


export {Logo} 
export default Header