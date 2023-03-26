import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <h1>My products page</h1>
      <Link to ="/products/product-1">Product 1</Link><br/>
      <Link to ="/products/product-2">Product 2</Link><br/>
      <Link to ="/products/product-3">Product 3</Link><br/>

     
    </>
  );
}

export default Products;
