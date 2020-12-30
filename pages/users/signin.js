import SHead from "../../components/SHead";
import Signinform from "../../components/Signinform";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SNavbar from "../../components/SNavbar";
import Alert from "react-bootstrap/Alert";

export default function Home() {
    return (
        <>
            <SHead title={"Somei, identification"}/>
            <SNavbar />

            <Container fluid>
                <Row>
                    <Col xs={"12"}>
                        <h1 className={"text-center"}>Connectez-vous à votre compte Somei !</h1>
                    </Col>
                    <Col xs={"12"} md={{span: 10, offset: 1}}>
                        <Signinform />
                    </Col>
                </Row>

                <Row>
                    <Col xs={"12"} md={{span: 10, offset: 1}}>
                        <Alert variant={"warning"}>
                            Pour le moment aucun compte n'est enregisté, vous pouvez vous connecter avec n'importe quel compte, exemple <strong>Pseudo : UserDevAccount</strong> - <strong>Password: password123456</strong>

                        </Alert>
                    </Col>
                </Row>
            </Container>
        </>
    )
}