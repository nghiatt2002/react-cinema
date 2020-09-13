import Home from "../containers/Home"
import Admin from "../containers/Admin"
import Filmsection from "../containers/Home/FlimSection"

const routeHome = [
    {
        exact: true,
        path: '/',
        component: Home
    },
    {
        path: '/detail',
        component: Filmsection
    }
]

const routeAdmin = [
    {
        exact: true,
        path: '/admin',
        component: Admin
    }
]
export {routeHome, routeAdmin}