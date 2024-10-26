import { lazy } from "react";

interface IRoute {
  path: string;
  component: React.ReactNode;
}

const SignUp = lazy(() => import("pages/SignUp"));
const SignIn = lazy(() => import("pages/SignIn"));
const Home = lazy(() => import("pages/Home"));

const routeConfig: IRoute[] = [
  { path: "/sign-up", component: <SignUp /> },
  { path: "/sign-in", component: <SignIn /> },
  { path: "/", component: <Home /> },
];

export default routeConfig;
