import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Bounce, toast } from "react-toastify";

export default function AddPosts() {
  const titleRef = useRef();
  const disRef = useRef();
  const queryClient = useQueryClient;
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
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryFn:
      });
      toast.success("Successfully toasted!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    },
  });
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["articals"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/articals");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
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
      <section className="p-10">
        <div className="grid grid-cols-12 gap-4 p-5">
          {data?.map((articale, index) => (
            <div
              key={index}
              className="col-span-12 p-5 border rounded-md shadow-md shadow-amber-400 md:col-span-6 lg:col-span-3"
            >
              <h2>{articale.title}</h2>
              <p>{articale.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
