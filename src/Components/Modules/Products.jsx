import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Products = ({ title }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4001/api/category")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <table>
      <tr> 
        <th>Title</th>
        <th>Description</th>
      </tr>
      {items.map((item) => (
        <tr key={item._id}>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td><img alt="" src={item.thumbnail} height="100" /></td>
        </tr>
      ))}
    </table>
  );
};

export default Products;
