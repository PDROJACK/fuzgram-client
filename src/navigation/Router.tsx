import { createBrowserRouter } from "react-router-dom";
import api from "../app/api";
import Posts from "../features/posts/Posts";
import HomePage from "../screens/Homepage";

export default createBrowserRouter([
  {
    path: "/",
    // element: <ProtectedRoute children={<HomePage />} />,
    element: <HomePage />,
  },
  {
    path: "/:username/:socialUsername",
    loader: async ({ params }) => {
      console.log(params);
      return api.get(`/${params.username}/${params.socialUsername}`);
    },
    element: <Posts />,
  },
  {
    path: "/:username",
    loader: async ({ params }) => {
      console.log(params);
      return api.get(`/${params.username}`);
    },
    element: <Posts />,
  },
]);
