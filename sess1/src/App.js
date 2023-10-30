import "./App.css";
// import Hello from "./components/Hello";
import Props from "./components/Props";

function App() {
  return (
    <div>
      {/* <Hello /> */}
      <Props sender="dian" content="Hi, Apa kabar?" />
      <Props sender="petanikode" content="Kabar Baik" />
    </div>
  );
}

export default App;
