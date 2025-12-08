const Select = ({ label, bg = "bg-base-100", options, ...props }) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold">{label}</label>
      <select
        className={`select select-neutral ${bg} w-full rounded-xl border-gray-300 focus:border-secondary focus:ring-secondary focus:ring-1 outline-none`}
      >
        <option disabled value="">
          Select an option
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} {...props}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
