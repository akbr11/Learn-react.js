// import logo from "./logo.svg";
import Product from "./components/Product";
import Item from "./components/Item";
import Recipe from "./components/Recipe";
import Cup from "./components/Cup";
import { peopleData } from "./components/assets/Data";
import { getImageUrl } from "./components/assets/Utils";
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
      {/* Local Mutation */}
      <section>
        <Cup guest={2} />
        <Cup guest={3} />
        <Cup guest={4} />
      </section>
      {/* end Local Mutation */}

      <br />
      <br />

      {/* Purity of components as formula */}
      <section>
        <h1>Spiced Chai Recipe</h1>
        <h2>For two</h2>
        <Recipe drinkers={2} />
        <h2>For a gathering</h2>
        <Recipe drinkers={4} />
      </section>
      {/* end Purity of components as formula */}

      <br />
      <br />

      {/* Rendering List */}
      <ul>
        {peopleData.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
      {/* end Rendering List */}

      <br />
      <br />

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
