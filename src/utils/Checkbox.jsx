const Checkbox = ({ label, options, ...props }) => {
  return (
    <div className="">
      <label className="font-semibold">{label}</label>

      <div className="flex flex-wrap py-2 gap-4">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2">
            {/* <input type="checkbox" value={opt} {...props} /> */}
            <input
              type="checkbox"
              className="checkbox checkbox-neutral"
              value={opt}
              {...props}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Checkbox;
