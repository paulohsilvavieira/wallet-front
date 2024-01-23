import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Card, Col, Form, Button, Container, Row } from "react-bootstrap";
function App() {
  const [formData, setFormData] = useState({});
  return (
    <Container style={{ paddingTop: 10 }}>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Create a transfer</Card.Title>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Address BTC</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="address wallet"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        address: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="0.000001"
                    value={formData.amount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        amount: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Button variant="primary" type="button">
                  Send Amount
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <p>Address: {formData.address}</p>
              <p>Value: {formData.amount}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
