function ListGroup() {
  const items = [
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
        {items.map((city) => (
          <li>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
