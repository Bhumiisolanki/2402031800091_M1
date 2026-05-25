import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>

      <h1>Products Page</h1>

      <Link to="phone">Phone</Link> |{" "}
      <Link to="laptop">Laptop</Link>

      <Outlet />

    </div>
  );
}

export default Products;