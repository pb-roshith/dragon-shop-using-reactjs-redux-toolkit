import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { remove, clear } from "../store/cartslice";

const Cart = () => {
  const productCart = useSelector((state) => state.cart.items);
  const amountCart = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch()

  const removefromcart = (id) => {
    dispatch(remove(id))
  }

  const clearall = () => {
    dispatch(clear())
  } 

  return (
    <div style={{ marginTop: "150px" }}>
      <div style={{backgroundColor:''}}>
        <Container>
          <Row>
            <Col className="d-grid">
              <Button size="lg" onClick={() => clearall()}>Clear All</Button>
            </Col>
            <Col>
              <h1 style={{backgroundColor:'green', padding:'10px', borderRadius:'10px'}}>${amountCart}</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <hr />
      <div>
        <Container>
          <Row>
            {productCart.map((product) => {
              const x = product.id
              return (
                <Col xs={12} key={product.id}>
                  <Card
                    style={{
                      width: "100%",
                      height: "300px",
                      marginBottom: "10px",
                    }}
                  >
                    <div className="text-center">
                      <Card.Img
                        style={{ width: "100px", height: "130px" }}
                        variant="top"
                        src={product.image}
                      />
                    </div>

                    <Card.Body className="text-center">
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>${product.price}</Card.Text>
                      <Card.Footer>
                        <Button onClick={() => removefromcart(x)} variant="danger">Remove</Button>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Cart;
