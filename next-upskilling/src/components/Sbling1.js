import { contextData } from "@/pages/context";
import { useContext } from "react";
export default function Sibling() {
  const { parent, addContext } = useContext(contextData);
  console.log("context", parent);

  return (
    <>
      <div className="flex flex-col  m-2">
        <input
          type="text"
          className="border rounded py-2 px-3"
          onChange={(e) => addContext(e.target.value)}
        />
        <p>{parent}</p>
      </div>
    </>
  );
}
