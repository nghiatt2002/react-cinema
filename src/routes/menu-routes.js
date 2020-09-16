import HomePage from "../containers/UserTemplate/HomePage/HomePage"
import Admin from "../containers/AdminTemplate/Admin"
import CommingSoonPage from '../containers/CommingSoonPage/CommingSoonPage'
import BookingTicketPage from "../containers/UserTemplate/BookingTicketPage/BookingTicketPage"

const routeUser = [
    {
        exact: true,
        path: '/',
        component: BookingTicketPage
    },
    {
        exact: false,
        path: '/comming-soon',
        component: CommingSoonPage
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