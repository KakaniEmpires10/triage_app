const Input = (props) => {
  return (
    <div className="relative">
      <input
        className="peer form-text placeholder-transparent rounded-2xl border-0 border-b-2 border-black w-full bg-transparent focus:ring-0 focus:border-slate-500 bg-white placeholder-shown:bg-transparent focus:bg-white duration-300"
        onChange={props.onChange}
        type={props.type}
        name={props.name}
        id={props.id}
        required={props.required}
        value={props.value}
        placeholder="just there"
      />
      <label
        className="absolute left-1 -top-6  font-semibold transition-all duration-300 peer-placeholder-shown:left-3 peer-placeholder-shown:top-1.5 peer-focus:left-1 peer-focus:-top-6"
        htmlFor={props.id}
      >
        {props.label}
      </label>
    </div>
  );
};

export default Input;
