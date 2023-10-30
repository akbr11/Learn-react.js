const Button = (props) => {
  const { children, variant, onClick = () => {}, type = "button" } = props;
  return (
    <button
      className={`h-10 text-white px-6 rounded-md font-semibold ${variant}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
