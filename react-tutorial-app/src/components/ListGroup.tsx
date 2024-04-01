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

// {items: [], heading: string}
interface PropsGroupList {
  items: string[];
  heading: string;
}
// using props inside ListGroup()
//function ListGroup(props: PropsGroupList):
function ListGroup({ items, heading }: PropsGroupList): JSX.Element {
  //   let items: string[] = [
  //     "Sylhet",
  //     "Dhaka",
  //     "Khulna",
  //     "Borishal",
  //     "Chittagong",
  //     "Rajshahi",
  //   ];

  //Hook: useState,
  const [selectedIndex, setselectedIndex] = useState(2);

  //items = [];

  //Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>

      {
        /*conditional rendering*/
        items.length === 0 && <p>No item found</p>
      }
      <ul className="list-group">
        {items.map((district: string, index: number) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={district}
            /*event handling 
        onClick={(event) => console.log(city, index, event.timeStamp)}*/
            onClick={(event) => {
              setselectedIndex(index), console.log(district);
            }}
          >
            {district}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
