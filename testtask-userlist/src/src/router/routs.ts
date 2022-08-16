import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import { HOME_ROUTE, PROFILE_ROUTE } from "../utils/consts";

export const publicRouts = [
    {
        path: HOME_ROUTE,
        Component: HomePage,
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfilePage,
    }
]
