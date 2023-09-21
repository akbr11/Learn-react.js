import AuthLayouts from "../component/Layouts/AuthLayouts";
import FormLogin from "../component/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="text-sm mt-5 text-center">
        Don't have account ?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Sign Up
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
