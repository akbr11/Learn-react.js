const Button = (props) => {
  return (
    <button
      className={`h-10 text-white px-6 rounded-md font-semibold ${props.variant}`}
    >
      {props.children}
    </button>
  );
};
export default Button;
