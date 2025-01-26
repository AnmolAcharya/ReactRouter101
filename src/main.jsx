import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App"; //moved into the routes.jsx
// import Profile from "./Profile";
// import ErrorPage from "./ErrorPage";\
// import App from "./App";
import routes from "./routes";


const router = createBrowserRouter(routes);
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage /> <<<<----------Moved into routes.jsx

//   },
//   {
//     path: "profile/:name",
//     element: <Profile />,
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);



//////////////Below is the part before DYNAMIC SEGMENTS ////////////////////////////////////////////

//////////////////Earlier parts of learning the react router and rendering pages ///////////////////

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
// import Profile from "./Profile";
// import DefaultProfile from "./DefaultProfile";
// import Spinach from "./components/Spinach";
// import Popeye from "./components/Popeye";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "profile",
//     element: <Profile />,
//     children: [
//       {index: true, element: <DefaultProfile />},
//       { path: "spinach", element: <Spinach /> },
//       { path: "popeye", element: <Popeye /> },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
