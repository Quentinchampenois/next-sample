import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import SHead from "../components/SHead";
import SNavbar from "../components/SNavbar";

export default function Home() {
    return (
        <>
            <SHead title={"Somei, des idées de cadeaux"} />
            <Container fluid>
                <SNavbar />
                <header className={"my-5"}>
                    <Row>
                        <Col>
                            <h1 className={styles.title}>
                                Créez et partagez vos idées de cadeaux
                            </h1>
                        </Col>
                    </Row>
                </header>
                <main>
                    <Row>
                        <Col md={6} className={"p-5"}>
                            <h2 className={"text-center"}>
                                Créez votre liste de cadeaux !
                            </h2>
                            <Row>
                                <Col
                                    className={"p-2"}
                                    xs={{ span: 8, offset: 2 }}
                                >
                                    <Link href="/users/signin">
                                        <Button
                                            variant={"dark"}
                                            size={"lg"}
                                            block
                                        >
                                            S'identifier
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} className={"p-5"}>
                            <h2 className={"text-center"}>
                                Partagez votre liste de cadeaux !
                            </h2>

                            <Row>
                                <Col
                                    className={"p-2"}
                                    xs={{ span: 8, offset: 2 }}
                                >
                                    <Link href={"/collection"}>
                                        <Button
                                            variant={"dark"}
                                            size={"lg"}
                                            block
                                        >
                                            Découvrir des idées
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <section className={"my-5"}>
                        <Row>
                            <Col xs={{ span: 10, offset: 1 }}>
                                <h3>Qu'est-ce que Somei ?</h3>

                                <p>
                                    Somei est une application permettant à tous
                                    de créer sa liste d'idées de cadeaux
                                    gratuitement, et de partager ses idées à
                                    tout le monde !
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ span: 10, offset: 1 }}>
                                <p>Comment créer ma liste de cadeaux ?</p>
                                <ul>
                                    <ol>
                                        1. Se connecter, ou créer un compte
                                        Somei
                                    </ol>

                                    <ol>
                                        2. Aller dans le formulaire d'ajout
                                        d'une idée et créez la votre !
                                    </ol>

                                    <ol>
                                        3. Sauvegardez votre idée. Si celle-ci
                                        est publique, les autres visiteurs
                                        auront accès à votre idée, celle-ci
                                        reste anonymisée.
                                    </ol>
                                </ul>
                            </Col>
                        </Row>
                    </section>
                </main>
                <Footer />
            </Container>
        </>
    );
}
