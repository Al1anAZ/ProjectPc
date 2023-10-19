import Container from "../Container";
function Body({children}){
    return(
        <Container style={{marginTop: 70}}>
            {children}
        </Container>
    );
}
export default Body