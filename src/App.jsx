import { createBrowserRouter,RouterProvider,createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Advocacy from "./pages/Advocacy";
import About from "./pages/About";
import Scg from "./pages/Scg";
import Product from "./pages/Product";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/advocacy' element={<Advocacy />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/scg' element={<Scg />} />
          <Route path='/product' element={<Product />} />
        </Route>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
