import { useQuery } from "@tanstack/react-query"

export default function Posts() {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["articals"],
        queryFn: async () => {
            const res = await fetch("http://localhost:3000/posts")
            const data = await res.json()
            console.log(data);
            return data
        },
    })
  return (
    <section className="px-15">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="border rounded-md shadow-md shadow-amber-400">
            <h2>title</h2>
            <p></p>
          </div>
        </div>
        
      </div>
  </section>
  )
}
