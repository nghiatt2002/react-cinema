import HomePage from "../containers/UserTemplate/HomePage/HomePage"
import Admin from "../containers/AdminTemplate/Admin"

const routeUser = [
    {
        exact: true,
        path: '/',
        component: HomePage
    },
]

const routeAdmin = [
    {
        exact: true,
        path: '/admin',
        component: Admin
    }
]
export {routeUser, routeAdmin}