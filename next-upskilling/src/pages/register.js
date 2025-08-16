import ReusableForm from "@/components/ReusableForm";

export default function Register() {
  const fields = [
    { name: "username", label: "Username", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "age", label: "Age", type: "number" },
  ];
  const productFields = [
    { name: "title", label: "Product Title", required: true },
    { name: "price", label: "Price", type: "number", required: true },
  ];
  const handleSubmit = (formData) => {
    console.log("formData", formData);
  };
  const handleProductsSubmit = (formData) => {
    console.log("formdata-products", formData);
  };
  return (
    <>
      <div className="flex flex-col w-full  gap-4 p-4">
        <p>lets implement the form..</p>
        <ReusableForm fields={fields} onSubmit={handleSubmit} />
        <ReusableForm fields={productFields} onSubmit={handleProductsSubmit} />
      </div>
    </>
  );
}
