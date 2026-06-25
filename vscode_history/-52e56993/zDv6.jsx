import { useMutation } from "@tanstack/react-query";

export default function AddUser() {
  const addUser = useMutation({
    mutationFn: async () => {
      const res = await fetch("http://localhost:3000/users", {
        method: "post",
      });
    },
  });
  return <div>AddUser</div>;
}
