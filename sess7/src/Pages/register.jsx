import AuthLayouts from "../component/Layouts/AuthLayouts";
import FormRegister from "../component/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
