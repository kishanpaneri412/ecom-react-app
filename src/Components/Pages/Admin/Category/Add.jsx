import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnail: "",
  });
  //   useEffect(() => {
  //     console.log("formData", formData);
  //   }, [formData]);
  const handleThumbnail = (ev) => {
    if (ev.target.files) {
      setFormData({
        ...formData,
        thumbnail: ev.target.files[0],
      });
    }
  };
  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onFormSubmit = (ev) => {
    ev.preventDefault();
    if (formData.title && formData.description && formData.thumbnail) {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("thumbnail", formData.thumbnail);

      fetch("http://localhost:4001/api/category", {
        method: "POST",
        body: form,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate('/admin/category/list')
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="cat-form">
      <form onSubmit={onFormSubmit}>
        <div>
          <label>title</label>
          <input type="text" name="title" onChange={handleInputChange} />
        </div>
        <div>
          <label>Description</label>
          <input type="text" name="description" onChange={handleInputChange} />
        </div>
        <div>
          <label>Thumbnail</label>
          <input type="file" name="thumbnail" onChange={handleThumbnail} />
        </div>
        <div>
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};

export default Add;
