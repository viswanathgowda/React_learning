import React, { createContext, useContext, useState } from "react";
import Sibling from "@/components/Sbling1";
export const contextData = createContext();
export default function Context() {
  const [parent, setParent] = useState("");
  const addContext = (data) => {
    setParent(data);
  };
  return (
    <>
      <contextData.Provider value={{ parent, addContext }}>
        <Parent />
        <Child1 />
        <Sibling />
      </contextData.Provider>
    </>
  );
}

function Parent() {
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

function Child1() {
  const { parent } = useContext(contextData);
  return (
    <>
      <div className="felx flex-col m-2">
        <p>Children compo</p>
        <p>{parent}</p>
      </div>
      <Sibling />
    </>
  );
}
