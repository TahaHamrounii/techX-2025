import Team from "../components/Team";
import { ContactDetails, ContactForm } from "./Contact.page";
import { AboutOrganisers, AboutTechX, AboutTunisiaSection } from "./Home.page";
import { Fade } from "react-awesome-reveal";
import CustomImage from "../components/CustomImage";
import { Link } from "react-router-dom";
export default function AboutUs() {
	return (
		<div>
			<Fade triggerOnce>
				<AboutOrganisers />
				<AboutCSS />
			</Fade>

			<Fade triggerOnce>
				<AboutTechX />
			</Fade>

			<Fade triggerOnce>
				<Team />
			</Fade>

			<Fade triggerOnce>
				<div className="mt-4">
					<ContactDetails />
				</div>
			</Fade>

			<Fade triggerOnce>
				<ContactForm />
			</Fade>
		</div>
	);
}


function AboutCSS() {
	return (
		<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
			<div className="col-span-6 mx-auto md:order-last">
				<CustomImage
					src={"/assets/partners/ieee-national/syp.png"}
					className="mx-auto h-52 object-contain sm:h-96"
					alt="about syp"
				/>
			</div>
			<div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
					About IEEE CS SYP.
				</h1>
				<h1 className="mb-4 text-lg font-medium  lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
					CS SYP (Student and Young Professionals) program is an initiative by the IEEE Computer Society designed to engage, support, and empower students and young professionals in the field of computing and technology.
				</h1>
				<div>
					<Link
						// type="button"
						to={"https://syp.computer.org/"}
						target="_blank"
						rel="noreferrer"
						className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
					>
						{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
						<span className="">Learn more IEEE CS SYP</span>
						{/* </div> */}
					</Link>
				</div>
			</div>
		</section>
	)
}