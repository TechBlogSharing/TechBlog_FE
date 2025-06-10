//router

import BlogLayout from "../layouts/BlogLayout";
import HomeLayout from "../layouts/HomeLayout";
import BlogPage from "../pages/blog/Blog";
import HomePage from "../pages/home/Home";

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
];
