import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cities from "./pages/Cities";
import States from "./pages/States";

const routes = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Home /> },
  { path: "/cities/:city", element: <Cities /> },
  { path: '/states/:state', element: <States/>}
];

export default routes;
