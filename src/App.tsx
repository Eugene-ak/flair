import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./components/pages/landing-page";
import AccountTypePage from "./components/pages/account-type";
import CreateAccountPage from "./components/pages/create-account";
import VerifyAccountPage from "./components/pages/verify-account";
import CareerStatusPage from "./components/pages/career-status";
import ProfileSetupPage from "./components/pages/profile-setup";

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
