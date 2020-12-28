import SHead from "../../components/SHead";
import Signinform from "../../components/Signinform";
import Signupform from "../../components/Signupform";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
    return (
        <>
            <SHead title={"Somei, identification"}/>

            <Container fluid>
                <Row>
                    <Col xs={"12"}>
                        <h1 className={"text-center"}>Connectez-vous </h1>
                    </Col>
                    <Col>
                        <h2>Formulaire de connexion</h2>

                        <Signinform />
                    </Col>
                    <Col>
                        <h2>Formulaire d'inscription</h2>

                        <Signupform />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}