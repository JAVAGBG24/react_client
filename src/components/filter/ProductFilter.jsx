// huvud komponent, den här ska användas i Products page
// vi ska använda CollapsibleSection, FilterInput och SizeFilter i den här komponenten
import "../../styles/filter.css";
import SizeFilter from "./SizeFilter";
import FilterInput from "./FilterInput";
import CollapsibleSection from "./CollapsibleSection";
import { useState, useEffect } from "react";

// PROPS
// products - innehålla alla product egenskaper så som category etc vi kan komma åt med product.category
// onFilterChange - onChange metod som vi skickar med som props

// STATE
// filters, setFilters - kommer innehålla alla giltiga filtervärden vi kan filtrera på

const ProductFilter = ({ products, onFilterChange }) => {
  const [filters, setFilters] = useState({
    size: "",
    inStock: true,
    category: "",
    color: "",
    minPrice: "",
    maxPrice: "",
  });

  // hårdkoda tillgängliga storlekar
  const [availableSizes, setAvailableSizes] = useState([
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
  ]);

  // state för dynamiska filteralternativ baserat på produkter
  const [availableCategories, setAvailableCategories] = useState([]);
  const [availableColors, setAvailableColors] = useState([]);
  const [productCounts, setProductCounts] = useState({
    inStock: 0,
    outOfStock: 0,
  });

  // useEffect för att kunna "dra ut" tillgängliga kategorier och färger från produkterna
  useEffect(() => {
    if (products && products.length > 0) {
      // "dra ut" extrahera unika kategorier med nåt som heter Set och filtrera bort
      // null/undefined kategorier
      const categories = [
        ...new Set(products.map((product) => product.category).filter(Boolean)),
      ];

      // vi ska göra samma sak med färgerna
      const colors = [
        ...new Set(products.map((product) => product.color).filter(Boolean)),
      ];

      // räkna produkter som finns i lager
      const inStockCount = products.filter((product) => product.inStock).length;

      // uppdatera state med den datan "drog ut" - alla tre states: kategori, färg och product count
      setAvailableCategories(categories);
      setAvailableColors(colors);
      setProductCounts({
        inStock: inStockCount,
        outOfStock: products.length - inStockCount,
      });
    }
  }, [products]); // kör bara när products förändras

  // växla storleksval, välj ny avmarkera gamla
  const handleSizeSelect = (size) => {
    setFilters((prev) => ({
      ...prev,
      size: prev.size === size ? "" : size,
    }));
  };

  // hantera filterförändring
  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // lägga till nuvarande filter genom att anropa onChange
  const applyFilters = () => {
    onFilterChange(filters);
  };

  // cleara alla filter, återställa
  const clearFilters = () => {
    setFilters({
      size: "",
      inStock: true,
      category: "",
      color: "",
      minPrice: "",
      maxPrice: "",
    });

    // anropa callback med tomt objekt för att rensa filters
    onFilterChange({});
  };

  return (
    <div className="product-filter">
      {/*storlekskomponent */}
      <SizeFilter
        selectedSize={filters.size}
        onSizeSelect={handleSizeSelect}
        availableSizes={availableSizes}
      />

      <CollapsibleSection title="Availability" defaultExpanded={true}>
        {/*här renderas children vilket blir vår FilterInput */}
        <FilterInput
          type="radio"
          name="inStock"
          value={filters.inStock}
          onChange={handleFilterChange}
          options={[
            {
              id: "inStock",
              value: true,
              label: `In stock (${productCounts.inStock})`,
            },
            {
              id: "outOfStock",
              value: false,
              label: `Out of stock (${productCounts.outOfStock})`,
            },
          ]}
        />
      </CollapsibleSection>

      {/*category sektionen */}
      <CollapsibleSection title="Category">
        <FilterInput
          type="select"
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          options={availableCategories}
          placeholder="Select category"
        />
      </CollapsibleSection>

      {/*färg sektionen */}
      <CollapsibleSection title="Colors">
        <FilterInput
          type="select"
          name="color"
          value={filters.color}
          onChange={handleFilterChange}
          options={availableColors}
          placeholder="Select color"
        />
      </CollapsibleSection>

      {/*price range sektion */}
      <CollapsibleSection title="Price range">
        <FilterInput
          type="price"
          name="price"
          value={{ min: filters.minPrice, max: filters.maxPrice }}
          onChange={handleFilterChange}
        />
      </CollapsibleSection>

      {/*knappar för att tillämpa filters och rensa filters */}
      <div className="filter-actions">
        <button className="apply-button" onClick={applyFilters}>
          Apply filter
        </button>
        <button className="clear-button" onClick={clearFilters}>
          Clear all
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
