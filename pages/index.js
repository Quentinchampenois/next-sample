import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Home() {
    return (
        <>
            <Head>
                <title>Somei - Idées de cadeaux</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
            </Head>
            <Container fluid>
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
                        <Col md={6}>
                            <h2 className={"text-center"}>
                                Créez votre liste de cadeaux !
                            </h2>
                            <Row>
                                <Col xs={{span: 8, offset: 2}}>
                                    <Button variant={"dark"} size={'lg'} block>
                                        S'inscrire
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{span: 8, offset: 2}}>
                                    <Button variant={"dark"} size={'lg'} block>
                                        Se connecter
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <h2 className={"text-center"}>
                                Partagez votre liste de cadeaux !
                            </h2>

                            <Row>
                                <Col xs={{span: 8, offset: 2}}>
                                    <Button variant={"dark"} size={'lg'} block>
                                        Découvrir des idées
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <section className={"my-5"}>
                        <Row>
                            <Col>
                                <h3>Qu'est-ce que Somei ?</h3>

                                <p>
                                    Somei est une application permettant à tous de créer sa liste d'idées de cadeaux
                                    gratuitement, et de partager ses idées à tout le monde !
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Comment créer ma liste de cadeaux ?</p>
                                <ul>
                                    <ol>
                                        1. Se connecter, ou créer un compte Somei
                                    </ol>


                                    <ol>
                                        2. Aller dans le formulaire d'ajout d'une idée et créez la votre !
                                    </ol>

                                    <ol>
                                        3. Sauvegardez votre idée. Si celle-ci est publique, les autres visiteurs auront
                                        accès à votre idée, celle-ci reste anonymisée.
                                    </ol>

                                </ul>
                            </Col>
                        </Row>
                    </section>
                </main>
                <Footer/>
            </Container>
        </>
    )
}
