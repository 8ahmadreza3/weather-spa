import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cities from "./pages/Cities";

const routes = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Home /> },
  { path: "/cities/:keyWord", element: <Cities /> }
];

export default routes;