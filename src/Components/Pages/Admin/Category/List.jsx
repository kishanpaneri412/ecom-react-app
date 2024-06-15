import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const List = ({ title }) => {
  const [items, setItems] = useState([]);
  const deletedata=(id)=>{
alert(id)
  }
  useEffect(() => {
    fetch("http://localhost:4001/api/category")
      .then((res) => res.json())
      .then((data) => setItems(data.reverse()))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Link to="/admin/category/add">Add</Link>
      <table  border={1} align="center" cellSpacing={0} cellPadding={10 }>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Photo</th>
          <th>Delete</th>
        </tr>
        {items.map((item) => (
          <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>
              <img alt="" src={item.thumbnail} height="100" />
            </td>
            <td><button onClick={()=>deletedata(item.id)}>Delete</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default List;
