import "../App.css";
import logo from "../logo.svg";
import Title from "../components/Title";

function Apps() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title />
      </header>
    </div>
  );
}

export default Apps;
