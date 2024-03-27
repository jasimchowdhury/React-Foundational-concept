// function ListGroup() {
//   const items = [
//     "Sylhet",
//     "Dhaka",
//     "Khulna",
//     "Borishal",
//     "Chittagong",
//     "Rajshahi",
//   ];

//   return (
//     <>
//       <ul className="list-group">
//         {items.map((city) => (
//           <li>{city}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ListGroup;

import React from "react";

function ListGroup(): JSX.Element {
  const items: string[] = [
    "Sylhet",
    "Dhaka",
    "Khulna",
    "Borishal",
    "Chittagong",
    "Rajshahi",
  ];

  return (
    <>
      <ul className="list-group">
        {items.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
