import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import User from "./User";
import Products from "./Products";
import Phone from "./Phone";
import Laptop from "./Laptop";

function App() {
  return (
    <BrowserRouter>

      <h1>React Router Example</h1>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />

        <Route path="/products" element={<Products />}>
          <Route path="phone" element={<Phone />} />
          <Route path="laptop" element={<Laptop />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App