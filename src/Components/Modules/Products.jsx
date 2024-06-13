import React, { useState, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";

const Products = ({title}) => {
  const[buyNow, setBuyNow] = useState(false);
  const[buyNowStatus, setBuyNowStatus] = useState("");
  const[count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [title]);

  useEffect(() => {
    if (buyNow) {
      setBuyNowStatus("Buy Now");  
    }
  }, [buyNow]);

  const [items, setItems] = useState([
    {
      id: 1,
      product_name: "Product 1",
      price: 999,
      image: "/logo192.png",
    },
    {
      id: 2,
      product_name: "Product 2",
      price: 1999,
      image: "/logo192.png",
    },
  ]);
  return (
    <Container className="row">
      {items.map((elem) => {
        return (
          <Card key={elem.id} className=" ">
            <Card.Img
              variant="top"
              style={{ height: "200px", width: "200px" }}
              src={process.env.PUBLIC_URL + elem.image}
            />
            <Card.Body>
            <Card.Title>{buyNowStatus}</Card.Title>
              <Card.Title>{elem.product_name}</Card.Title>
              <Card.Text>${elem.price}</Card.Text>
              <Button onclick={() => setBuyNow(true)}>Buy Now</Button>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default Products;
