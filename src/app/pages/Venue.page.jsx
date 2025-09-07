import { Fade } from "react-awesome-reveal";
import hotelview from "../../assets/hotel/image.png";
import {

	faSquareParking,
	faPlaneDeparture,
	faWifi
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CustomImage from "../components/CustomImage";

export default function VenuePage() {
	return (
		<>
			<Fade triggerOnce>
				<section className="mt-10">
					<div className="xflex  items-center justify-center gap-2 text-center lg:mb-7">
						<h1 className="text-3xl font-bold tracking-tight   lg:text-5xl lg:font-extrabold lg:leading-none">
							El Mouradi Club Kantaoui, Sousse, Tunisie
						</h1>

						<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
							<div className="col-span-6 mx-auto">
								<CustomImage
									src={hotelview}
									className=" rounded-2xl shadow-lg"
									alt="EL mouradi image"
								/>
							</div>
							<div className="col-span-6">
								<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-center lg:text-2xl lg:font-normal flex justify-center">
									El Mouradi Kantaoui is a modern coastal hotel and conference complex
									located in the Kantaoui marina area of Sousse. It offers conference halls, meeting
									rooms, on-site catering, and easy access to local transport and accommodation</h1>
							</div>
						</section>

					</div>

					<AboutElMouradi />



						<div className="flex justify-center mb-8 mt-8">
						<h1 className="text-3xl font-bold tracking-tight  lg:text-5xl lg:font-extrabold lg:leading-none">
							Address
						</h1>
						</div>

					<iframe
						title="techx location"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6463.244144347799!2d10.577458545743543!3d35.907270690263445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd89a3a6d5091f%3A0x72ebacd66b583b37!2sEl%20Mouradi%20Club%20Kantaoui!5e0!3m2!1sen!2stn!4v1757259960847!5m2!1sen!2stn"
						className="w-full rounded-2xl shadow-lg"
						height="500"
						style={{
							border: 0,
							// width: "100%",
						}}
						allowFullScreen
						referrerPolicy="no-referrer-when-downgrade"
						loading="lazy"
					>

					</iframe>
				</section>{" "}
			</Fade>
		</>
	);

}



function AboutElMouradi() {
	return (
		<div className=" bbg-white rounded-2xl py-24 sm:py-10">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">
					About El Mouradi Kantaoui
				</h2>
				<div className="mx-auto mt-10 grid max-w-lg items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-12">
					<div className="col-span-4 flex flex-col items-center gap-4">
						<FontAwesomeIcon icon={faSquareParking} className="h-14 w-14 object-contain" />

						<div className="text-2xl font-bold">Parking and accessibility</div>
						<p className="text-center">On-site parking and accessible entrances available.</p>
					</div>
					<div className="col-span-4 flex flex-col items-center gap-4">
						<FontAwesomeIcon icon={faPlaneDeparture} className="h-14 w-14 object-contain" />

						<div className="text-2xl font-bold">Nearest airport</div>
						<p className="text-center">
							The nearest airport is Monastir Habib Bourguiba International Airport (MIR), located approximately 20 km from the hotel.
						</p>
					</div>
					<div className="col-span-4 flex flex-col items-center gap-4">
						<FontAwesomeIcon icon={faWifi} className="h-14 w-14 object-contain" />

						<div className="text-2xl font-bold">Hotel amenities</div>
						<p className="text-center">
							El Mouradi Kantaoui offers a range of amenities including free Wi-Fi, and meals.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}