import { useState } from "react";
import { Button } from "@/Atoms/button";

export default function staff() {
  const [count, setCount] = useState(0);

  const handleCounter = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen gap-4">
        <p>Count: {count}</p>
        <Button
          style={
            "bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus: ring-blue-400 cursor-pointer"
          }
          evnt={handleCounter}
        >
          Increment Count
        </Button>
      </div>
    </>
  );
}
