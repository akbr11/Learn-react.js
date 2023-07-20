// import logo from "./logo.svg";
import Product from "./components/Product";
import Item from "./components/Item";
import Recipe from "./components/Recipe";
import Cup from "./components/Cup";
import Alertbutton from "./components/AlertButton";
import { peopleData } from "./components/assets/Data";
import { getImageUrl } from "./components/assets/Utils";

import { useState } from "react";
import { Datas } from "./components/assets/Datas";
import "./App.css";

const phoneData = [
  { name: "iPhone X", price: "10000000", discount: "50" },
  { name: "Oppo Find X", price: "140000000", discount: "30" },
  { name: "Redmi Note X", price: "12000000", discount: "42" },
  { name: "Vivo XYZ", price: 10000000, discount: 0 },
];

function App() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  function handleClickPrev() {
    setIndex(index - 1);
  }

  let sculpture = Datas[index];
  return (
    <div>
      {/* slide button next and previous */}
      <>
        <button onClick={handleClickPrev}>Previous</button>
        <button onClick={handleClick}>Next</button>
        <h2>
          <i>{sculpture.name} </i>
          by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {Datas.length})
        </h3>
        <img src={sculpture.url} alt={sculpture.alt} />
        <p>{sculpture.description}</p>
      </>
      {/* end slide button next and previous */}

      {/* Alert */}
      <Alertbutton message="Playing">Play</Alertbutton>
      {/* end Alert */}

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
