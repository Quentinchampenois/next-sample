import styles from "./Footer.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

export default function Footer() {
    return (
        <Row as={"footer"} className={styles.footer + " p-3"}>
            <Col>
                <ul>
                    <li>Open data (à venir)</li>
                    <li>Qui sommes-nous ? (à venir)</li>
                </ul>
            </Col>
            <Col>
                <ul>
                    <li>
                        <Link href="https://gitlab.eemi.tech/quentin.champenois/next-gift">
                            Code source
                        </Link>
                    </li>
                    <li>
                        <Link href="/mention-legal">
                            <a>Mentions légales</a>
                        </Link>
                    </li>
                </ul>
            </Col>
        </Row>
    );
}
