const AuthLayouts = (props) => {
  const { title, children } = props;
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
      <p className="font-medium text-slate-500 mb-8">
        Please, enter your details
      </p>
      {children}
    </div>
  );
};

export default AuthLayouts;