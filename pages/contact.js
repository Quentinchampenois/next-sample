import fs from "fs";
import matter from "gray-matter";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import SHead from "../components/SHead";
import SNavbar from "../components/SNavbar";

export default function Contact({ posts }) {
    return (
        <>
            <SHead title={"Somei, des idées de cadeaux"} />
            <Container fluid>
                <SNavbar />
                <header className={"my-5"}>
                    <Row>
                        <Col>
                            <h1 className={styles.title}>Contactez nous !</h1>
                        </Col>
                    </Row>
                </header>
                <main>
                    <Row>
                        <Col> </Col>
                        <Col md={8} className={"p-5"}>
                            <div>
                                {posts.map((formatter, index) => {
                                    console.log(formatter.frontmatter);
                                    if (
                                        formatter.frontmatter.slug === "contact"
                                    ) {
                                        return (
                                            <article
                                                key={
                                                    formatter.frontmatter.title
                                                }
                                            >
                                                <header>
                                                    <h3>
                                                        {
                                                            formatter
                                                                .frontmatter
                                                                .title
                                                        }
                                                    </h3>
                                                </header>
                                                <section>
                                                    <p>
                                                        {
                                                            formatter
                                                                .frontmatter
                                                                .description
                                                        }
                                                    </p>
                                                </section>
                                            </article>
                                        );
                                    }
                                })}
                            </div>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Votre email"
                                    />
                                    <Form.Text className="text-muted">
                                        Ne partagez pas votre adresse à des
                                        inconnus.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Votre message"
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </main>
                <Footer />
            </Container>
        </>
    );
}

export async function getStaticProps() {
    const files = fs.readdirSync(`${process.cwd()}/content/posts`);

    const posts = files.map((filename) => {
        const markdownWithMetadata = fs
            .readFileSync(`content/posts/${filename}`)
            .toString();

        const { data } = matter(markdownWithMetadata);

        // Convert post date to format: Month day, Year
        const options = { year: "numeric", month: "long", day: "numeric" };

        const frontmatter = {
            ...data,
        };

        return {
            slug: filename.replace(".md", ""),
            frontmatter,
        };
    });

    return {
        props: {
            posts,
        },
    };
}
