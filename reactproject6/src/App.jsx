import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
 const router =createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"about",
    element:<About/>
  },
  {
    path:"country",
    element:<Country/>
  },
  {
    path:"contact",
    element:<Contact/>
  },

 ])
const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export  default App;