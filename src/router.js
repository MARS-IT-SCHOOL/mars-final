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
    RegistrationPage
} from './pages/pagesImports';
import App from './App';
import Typing from './components/Games/Typing/Typing';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>ERROR</div>,
        children: [
            {
                path: "/dashboard/home",
                element: <Home />,
            },

            {
                path: "/dashboard/games",
                element: <MarsGames />,
                children: [

                ]
            },
            {
                path: "/dashboard/leaderboard",
                element: <LeaderBoard />,
            },
            {
                path: "/dashboard/settings",
                element: <Settings />,
            },
            {
                path: "/dashboard/shop",
                element: <Shop />,
            },
            {
                path: "/dashboard/statistics",
                element: <Statistics />,
            },
            {
                path: "/dashboard/inventory",
                element: <Inventory />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
    {
        path: "/typing",
        element: <Typing />

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


export default router