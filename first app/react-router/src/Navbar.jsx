import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>

      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link> |{" "}
      <Link to="/user">User</Link> |{" "}
      <Link to="/products">Products</Link>

      <br /><br />

    </div>
  );
}

export default Navbar;