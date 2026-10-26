import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicOnlyRoute from "./routes/PublicOnlyRoute";
import LoginPage from "./features/auth/pages/LoginPage";
import { Fragment } from "react/jsx-runtime";

function App() {


  const router = createBrowserRouter([
    {
      element: <PublicOnlyRoute />,
      children: [
        {
          path: "/",
          element: <LoginPage />,
        }
      ],
    },
    {
      path: "/hospital-admin",
      id: "hospital-admin",
      element: <ProtectedRoute allowedRole="HOSPITAL_ADMIN" />,
    },
    {
      path: "/global-admin",
      id: "global-admin",
      element: <ProtectedRoute allowedRole="GLOBAL_ADMIN" />,
    },
  ],
    {
      async patchRoutesOnNavigation({ path, patch }) {
        if (path.startsWith("/global-admin")) {
          const { default: globalAdminRoutes } =
            await import("./routes/globalAdminRoutes");

          patch("global-admin", globalAdminRoutes);
        }

        if (path.startsWith("/hospital-admin")) {
          const { default: hospitalAdminRoutes } =
            await import("./routes/hospitalAdminRoutes");

          patch("hospital-admin", hospitalAdminRoutes);
        }
      },
    });


  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  )
}

export default App