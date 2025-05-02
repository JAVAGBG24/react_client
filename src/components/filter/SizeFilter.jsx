// filtrera sizes, ser annorlunda ut än övriga filter
import "../../styles/filter.css";

// PROPS
// selectedSize - själva sizen vi väljer/trycker på
// onSizeSelect - det kommer att vara onClick funktion med nytt namn för att öka tydligheten
// availableSizes - vilka storlekar är dynamisk

const SizeFilter = ({ selectedSize, onSizeSelect, availableSizes }) => {
  return (
    <div className="filter-section">
      <h3>Size</h3>
      <div className="size-buttons">
        {availableSizes.map((size) => (
          <button
            key={size}
            className={`size-button ${
              selectedSize === size ? "selected" : ""
            } `}
            onClick={() => onSizeSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;
