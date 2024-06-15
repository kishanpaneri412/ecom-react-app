import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Layout from "./Components/Layouts/Layout";
import LearnHooks from "./Components/Modules/LearnHooks";
import CategoryAdd from "./Components/Pages/Admin/Category/Add";
import CategoryList from "./Components/Pages/Admin/Category/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learnhooks" element={<LearnHooks />} />
          <Route path="/admin/category/list" element={<CategoryList />} />
          <Route path="/admin/category/add" element={<CategoryAdd />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
