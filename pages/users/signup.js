import SHead from "../../components/SHead";
import Signinform from "../../components/Signinform";
import Signupform from "../../components/Signupform";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SNavbar from "../../components/Navbar";

export default function Home() {
    return (
        <>
            <SHead title={"Somei, Création de votre compte"}/>

            <Container fluid>
                <SNavbar />
                <Row>
                    <Col xs={"12"}>
                        <h1 className={"text-center"}>Inscrivez-vous, c'est gratuit et sécurisé !</h1>

                        <Row>
                            <Col xs={"12"} md={{ span: 8, offset: 2 }}>
                                <p className={"text-center"}>L'application vous demande seulement un <strong>pseudonyme</strong> ainsi qu'un <strong>mot de passe</strong> pour pouvoir accéder à votre compte. Aucune autre information ne vous sera demandé, ni maintenant, ni plus tard.</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={"12"} md={{span: 10, offset: 1}}>
                        <Signupform />
                    </Col>
                </Row>
            </Container>
        </>
    )
}