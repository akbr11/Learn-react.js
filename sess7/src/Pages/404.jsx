import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Oopss .. Errorr</h1>
      <p className="mt-2">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
