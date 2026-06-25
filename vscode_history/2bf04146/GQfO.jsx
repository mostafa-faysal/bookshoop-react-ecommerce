import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./components/router";

const client = new QueryClient();
export default function App() {
    return (
        <QueryClientProvider client={client}>
            <RouterProvider router={router} />
            <toas
        </QueryClientProvider>
    )
}
