// dynamisk filter som passa alla övriga filtrerings metoder
import "../../styles/filter.css";

// props:
// type - typen av filter
// options - vilka filter options finns för typen
// value - värdet på filtret som user väljer
// onChange - för att fånga value måste vi tillåt onChange funktion
// name - name behöver för att kunna möjliggöra onChange dynamiskt
// placeholder - ett placeholder värde
const FilterInput = ({ type, options, value, onChange, name, placeholder }) => {
  if (type === "radio") {
    return (
      <div className="radio-group">
        {options.map((option) => (
          <div className="radio-item" key={option.id}>
            <input
              type="radio"
              id={option.id}
              name={name}
              checked={value === option.value}
              onChange={() => onChange(name, option.value)}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </div>
    );
  }

  // fortsätta med nästa = select

  // fortsätta med price
};

export default FilterInput;
