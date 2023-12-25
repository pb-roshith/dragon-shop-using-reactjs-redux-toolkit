import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../store/cartslice";

const Product = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((res) => setproducts(res));
  }, []);

  const dispatch = useDispatch()

  const addtocart = (product) => {
    dispatch(add(product))
  }

  return (
    <div>
      <Container>
        <Row>
          {products.map((product) => {
            return (
              <Col key={product.id}>
                <Card style={{ width:'18rem', height:'300px', marginBottom:'10px'}}>
                    <div className="text-center">
                    <Card.Img style={{width:'100px', height:'130px'}} variant="top" src={product.image} />
                    </div>
                  
                  <Card.Body className="text-center">
                    <Card.Title style={{width:"100%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"}}>{product.title}</Card.Title>
                    <Card.Text>
                     ${product.price}
                    </Card.Text>
                    <Card.Footer><Button onClick={() => addtocart(product)} variant="primary">Add To Cart</Button></Card.Footer>
                    
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Product;
