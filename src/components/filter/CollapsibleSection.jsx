// "öppna stänga" sektion
import { useState } from "react";
import "../../styles/filter.css";

const CollapsibleSection = ({ title, children, defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  // funktion för att växla/toggla öppna/stäng
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="filter-section">
      <div className="section-header" onClick={toggleExpanded}>
        <h3>{title}</h3>

        <span className={`arrow ${expanded ? "up" : "down"}`}>
          {expanded ? "▲" : "▶"}
        </span>
      </div>

      {expanded && <div className="section-content">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;
