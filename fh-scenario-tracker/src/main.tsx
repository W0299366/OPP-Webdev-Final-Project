import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ErrorPage from "./routes/ErrorPage.tsx";
import Signup from "./routes/Signup.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} fallbackElement={<ErrorPage />} />
);
