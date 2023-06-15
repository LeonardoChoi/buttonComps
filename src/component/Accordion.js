import React, { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(2);

  const handleClick = (nextIndex) => {
    setExpandedIndex(nextIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    console.log(isExpanded);

    const icon = <span>{isExpanded ? "DOWN" : "LEFT"}</span>;

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}

export default Accordion;
