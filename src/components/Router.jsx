import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Shop from "./Shop";
import ErrorPage from "./ErrorPage";

const Router = () => {
    const router = createBrowserRouter([
      {       
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [            
            { 
                path: "shop", 
                element: <Shop /> 
            },
            {
              path: "categories/:category",
              element: <Shop />
            }
          ],
      },      
    ]);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;