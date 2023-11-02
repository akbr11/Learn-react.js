import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { auth } from "../../services/auth";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handlerLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    // // console.log("login");
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    auth(data, (status, response) => {
      if (status) {
        localStorage.setItem("token", response);
        window.location.href = "/products";
      } else {
        setLoginFailed(response.response.data);
        console.log(response.response.data);
      }
    });
  };
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  });

  return (
    <form onSubmit={handlerLogin}>
      <InputForm
        label="Username"
        id="username"
        type="text"
        placeholder="Jhon Doe"
        name="username"
        ref={usernameRef}
      ></InputForm>
      <InputForm
        label="Password"
        type="password"
        placeholder="************"
        name="password"
      ></InputForm>
      <Button variant="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
