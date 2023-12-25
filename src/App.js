import Cart from "./components/cart";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Rootlayout from "./layout/rootlayout";

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Route>
    )
    );

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
