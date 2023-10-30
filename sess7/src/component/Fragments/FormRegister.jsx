import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="Insert your name here ..."
        name="fullname"
      ></InputForm>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      ></InputForm>
      <InputForm
        label="Password"
        type="password"
        placeholder="************"
        name="password"
      ></InputForm>
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="************"
        name="confirmPassword"
      ></InputForm>
      <Button variant="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
