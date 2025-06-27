//router

import BlogLayout from "../layouts/BlogLayout";
import HomeLayout from "../layouts/HomeLayout";
import IntroduceLayout from "../layouts/IntroduceLayout"
import BlogPage from "../pages/blog/Blog";
import HomePage from "../pages/home/Home";
import PostPage from "../pages/post/PostPage";
import IntroducePage from "../pages/introduce/Introduce"

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
    path:"/:topic/post/:blogName",
    component:PostPage,
    layout:BlogLayout
  },
  {
    path:"/introduce",
    component:IntroducePage,
    layout: IntroduceLayout
  }
];
