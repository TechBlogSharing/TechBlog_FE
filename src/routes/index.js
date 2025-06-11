//router

import BlogLayout from "../layouts/BlogLayout";
import HomeLayout from "../layouts/HomeLayout";
import BlogPage from "../pages/blog/Blog";
import HomePage from "../pages/home/Home";
import PostPage from "../pages/post/PostPage";

export const routers = [
  {
    path: "/",
    component: HomePage,
    layout: HomeLayout,
  },
  {
    path: "/blog",
    component: BlogPage,
    layout: BlogLayout,
  },
  {
    path:"/post",
    component:PostPage,
    layout:null
  }
];
