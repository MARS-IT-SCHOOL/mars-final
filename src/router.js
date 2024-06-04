import { createBrowserRouter } from 'react-router-dom';
import {
  Alliance,
  Home,
  Inventory,
  LeaderBoard,
  LoginPage,
  MarsGames,
  Settings,
  Statistics,
  Shop,
  NotFound,
  RegistrationPage,
} from './pages/pagesImports'; // Assuming your pages are imported here
import App from './App'; // Import the App component
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Typing from './components/Games/Typing/Typing'
import Hangman from './components/Games/Hangman/Hangman';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Wrap App component for access to state
    errorElement: <div>ERROR</div>,
    children: [
      {
        path: "/dashboard/home",
        element: <PrivateRoute />, // Use PrivateRoute here
      },
      {
        path: "/dashboard/games",
        element: <PrivateRoute />, // Use PrivateRoute here
        children: [
          // ... children routes for games
        ],
      },
      {
        path: "/dashboard/leaderboard",
        element: <PrivateRoute />, // Use PrivateRoute here
      },
      {
        path: "/dashboard/settings",
        element: <PrivateRoute />, // Use PrivateRoute here
      },
      {
        path: "/dashboard/shop",
        element: <PrivateRoute />, // Use PrivateRoute here
      },
      {
        path: "/dashboard/statistics",
        element: <PrivateRoute />, // Use PrivateRoute here
      },
      {
        path: "/dashboard/inventory",
        element: <PrivateRoute />, // Use PrivateRoute here
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/typing",
    element: <Typing />,
  },
  {
    path: "/hangman",
    element: <Hangman />,
  },
  {
    path: "/sign-in",
    element: <LoginPage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
]);

export default router;
