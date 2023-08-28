import { Outlet, createBrowserRouter } from "react-router-dom";
import { About, Home, Profile, User } from "../pages";
import { ABOUT, DEFAULT, PROFILE, USER, } from "./keys";
import Auth from "../pages/Auth";

const router = createBrowserRouter([
	{
		path: DEFAULT,
		element: <Outlet />,
		children: [
			{
				element: <Home />,
				index: true,
			},
			{
				element: <Auth user/>,
				path: PROFILE,
				children: [
					{
						element: <Profile />,
						index: true,
					},
					{
						path: USER,
						element: <User />,
					},
				]
			}
		]
	},
	{
		path: ABOUT,
		element: <About />
	},
]);
export default router;