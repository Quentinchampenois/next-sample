import SHead from "../../components/SHead";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
    return (
        <>
            <SHead title={"Somei, identification"} />

            <Container fluid>
<Row>
    <Col xs={"12"}>
        <h1 className={"text-center"}>Connectez-vous </h1>
    </Col>
    <Col>
        <h2>Formulaire de connexion</h2>

        <form action="">
            <label htmlFor="">Email</label>
            <input type="text" name={"email"}/>
        </form>
    </Col>
    <Col>
        <h2>Formulaire d'inscription</h2>

        <form action="">
            <label htmlFor="">Email</label>
            <input type="text" name={"email"}/>
            <label htmlFor="">Mot de passe</label>
            <input type="text" type={"password"} name={"password"}/>
        </form>
    </Col>
</Row>
            </Container>
        </>
    )
}