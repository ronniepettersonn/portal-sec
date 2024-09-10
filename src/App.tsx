import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export function App() {

  return (
    <div className=" bg-[#1e1e1e] relative min-h-[100vh]">
      <div className="pb-[535px]">

        <RouterProvider router={router} />
      </div>
    </div>
  )
}


