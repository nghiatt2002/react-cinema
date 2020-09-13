import HomePage from "../containers/UserTemplate/HomePage/HomePage";
import Admin from "../containers/AdminTemplate/Admin";
import MovieDetailPage from "../containers/UserTemplate/MovieDetailPage/MovieDetailPage";

const routeUser = [
    {
        exact: true,
        path: '/',
        component: HomePage
    },
    {
        exact: false,
        path: '/phim',
        component: MovieDetailPage
    }
]

const routeAdmin = [
    {
        exact: true,
        path: '/admin',
        component: Admin
    }
]
export {routeUser, routeAdmin}