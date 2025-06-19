import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home";
import About from "./pages/About";
import ViewProducts from "./pages/ViewProducts";
import CreateForm from "./pages/CreateForm";
import EditForm from "./pages/EditForm";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import VendorForm from "./pages/VendorForm";
import NotFound from "./pages/NotFound";




const eventHiveRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/view-products', element: <ViewProducts /> },
  { path: '/create-form', element: <CreateForm /> },
  { path: '/edit-form', element: <EditForm /> },
  { path: '/cart', element: <Cart /> },
  { path: '/login', element: <Login /> },
  { path: '/product-detail', element: <ProductDetail /> },
  { path: '/register', element: <Register /> },
  { path: '/vendor-form', element: <VendorForm /> },
  { path: '/*', element: <NotFound /> },
]);

function App() {
 
  return (
    <>
    <RouterProvider router={eventHiveRouter} />
    </>
  )
}

export default App
