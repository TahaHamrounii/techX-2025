const routes = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Schedule",
		href: "/schedule",
	},
	{
		title: "Speakers",
		href: "/speakers",
	},

	// Removed duplicate mobileOnly entries (Schedule, Speakers, Venue, Challenges)
	// to avoid double appearance in the mobile navigation modal.

	{
		title: "Schedule",
		href: "/schedule",
		mobileOnly: true,
	},
	{
		title: "Speakers",
		href: "/speakers",
		mobileOnly: true,
	},

	{
		title: "Venue",
		href: "/venue",
		mobileOnly: true,
	},
		{
		title: "Challenges",
		href: "/challenges",
		mobileOnly: true,
	},

	// {
	// 	title: "Registration",
	// 	href: "/registration",
	// 	mobileOnly: true,
	// },
	// {
	// 	title: "Ambassadors",
	// 	href: "https://forms.gle/Q88TpsVymyvDYQPBA",
	// 	external: true,
	// },
	// {
	// 	title: "Expo",
	// 	href: "/expo",
	// },

	// {
	// 	title: "Reveal",
	// 	href: "/reveal",
	// 	external: true,
	// },

	// {
	// 	title: "Event Feedback",
	// 	href: "/event-feedback",
	// 	eventStatus: "ended",
	// },
	// {
	// 	title: "Game",
	// 	href: "/game",
	// },
];

export default routes;
