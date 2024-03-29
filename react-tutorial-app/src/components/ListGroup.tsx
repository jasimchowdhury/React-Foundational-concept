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
//           <li key={city.id}>{city}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ListGroup;

import React from "react";
import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup(): JSX.Element {
  let items: string[] = [
    "Sylhet",
    "Dhaka",
    "Khulna",
    "Borishal",
    "Chittagong",
    "Rajshahi",
  ];

  //Hook: useState
  const [selectedIndex, setselectedIndex] = useState(2);

  //items = [];

  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>

      {
        /*conditional rendering*/
        items.length === 0 && <p>No item found</p>
      }
      <ul className="list-group">
        {items.map((city: string, index: number) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            /*event handling 
        onClick={(event) => console.log(city, index, event.timeStamp)}*/
            onClick={(event) => {
              setselectedIndex(index), console.log(event, city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
