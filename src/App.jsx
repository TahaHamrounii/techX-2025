import { Suspense } from "react";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import AppLayout from "./app/components/AppLayout.jsx";
import Speaker from "./app/components/Speaker.jsx";
import Speakers from "./app/components/Speakers.jsx";
import ExpoPage from "./app/pages/Expo.page.jsx";
import ExpoDetailsPage from "./app/pages/ExpoDetails.page.jsx";
import SchedulePage from "./app/pages/Schedule.page.jsx";
import { setInitialTheme } from "./app/utils/themeSwitcher.js";
import HomePage from "./app/pages/Home.page.jsx";
import Team from "./app/components/Team.jsx";
import TunisiaPage from "./app/pages/Tunisia.page.jsx";
import TeamMember from "./app/components/TeamMember.jsx";
import ContactPage from "./app/pages/Contact.page.jsx";
import SponsorUsPage from "./app/pages/SponsorUs.page.jsx";
import ThreeExperience from "./app/components/ThreeExperience.jsx";
import Phase from "./app/components/Phase.jsx";

setInitialTheme();

const router = createBrowserRouter([
	{
		element: <AppLayout></AppLayout>,
		children: [
			{
				path: "/",
				// index: true,
				element: <HomePage />,
			},
			{
				path: "tunisia",
				element: <TunisiaPage />,
			},
			{
				path: "expo",
				element: <ExpoPage />,
			},
			{
				path: "schedule",
				element: <SchedulePage />,
			},
			{
				path: "expo/:companySlug",
				element: <ExpoDetailsPage />,
			},
			{
				path: "speakers",
				element: <Speakers />,
			},
			{
				path: "speakers/:speakerSlug",
				element: <Speaker />,
			},
			{
				path: "team",
				element: <Team />,
			},
			// {
			// 	path: "virtual",
			// 	element: <Phase />,
			// },
			// {
			// 	path: "team/:teamMemberSlug",
			// 	element: <TeamMember />,
			// },
			{
				path: "contact",
				element: <ContactPage />,
			},
			{
				path: "sponsor-us",
				element: <SponsorUsPage />,
			},
		],
	},
	// {
	// 	path: "game",
	// 	element: (
	// 		<Suspense fallback={null}>
	// 			<ThreeExperience />
	// 		</Suspense>
	// 	),
	// },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
