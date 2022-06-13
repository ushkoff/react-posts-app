import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/about', element: <About/>, axact: true},
    {path: '/posts', element: <Posts/>, axact: true},
    {path: '/posts/:id', element: <PostIdPage/>, axact: true}
]

export const publicRoutes= [
    {path: '/login', element: <Login/>, axact: true}
]