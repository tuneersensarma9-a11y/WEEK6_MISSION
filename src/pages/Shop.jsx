import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  if (!products.length) return <h2>Loading...</h2>;

  return (
  <div className="container">
    <h2>Shop</h2>

    <div className="grid">
      {products.map(product => (
        <div key={product.id} className="card">

          <img src={product.thumbnail} alt={product.title} />

          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>

          <Link to={`/product/${product.id}`} className="btn">
            View Details
          </Link>

        </div>
      ))}
    </div>
  </div>
);
}

export default Shop;