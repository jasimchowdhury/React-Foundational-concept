import ListGroup from "./components/ListGroup";

function App() {
  let city: string[] = [
    "Sylhet",
    "Dhaka",
    "Khulna",
    "Borishal",
    "Chittagong",
    "Rajshahi",
  ];
  return (
    <div>
      <ListGroup items={city} heading="Cities" />
    </div>
  );
}

export default App;
