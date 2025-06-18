import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home";
import About from "./pages/About";
import BuyerForm from "./pages/BuyerForm";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import VendorForm from "./pages/VendorForm";
import NotFound from "./pages/NotFound";




const eventHiveRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/buyer-form', element: <BuyerForm /> },
  { path: '/categories', element: <Categories /> },
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
