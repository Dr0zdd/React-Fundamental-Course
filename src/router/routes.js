import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import About from "../pages/About";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/post/:id', element: <PostIdPage/>},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>},
]