import { useMutation } from "@tanstack/react-query";

export default function AddUser() {
  const addUser = useMutation({
    mutationFn: () => {
      const res = fetch("http://localhost:3000/users");
    },
  });
  return <div>AddUser</div>;
}
