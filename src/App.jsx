import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "../router";


import { Toaster } from "react-hot-toast";

const client = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={client}>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
