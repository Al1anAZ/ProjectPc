import Header from "./components/Header/Header";
import Container from "./components/Container";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import BuyNow from "./components/Body/BuyNow";
function App() {
  return (
    <div className="Resolution1440">
      <Container>
           <Header/>
                  <Body>
                   <BuyNow/>
                  </Body>
      </Container>
         <Footer/>
      </div>
  );
}

export default App;
