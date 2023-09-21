import React from "react";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";

const App = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <LoginPage />
      {/* <RegisterPage /> */}
    </div>
  );
};
export default App;
