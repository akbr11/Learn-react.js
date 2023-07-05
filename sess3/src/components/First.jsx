import { useNavigate } from "react-router-dom";
const First = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3>FirstPage Route</h3>
      <button onClick={() => navigate("/about")}>Second Page</button>
    </>
  );
};

export default First;
