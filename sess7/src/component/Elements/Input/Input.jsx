const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <div className="mb-6">
      <input
        type={type}
        className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-80"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
