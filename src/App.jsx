import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home";
import About from "./pages/About";
import EditForm from "./pages/EditForm";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import VendorForm from "./pages/VendorForm";
import NotFound from "./pages/NotFound";
import VendorDashboard from "./pages/VendorDashboard";
import UserPage from "./pages/UserPage";
import UserProfile from "./pages/UserProfile";
import { Toaster, } from 'sonner';



const eventHiveRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/edit-form/:id', element: <EditForm /> },
  { path: '/login', element: <Login /> },
  { path: '/product-detail', element: <ProductDetail /> },
  { path: '/register', element: <Register /> },
  { path: '/vendor-form', element: <VendorForm /> },
  { path: '/*', element: <NotFound /> },
  { path: '/vendor-dashboard', element: <VendorDashboard />},
  { path: '/user-page', element: <UserPage />},
  { path: '/user-profile', element: <UserProfile />},
    
]);

function App() {
 
  return (
    <>
    <RouterProvider router={eventHiveRouter} />
        <Toaster richColors/>
    </>
  )
}

export default App
