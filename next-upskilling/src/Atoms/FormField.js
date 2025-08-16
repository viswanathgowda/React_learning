import React from "react";

function FormField({ label, name, value, onChange, error, type = "text" }) {
  console.log(`Rendering field: ${name}`);
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className={`border p-2 rounded w-full ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default React.memo(FormField);
