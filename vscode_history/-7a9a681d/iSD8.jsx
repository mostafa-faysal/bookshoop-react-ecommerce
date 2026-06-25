import { useQuery } from "@tanstack/react-query";

export default function Posts() {
  const {
    data: articals,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["articals"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/articals");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  if (isLoading) return <h1 className="mt-10 text-center">Loading...</h1>;
  if (isError)
    return (
      <h1 className="mt-10 text-center text-red-500">Error loading posts.</h1>
    );

  return (
    <section className="p-10">
      <div className="grid grid-cols-12 gap-4 p-5">
        {articals?.map((artical, index) => (
          <div
            key={index}
            className="col-span-12 p-5 border rounded-md shadow-md shadow-amber-400 md:col-span-6 lg:col-span-3"
          >
            <h2>{artical.title}</h2>
            <p>{artical.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
