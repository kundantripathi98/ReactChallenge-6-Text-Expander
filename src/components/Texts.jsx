import { useState } from "react";

// const Texts = ({ words, showLimit, onClick, isExpanded }) => {
//   return (
// <div>
//   {!isExpanded ? (
//     <h5>
//       {`${words.slice(0, showLimit).join(" ")}...`}
//       <p onClick={onClick}>Show More</p>
//     </h5>
//   ) : (
//     <h5>
//       {words.join(" ")}{" "}
//       <p onClick={onClick} className="red">
//         Show Less
//       </p>
//     </h5>
//   )}
// </div>
//   );
// };

const Texts = ({ children }) => {
  return <>{children}</>;
};

export default Texts;
