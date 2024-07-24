import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/landing-page";
import AccountTypePage from "./pages/account-type";
import CreateAccountPage from "./pages/create-account";
import VerifyAccountPage from "./pages/verify-account";
import CareerStatusPage from "./pages/career-status";
import ProfileSetupPage from "./pages/profile-setup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/account-type",
    element: <AccountTypePage />,
  },
  {
    path: "/create-account",
    element: <CreateAccountPage />,
  },
  {
    path: "/verify-account",
    element: <VerifyAccountPage />,
  },
  {
    path: "/career-status",
    element: <CareerStatusPage />,
  },
  {
    path: "/profile-setup",
    element: <ProfileSetupPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
