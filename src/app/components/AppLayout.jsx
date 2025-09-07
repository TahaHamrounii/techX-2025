import { motion } from "framer-motion";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";
import ScrollToTop from "react-scroll-to-top";
import { twMerge } from "tailwind-merge";

const pageVariants = {
	initial: {
		opacity: 0,
	},
	in: {
		opacity: 1,
	},
	out: {
		opacity: 0,
	},
};

const pageTransition = {
	type: "tween",
	ease: "linear",
	duration: 0.2,
};

export default function AppLayout({ children }) {
	const { pathname } = useLocation();

	return (
		<>
			<div className="flex min-h-full flex-col">
				{/* Sticky header wrapper (Navigation already has its own sticky classes, this ensures layout-level stickiness if that changes) */}
				<div className="sticky top-0 z-50 w-full"> 
					<Navigation />
				</div>

				<main className="container mx-auto flex flex-1 p-4 py-8 2xl:px-24">
					<motion.div
						className="flex-1"
						key={pathname}
						initial="initial"
						animate="in"
						variants={pageVariants}
						transition={pageTransition}
					>
						{children}
						<Outlet />
					</motion.div>
				</main>

				<Footer />
			</div>

			{/* <div className="flex min-h-full flex-col  dark:text-gray-50">
				<Navigation />

				<main className="container mx-auto flex-1 p-4 py-8">
					{children}
					<Outlet />
				</main>

				<Footer />
			</div> */}

			<ScrollToTop
				className={twMerge(
					"flex items-center justify-center !rounded-full p-3 transition"
				)}
			/>

			<ScrollRestoration />
		</>
	);
}
