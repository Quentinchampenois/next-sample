import SHead from "../../components/SHead";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SNavbar from "../../components/SNavbar";
import CreateIdea from "../../components/CreateIdea";

export default function Home() {
    return (
        <>
            <SHead title={"Somei, Créer un nouveau cadeau"}/>
            <SNavbar />

            <Container fluid>
                <Row>
                    <Col xs={"12"}>
                        <h1 className={"text-center"}>Enregistrez un nouveau cadeau</h1>
                    </Col>
                    <Col xs={"12"} md={{span: 10, offset: 1}}>
                        <CreateIdea />
                    </Col>
                </Row>
            </Container>
        </>
    )
}