import React from "react";
import "./tagIcon.css";

const TagIcon = (props) => {
  const [selected, setSelected] = React.useState([]);

  const handleSelect = () => {
    if (selected !== "selected") {
      setSelected("selected");
    } else {
      setSelected("");
    }
  };

  return (
    <div
      className={`tag-icon ${props.theme} ${selected}`}
      onClick={handleSelect}
    >
      <p className="tag-desc">{props.feeling}</p>
    </div>
  );
};

export default TagIcon;
