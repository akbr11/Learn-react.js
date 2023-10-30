import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  const handlerLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    // console.log("login");
    window.location.href = "/products";
  };

  return (
    <form onSubmit={handlerLogin}>
      <InputForm
        label="Email"
        type="text"
        placeholder="example@gmail.com"
        name="email"
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
    </form>
  );
};

export default FormLogin;
