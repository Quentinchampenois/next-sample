import styles from '../styles/Home.module.css'
import Footer from "../components/Footer";
import Idea from "../components/Idea";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SHead from "../components/SHead";
import SNavbar from "../components/SNavbar";
import {useEffect, useState} from "react"

export default function Collection() {
    let [ideas, setIdeas] = useState([])

    let hasFetchIdeas = false

    // Fetch all users
    useEffect(() => {
        fetch("/api/ideas")
            .then((res) => res.json())
            .then((json) => {
                console.log(json.ideas)
                setIdeas(json.ideas)
                hasFetchIdeas = true
            })
    }, [hasFetchIdeas])


    return (
        <>
            <SHead title={"Somei, liste d'idées"}/>
            <Container fluid>
                <SNavbar/>
                <header className={"my-5"}>
                    <Row>
                        <Col>
                            <h1 className={styles.title}>
                                Faites le tour des idées ajoutées par la communauté
                            </h1>
                        </Col>
                    </Row>
                </header>
                <main>
                    <Row>
                        <Col xs={{span: 10, offset: 1}}>
                            <h3 className={"d-flex justify-content-end"}>{ ideas.length > 0 ? `${ideas.length} idées de cadeaux` : "Aucune idées de cadeaux pour le moment." }</h3>
                            <hr/>
                            { ideas !== null ? ideas.map((idea, idx) => (
                                <div key={idx} className={"my-1"}>
                                    <Idea idea={idea.name} />
                                </div>
                            )) : ''}
                        </Col>
                    </Row>
                </main>
                <Footer/>
            </Container>
        </>
    )
}
