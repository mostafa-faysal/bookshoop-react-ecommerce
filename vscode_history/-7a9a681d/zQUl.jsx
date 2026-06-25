import { useQuery } from "@tanstack/react-query";

export default function Posts() {
  const {
    data: articals,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["articals"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/posts");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  return (
    <section className="p-10">
      <div className="grid grid-cols-12 p-5">
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          {articals?.map()}
        </div>
      </div>
    </section>
  );
}
