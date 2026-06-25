import Home from "./components/pages/Home";

const router = createBrowserRouter
export default function Router() {
  return (
      [
        {
          path: "/",
          element: <Home />,
        },
]
  )
}
