import { useEffect, useRef, useState } from "react";
import { Button } from "@/Atoms/button";
import Staff from "@/components/Staff";

export default function staff() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const approvedRef = useRef(null);

  const handleCounter = () => {
    setCount((prev) => prev + 1);
  };

  const fetchUsers = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setUsers(data);
      })
      .catch((err) => {
        console.error("error at fetching users", err);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUseRef = () => {
    const inputVal = approvedRef.current.value;
    console.log("typed values", inputVal);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center gap-4 my-3">
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
        <div className=" flex flex-col my-3 gap-3 justify-center">
          {users.map((user) => (
            <Staff key={user.id} name={user.name} phone={user.phone} />
          ))}
        </div>

        <div className="flex flex-col justify-center ">
          <input
            ref={approvedRef}
            className="border-2 my-2 px-3 py-3 rounded"
            placeholder="type something!"
          />
          <Button
            style={
              "bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus: ring-blue-400 cursor-pointer"
            }
            evnt={handleUseRef}
          >
            use Ref{" "}
          </Button>
        </div>
      </div>
    </>
  );
}
