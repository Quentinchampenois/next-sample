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
                    <li>Mentions légales (à venir)</li>
                </ul>
            </Col>
            <Col>
                <ul>
                    <li>Code source Github (à venir)</li>
                    <li>
                        <Link href="/mention-legal">
                            <a>Mention Légales</a>
                        </Link>
                    </li>
                </ul>
            </Col>
        </Row>
    );
}
