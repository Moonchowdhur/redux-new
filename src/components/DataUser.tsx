import { useState } from "react";

interface User {
  id: string; // Ensure id is always a string
  name: string;
  hobbies: string[];
}

const UserData = () => {
  const [user, setUser] = useState<User>({ id: "0", name: "", hobbies: [] });
  console.log(user);

  return (
    <div className="">
      <form className="grid  gap-12 grid-cols-4">
        <input
          type="text"
          name="id"
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              id: e.target.value,
            }))
          }
          placeholder="id"
        />
        <input
          type="text"
          name="name"
          onChange={(e) =>
            setUser((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          placeholder="Name"
        />
        <input
          type="text"
          onBlur={(e) =>
            setUser((prev) => ({
              ...prev,
              hobbies: [...prev.hobbies, e.target.value],
            }))
          }
          placeholder="hobby"
        />
        <button className="border p-2 w-2/4 bg-pink-600 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserData;
