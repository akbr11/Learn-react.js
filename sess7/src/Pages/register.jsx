import AuthLayouts from "../component/Layouts/AuthLayouts";
import FormRegister from "../component/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center">
        Have an account ?{" "}
        <Link to="/" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
