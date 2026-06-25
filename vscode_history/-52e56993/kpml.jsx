import { useMutation } from "@tanstack/react-query";

export default function AddUser() {
  const addUser = useMutation({
    mutationFn: () => {
          const res = async fetch("http://localhost:3000/users", {
                method: "post",
              
          }
      )
    },
  });
  return <div>AddUser</div>;
}
