// import logo from "./logo.svg";
import Product from "./components/Product";
import Item from "./components/Item";
import "./App.css";

const phoneData = [
  { name: "iPhone X", price: "10000000", discount: "50" },
  { name: "Oppo Find X", price: "140000000", discount: "30" },
  { name: "Redmi Note X", price: "12000000", discount: "42" },
  { name: "Vivo XYZ", price: 10000000, discount: 0 },
];

function App() {
  return (
    <div>
      {/* Conditional with Ternary Operators */}
      <section>
        <h1>Item : </h1>
        <ul>
          <Item isPacked={true} name="Jeruk" />
          <Item isPacked={true} name="Apel" />
        </ul>
      </section>
      {/* end Conditional with Ternary Operators */}

      <br />
      <br />

      {/* Looping using Map */}
      {phoneData.map((phone, id) => (
        <Product
          key={id}
          name={phone.name}
          price={phone.price}
          discount={phone.discount}
        ></Product>
      ))}
      {/* end Looping using Map */}
    </div>
  );
}

export default App;
