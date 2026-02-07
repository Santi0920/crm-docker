import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout } from "@/shared/layouts/AuthLayout";
import { LoginPage } from "@/modules/auth/pages/LoginPage";
import { DashboardSideBar } from "@/shared/layouts/DashboardSideBar";
import { DashboardPage } from "@/modules/dashboard/pages/DashboardPage";
import { ErrorPage } from "@/shared/pages/ErrorPage";
import { ClientsPage } from "../modules/clients/pages/ClientsPage";



export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace />;
  return children;
};
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />, 
    children: [
      { index: true, element: <Navigate to="/login" /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardSideBar />,
    children: [
      { index: true, element: <PrivateRoute><DashboardPage /></PrivateRoute> },
    ],
  },
  {
    path: "/clients",
    element: <DashboardSideBar />,
    children: [
      { index: true, element: <PrivateRoute><ClientsPage /></PrivateRoute> },
    ],
  }
]);
