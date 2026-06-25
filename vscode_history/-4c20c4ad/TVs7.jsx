import { useMutation, useQuery } from "@tanstack/react-query";
import { useRef } from "react";

export default function AddPosts() {
  const titleRef = useRef();
  const disRef = useRef();
  const addPost = useMutation({
    mutationFn: async () => {
      const res = await fetch("http://localhost:3000/articals", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: titleRef.current.value,
          description: disRef.current.value,
        }),
      });
      const data = await res.json();
      console.log(data);

      return data;
    },
  });
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["articals"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/articals");
      const data = 
    },
  });
  return (
    <section className="my-5 px-15">
      <form
        className="p-4 mx-auto border rounded-md shadow-sm shadow-gray-700 w-[75%] lg:w-[50%] flex flex-col gap-3 items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(
            "Form submitted! Title:",
            titleRef.current?.value,
            "Desc:",
            disRef.current?.value,
          );
          addPost.mutate(undefined, {
            onSuccess: (data) => console.log("Mutation success:", data),
            onError: (error) => console.error("Mutation error:", error),
          });
        }}
      >
        <h2>Creat post</h2>
        <input
          type="text"
          placeholder="tittle"
          ref={titleRef}
          className="w-full p-2 border border-gray-800 rounded-md shadow-md outline-0 shadow-gray-500"
        ></input>
        <input
          type="text"
          placeholder="tittle"
          ref={disRef}
          className="w-full p-2 border border-gray-800 rounded-md shadow-md outline-0 shadow-gray-500"
        ></input>
        <button className="w-full p-3 text-white rotate-0 bg-gray-900 border cursor-pointer">
          Add post
        </button>
      </form>
    </section>
  );
}
