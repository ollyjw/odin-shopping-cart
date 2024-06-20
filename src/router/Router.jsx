import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../routes/Home";
import Shop from "../routes/Shop";
import ErrorPage from "../components/ErrorPage";
import Cart from "../routes/Cart";
import { CartContextProvider } from "../contexts/CartContext";

const Router = () => {
    const router = createBrowserRouter([
      {       
        path: "/",
        element: (
          <CartContextProvider>
            <App />
          </CartContextProvider>
      ),
        errorElement: <ErrorPage />,
        children: [            
            {
              index: true,
              element: <Home />
            },
            { 
                path: "shop", 
                element: <Shop /> 
            },
            {
              path: "categories/:category",
              element: <Shop />
            },
            {
              path: "cart",
              element: <Cart />
            }
          ],
      },      
    ]);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;