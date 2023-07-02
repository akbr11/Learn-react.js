// import logo from "./logo.svg";
import Product from "./components/Product";
import "./App.css";

const phoneData = [
  { name: "iPhone X", price: "10000000", discount: "50" },
  { name: "Oppo Find X", price: "140000000", discount: "30" },
  { name: "Redmi Note X", price: "12000000", discount: "42" },
  { name: "Vivo XYZ", price: 10000000, discount: 0 },
];

function App() {
  return (
    <div className="App">
      {phoneData.map((phone, id) => (
        <Product
          key={id}
          name={phone.name}
          price={phone.price}
          discount={phone.discount}
        ></Product>
      ))}
    </div>
  );
}

export default App;
