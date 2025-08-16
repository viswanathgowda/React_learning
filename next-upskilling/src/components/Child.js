import React from "react";
import { Button } from "@/Atoms/button";

function Child({ chidEvnt }) {
  console.log("child rendered");
  return (
    <Button
      style={
        "bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus: ring-blue-400 cursor-pointer"
      }
      evnt={chidEvnt}
    >
      Child Btn
    </Button>
  );
}

export default React.memo(Child);
