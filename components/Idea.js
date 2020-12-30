import Card from "react-bootstrap/Card";

export default function Idea({idea}) {
    return (
        <Card>
            <Card.Body>{idea}</Card.Body>
        </Card>
    )
}