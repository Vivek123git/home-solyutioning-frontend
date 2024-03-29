import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

function Skelton() {
  return (
    <Container>
      <div className="d-flex justify-content-around">
        <Card
          style={{
            width: "18rem",
            border: "2px solid #71a1e9",
            margin: "10px",
            backgroundColor: "#71a1e9",
            borderRadius:"2px"
          }}
        >
          <Card.Body className="p-0" style={{ backgroundColor: "white" }}>
            <Placeholder as={Card} animation="glow">
              <Placeholder style={{ width: "260px", height: "200px",backgroundColor: "#71a1e9" }} />
            </Placeholder>
            {/* <Placeholder.Button variant="primary" xs={6} /> */}
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Skelton;
