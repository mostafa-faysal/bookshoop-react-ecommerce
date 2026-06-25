import { useMutation } from "@tanstack/react-query";

export default function AddUser() {
  const addUser = useMutation({
    mutationFn: async () => {
      const res = await fetch("http://localhost:3000/users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const data = await res.json();
    },
  });

  return <div>AddUser</div>;
}
