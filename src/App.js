import Header from "./components/Header/Header";
import Container from "./components/Container";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import BuyNow from "./components/Body/BuyNow";
import PcBuilder from "./components/Body/Pcbuilder";
import OurAssemblies from "./components/Body/OurAssemblies";


function App() {
  return (
    <Container classstyle="Resolution1440">
      <Container>
           <Header/>
                  <Body>
                   <BuyNow/>
                   <PcBuilder/>
                   <OurAssemblies/>
                  </Body>
      </Container>
         <Footer/>
      </Container>
  );
}

export default App;
