import AuthLayouts from "../component/Layouts/AuthLayouts";
import FormLogin from "../component/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
