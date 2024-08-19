import { useState } from "react";
import Texts from "./Texts";

const TextExpander = ({
  children,
  expanded = false,
  collapsedNumWords = 11,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "rgb(70, 20, 249)",
  className = "",
}) => {
  let words = children.split(" ");

  let [isExpanded, setIsExpanded] = useState(expanded);

  function handleClick(e) {
    setIsExpanded((s) => !s);
  }

  return (
    <div className={className}>
      {!isExpanded ? (
        <h5>
          {`${words.slice(0, collapsedNumWords).join(" ")}...`}
          <p onClick={handleClick} style={{ color: buttonColor }}>
            {expandButtonText}
          </p>
        </h5>
      ) : (
        <h5>
          {children}{" "}
          <p onClick={handleClick} style={{ color: buttonColor }}>
            {collapseButtonText}
          </p>
        </h5>
      )}
    </div>
  );
};

export default TextExpander;
