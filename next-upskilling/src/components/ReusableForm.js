import { useCallback, useEffect, useState } from "react";
import FormField from "@/Atoms/FormField";

export default function ReusableForm({ fields, onSubmit }) {
  const [formData, setFormData] = useState(() =>
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const validate = () => {
    const newErrors = {};

    fields.forEach((f) => {
      if (f.required && !formData[f.name]) {
        newErrors[f.name] = `${f.label} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
      ); // reset
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      {fields.map((f) => (
        <FormField
          key={f.name}
          name={f.name}
          value={formData[f.name]}
          label={f.label}
          type={f.type || "text"}
          error={errors[f.name]}
          onChange={handleChange}
        />
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer "
      >
        Submit
      </button>
    </form>
  );
}
