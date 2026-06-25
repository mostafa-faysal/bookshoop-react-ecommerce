import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";

export default function AddUser() {
  const nameRef = useRef();
  const jopTitleRef = useRef();
  const phoneRef = useRef();

  const addUser = useMutation({
    mutationFn: async () => {
      const res = await fetch("http://localhost:3000/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameRef.current.value,
          jopTitle: jopTitleRef.current.value,
          phone: phoneRef.current.value,
          active: true,
        }),
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  return (
    <section className="my-5 px-15">
      <form
        className="p-4 mx-auto border rounded-md shadow-sm shadow-gray-700 w-[75%] lg:w-[50%] flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          addUser.mutate();
        }}
      >
        <h2 className="text-xl font-bold">Add user</h2>
        <input
          type="text"
          placeholder="Name"
          ref={nameRef}
          className="w-full p-2 border border-gray-800 rounded-md shadow-md outline-0 shadow-gray-500"
        />
        <input
          type="text"
          placeholder="Job Title"
          ref={jopTitleRef}
          className="w-full p-2 border border-gray-800 rounded-md shadow-md outline-0 shadow-gray-500"
        />
        <input
          type="text"
          placeholder="Phone"
          ref={phoneRef}
          className="w-full p-2 border border-gray-800 rounded-md shadow-md outline-0 shadow-gray-500"
        />
        <button
          type="submit"
          className="w-full p-3 text-white bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700"
        >
          Add Usser
        </button>
      </form>
    </section>
  );
}
