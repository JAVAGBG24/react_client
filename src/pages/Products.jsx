import { useState, useEffect } from "react";
import { getAllProducts } from "../api/productService";
import "../styles/products.css";
import ProductFilter from "../components/filter/ProductFilter";

const Products = () => {
  const [products, setProducts] = useState([]);
  // ett state för att lagra filtrerade produkter baserat på tillämpade filter
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.log("Error " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (filters) => {
    console.log("Applying filters: " + JSON.stringify(filters));

    // börjar med alla produkter
    let filtered = [...products];

    //tillämpar storlek om man valt det
    if (filters.size) {
      console.log("Filter size " + JSON.stringify(filters.size));
      filtered = filtered.filter((product) => {
        console.log(
          "product: " +
            JSON.stringify(product.name) +
            "stock: " +
            JSON.stringify(product.inventory)
        );

        const hasSizeInStock =
          product.inventory &&
          product.inventory[filters.size] !== undefined &&
          product.inventory[filters.size] > 0;

        console.log(
          JSON.stringify(product.name) +
            "has size " +
            JSON.stringify(filters.size) +
            " in stock " +
            hasSizeInStock
        );
        return hasSizeInStock;
      });
    }

    // tillämpa lager filter
    if (filters.inStock !== undefined) {
      filtered = filtered.filter((product) => {
        // hantera produkter med isInStock där isInStock är antingen en metod eller egenskap
        const productInStock =
          typeof product.isInStock === "function"
            ? product.isInStock()
            : product.inStock;
        return filters.inStock ? productInStock : !productInStock;
      });
    }

    // tillämpa kategori filter
    if (filters.category) {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    // tillämpa färg filter
    if (filters.color) {
      filtered = filtered.filter((product) => product.color === filters.color);
    }

    // tillämpa min pris
    if (filters.minPrice) {
      filtered = filtered.filters(
        (product) => product.price >= parseFloat(filters.minPrice)
      );
    }

    // tillämpa max pris
    if (filters.maxPrice) {
      filtered = filtered.filters(
        (product) => product.price <= parseFloat(filters.maxPrice)
      );
    }

    console.log(
      "Filtered products: " +
        JSON.stringify(filtered.length) +
        " of " +
        JSON.stringify(products.length)
    );

    // uppdatera filtrerade produkter statet
    setFilteredProducts(filtered);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="products-container">
      <h1>Products</h1>

      <div className="product-layout">
        <div className="filter-sidebar">
          <ProductFilter
            products={products}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="products-content">
          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  {product.image && (
                    <div className="product-image-container">
                      <img
                        className="product-image"
                        src={product.image}
                        alt={product.name}
                      />
                    </div>
                  )}
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="description">{product.description}</p>
                    <p className="price">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-products">No matching products</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
