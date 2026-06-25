import { useMutation } from "@tanstack/react-query";

export default function AddUser() {
  const addUser = useMutation({
    mutationFn: () => {
      const res = fetch("");
    },
  });
  return <div>AddUser</div>;
}
