import Team from "../components/Team";
import { ContactDetails, ContactForm } from "./Contact.page";
import { AboutOrganisers, AboutTechX, AboutCSS } from "./Home.page";
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


