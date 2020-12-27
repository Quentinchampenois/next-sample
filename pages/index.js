import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
                <header>
                    <Row className={"my-4"}>
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
                                <Col xs={{ span: 8, offset: 2 }}>
                                    <Button variant={"dark"} size={'lg'} block>
                                        S'inscrire
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{ span: 8, offset: 2 }}>
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
                                <Col xs={{ span: 8, offset: 2 }}>
                                    <Button variant={"dark"} size={'lg'} block>
                                        Découvrir des idées
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </main>
                <footer className={styles.footer}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
                    </a>
                </footer>
            </Container>
        </>
    )
}
