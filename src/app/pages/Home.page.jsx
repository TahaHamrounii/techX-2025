import { useEffect } from "react";
import MainBlack from "../../assets/main black.png";
import MainWhite from "../../assets/main white.png";
import polyPic from "../../assets/poly-sb-pic.png";
import isetPic from "../../assets/iset-sb-pic.jpg";

import TSYP2014 from "../../assets/tsyp-editions/tsyp-2014.jpg";
import TSYP2016 from "../../assets/tsyp-editions/tsyp-2016.jpg";
import TSYP2017 from "../../assets/tsyp-editions/tsyp-2017.jpg";
import TSYP2018 from "../../assets/tsyp-editions/tsyp-2018.png";
import TSYP2019 from "../../assets/tsyp-editions/tsyp-2019.jpg";
import TSYP2020 from "../../assets/tsyp-editions/tsyp-2020.jpg";

// memories assets
// import memory2 from "../../assets/memories/356551992_226751036434551_8933123460754285924_n.jpg";
import memory2 from "../../assets/memories/320777930_2311490175678507_4343281339549131430_n.jpg";
import memory3 from "../../assets/memories/356597928_284785967424808_4014952816457019128_n.jpg";
// import memory4 from "../../assets/memories/356638153_1045852983243072_6319438153536457058_n.jpg";
import memory4 from "../../assets/memories/320890318_2005696479633031_3916944159098055484_n.jpg";
import memory5 from "../../assets/memories/356779690_1021512152540830_7436088057197797763_n.jpg";
// import memory6 from "../../assets/memories/356870057_205006965857961_5503311855628802179_n.jpg";
import memory6 from "../../assets/memories/322250720_721543699171031_4597921719413023052_n.jpg";
import memory7 from "../../assets/memories/356882005_272016892113248_6469925021621114931_n.jpg";
// import memory8 from "../../assets/memories/357311497_1034866187885516_4807505043687124219_n.jpg";
import memory8 from "../../assets/memories/321296201_1206807523592277_5346561523774336230_n.jpg";
import memory9 from "../../assets/memories/358218740_2128948947437461_3099469010629116758_n.jpg";
import memory10 from "../../assets/memories/358619396_222649417397966_6373005098322693727_n.jpg";
import banner from "../../assets/Banner.png";
import { Link } from "react-router-dom";
import TSYP2021Dark from "../../assets/tsyp-editions/tsyp-2021-dark.png";
import TSYP2022 from "../../assets/tsyp-editions/tsyp-2022.png";
import Team from "../components/Team";

import {
	faExternalLink,
	faMasksTheater,
	faRocket,
	faTicket,
	faVrCardboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "usehooks-ts";
import { Countdown } from "../components/Countdown";
import CustomImage from "../components/CustomImage";
import Speakers from "../components/Speakers";
import StyledButton from "../components/StyledButton";
import { ScheduleOverview } from "../components/schedule/ScheduleList";

export default function HomePage() {
	const matches = useMediaQuery("(min-width: 768px)");

	return (
		<div className="h-full">
			<Fade triggerOnce>
				<section className="grid grid-cols-12 items-center justify-center py-10 md:py-12">
					<div className="col-span-12 mx-auto">

						{true && (
							<>
								<CustomImage
									src={MainWhite}
									className="mx-auto  hidden  object-contain dark:block sm:h-48"
									alt="TechX"
								/>
								<CustomImage
									src={MainBlack}
									className="mx-auto  object-contain dark:hidden sm:h-52"
									alt="TechX"
								/>
							</>
						)}

						<h1 className=" mt-2 text-center text-4xl font-bold tracking-tight lg:mb-8 lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none">
							By ISET Djerba<span className="text-[#ffa800] dark:text-[#ffa800]"> & </span>  Polytechnique Sousse
						</h1>
						{/* <h1 className="mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none"> */}


						{true && (
							<h1 className="mt-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
								Hotel Mouradi Club Kantaoui, Sousse
							</h1>
						)}

						<h1 className="mb-4 hidden text-center text-xl font-bold tracking-tight md:block lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
							<q>Beyond the CloudLine</q>
						</h1>
						<div className="mb-8 text-center lg:mb-7">
							<span className="text-xl font-bold tracking-tight lg:text-2xl lg:font-extrabold lg:leading-none">
								27 - 28 September <span className="xtext-[#ffa800]">2025</span>
							</span>
							{/* <span className="text-xl font-bold tracking-tight lg:text-2xl lg:font-extrabold lg:leading-none">
								Registration Opening Soon
							</span> */}
						</div>
						<div className="flex flex-wrap items-center justify-center gap-8">
							<div className="xtext-[#ffa800] ">
								<h1 className="mb-2 text-center text-xl font-bold tracking-tight text-[#ffa800] dark:text-[#ffa800] lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
									200+
								</h1>
								<span className="mt-1 font-bold uppercase">Participants</span>
							</div>
							<div className="w-full md:hidden">
								<div className="xbg-[#ffa800] mx-auto h-0.5 w-3/6 bg-black dark:bg-gray-300 md:block"></div>
							</div>
							{/* <div className="xbg-[#3a55b4] hidden h-20 w-0.5 bg-black dark:bg-gray-300 md:block"></div>
							<div className="text-center text-xl font-bold tracking-tight lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
								We're Live!
							</div> */}
							{false && (
								<Countdown
									timeTillDate="12 18 2023, 6:00 am"
									timeFormat="MM DD YYYY, h:mm a"
								/>
							)}
							{/* <div className="w-full md:hidden">
								<div className="xbg-[#3a55b4] mx-auto h-0.5 w-3/6 bg-black dark:bg-gray-300 md:block"></div>
							</div> */}
							<div className="xbg-[#ffa800] hidden h-20 w-0.5 bg-black dark:bg-gray-300 md:block"></div>
							<div className="">
								<h1 className="mb-2 text-center text-xl font-bold tracking-tight text-[#ffa800] dark:text-[#ffa800] lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
									10+
								</h1>
								<span className="mt-1 font-bold uppercase">Speakers</span>
							</div>
						</div>
						<div className="mt-8 flex flex-wrap justify-center gap-6">
							{/* <Link to={"/sponsor-us"} className="flex justify-center">
								<StyledButton
									message={"Registration Opening Soon"}
									// icon={<FontAwesomeIcon icon={faExternalLink} />}
								/>
							</Link> */}
							{false && (
								<Link
									to={"https://forms.gle/ahXMJsQGwxHS9Hac6"}
									className="flex justify-center"
									target="_blank"
								>
									<StyledButton
										message={"Register a startup"}
										icon={<FontAwesomeIcon icon={faRocket} />}
									/>
								</Link>
							)}
							{false && (
								<Link to={"/registration"} className="flex justify-center">
									<StyledButton
										message={"Register Now"}
										icon={
											<FontAwesomeIcon className="-rotate-45" icon={faTicket} />
										}
									/>
								</Link>
							)}

							{false && (
								<Link to={"/virtual-game"} className="flex justify-center">
									<StyledButton
										message={"Virtual Space Registration"}
										icon={
											<FontAwesomeIcon
												className="-rotate-45"
												icon={faTicket}
											// icon={faVrCardboard}
											/>
										}
									/>
								</Link>
							)}

							{false && (
								<Link
									to={"https://forms.gle/YnGcgjhZnKmSK3p37"}
									target="_blank"
									className="flex justify-center"
								>
									<StyledButton
										message={"Talent Show Registration"}
										icon={<FontAwesomeIcon icon={faMasksTheater} />}
									/>
								</Link>
							)}
							{false && (
								<Link to={"/sponsor-us"} className="flex justify-center">
									<StyledButton
										message={"Become a Sponsor"}
									// icon={<FontAwesomeIcon icon={faExternalLink} />}
									/>
								</Link>
							)}

							{false && (
								<Link
									to={"https://forms.gle/Q88TpsVymyvDYQPBA"}
									target="_blank"
									className="flex justify-center"
								>
									<StyledButton
										message={"Become an ambassador"}
										icon={<FontAwesomeIcon icon={faExternalLink} />}
									/>
								</Link>
							)}
						</div>
					</div>

				</section>
			</Fade>

			<Fade triggerOnce>
				{/* <CustomImage
					src={logoBar}
					alt=""
					className="hidden h-52 object-contain dark:invert lg:block"
				/> */}
				<CustomImage
					src={banner}
					alt=""
					className="mx-auto hidden h-50 object-contain invert dark:invert-0 lg:block"
				/>
			</Fade>

			{/* <Fade triggerOnce>
				<h1 className="mt-8 mb-4 text-center text-xl font-bold tracking-tight lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold">
					In Conjunction with IES African Continent Chapter Workshop
					<br />&{" "}
					<Link
						to={
							"https://public-forum.embs.org/tunisia-na-healthcare-innovations-forum/"
						}
						target="_blank"
						className="hover:underline"
					>
						IEEE EMBS Tunisia North Africa Forum on Healthcare Innovations
					</Link>
				</h1>
				<div className="flex items-center justify-center gap-4">
					<CustomImage
						src={"https://i.imgur.com/Usd3WQr.png"}
						alt=""
						className="hidden aspect-video h-40 rounded-lg bg-white object-contain p-4 lg:block"
					/>
					<CustomImage
						src={"https://i.imgur.com/Gu6u9NO.png"}
						alt=""
						className="hidden aspect-video h-40 rounded-lg bg-white object-contain p-4 lg:block"
					/>
				</div>
			</Fade> */}

			<Fade triggerOnce>
				<AboutTechX />
			</Fade>

			<Fade triggerOnce>
				<AboutCSS />
			</Fade>
			<Fade triggerOnce>
				<AboutOrganisers />
			</Fade>


			{/* <Fade triggerOnce>
				<section className="py-8 md:py-10">
					<AboutCongress />
				</section>
			</Fade> */}
			{/* <Fade triggerOnce>
				<section className="py-8 md:py-10">
					<PreviousEditions />
				</section>
			</Fade> */}
			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					<Memories />
				</section>
			</Fade>
			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					<HostedBy />
				</section>
			</Fade> 
			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					<PoweredBy />
				</section>
			</Fade>
			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					<IEEEPartners />
				</section>
			</Fade>
			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					<SponsorsPreview />
					{false && (
						<div className="hadow-xl bbg-white rounded-2xl py-24 sm:py-10">
							<Link
								className="flex max-w-7xl items-center justify-center gap-3 px-6 lg:px-8"
								to={`/partners-sponsors`}
							>
								<h2 className="text-center text-4xl font-bold">Our Sponsors</h2>
								<FontAwesomeIcon icon={faExternalLink} className="h-5 w-5" />
							</Link>
						</div>
					)}
				</section>
			</Fade>
			<Fade triggerOnce>
				<section className="py-8 md:py-10">
					<Speakers limit={8} />
				</section>
			</Fade>
			<Fade triggerOnce>
				<div className="hidden md:mt-8 md:block">
					<ScheduleOverview />
				</div>
			</Fade>
			<Fade triggerOnce>
				<section className="py-8 md:py-28">
					<Team limit={5} />
				</section>
			</Fade>
			{true && (
				<Fade triggerOnce>
					<section className="py-8 md:py-28">
						<div className="mx-auto">
							<h1 className="mb-4 text-center text-4xl font-bold tracking-tight lg:mb-7 lg:text-5xl lg:font-extrabold lg:leading-none">
								Find us here.
							</h1>
							<iframe
								loading="lazy"
								title="mouradi"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6463.244144347799!2d10.577458545743543!3d35.907270690263445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd89a3a6d5091f%3A0x72ebacd66b583b37!2sEl%20Mouradi%20Club%20Kantaoui!5e0!3m2!1sen!2stn!4v1757259960847!5m2!1sen!2stn"
								className="w-full rounded-2xl shadow-lg"
								height="500"
								style={{
									border: 0,
									// width: "100%",
								}}
								allowFullScreen=""
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</section>
				</Fade>
			)}

			{/* <SparrowSurvey /> */}
		</div>
	);
}

export function AboutOrganisers(params) {
	return (
		<>
			<div className="mb-8 mt-8 flex justify-center">
				<h1 className=" text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
					About Us.
				</h1>
			</div>
			<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 ">
				<div className="col-span-6 mx-auto">
					{/* <CustomImage
					src={SBGroupPic}
					className="mx-auto h-56 rounded-2xl object-cover shadow-lg sm:h-96"
					alt="TSYP 11"
				/> */}

					<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-4xl lg:font-extrabold lg:leading-none flex justify-center">
						IEEE ISET Djerba Student Branch.
					</h1>
					<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-center lg:text-xl lg:font-normal flex justify-center">
						Founded in 2016, the IEEE ISET Djerba Student Branch stands as a beacon of technical excellence and innovation within their academic community.
						Through their dynamic program of workshops, hackathons, and networking events, they empower students to develop crucial skills and forge valuable industry connections.
					</h1>
					<div className="flex justify-center">
										<CustomImage
					src={isetPic}
					className="mb-3 h-56 rounded-2xl object-cover shadow-lg sm:h-96"
					alt="group photo of polytechnique sousse student branch"
				/></div>
					<div className="flex justify-center">
						<Link
							// type="button"
							to={"https://isetdjerba.ieee.tn/"}
							target="_blank"
							rel="noreferrer"
							className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						>
						<span className="">Learn more about ISETJB SB</span>
							{/* </div> */}
						</Link>
					</div>
				</div>
				<div className="col-span-6 mx-auto">


					<h1 className="mb-4 text-4xl font-bold tracking-tight   lg:mb-7 lg:text-start lg:text-4xl lg:font-extrabold lg:leading-none flex justify-center">
						IEEE EPS Student Branch.
					</h1>
					<h1 className="mb-4 text-lg font-medium   lg:mb-7 lg:text-center lg:text-xl lg:font-normal flex justify-center">
						IEEE EPS Student Branch was founded in 2016, with the aim of promoting IEEE activities in Tunisia and offer engineers the opportunity to be at the forefront of the latest technological innovations, the EPS currently has more than 200 members, and are working on many projects
					</h1>
									<div className="flex justify-center">	<CustomImage
					src={polyPic}
					className="mb-3 h-56 rounded-2xl object-cover shadow-lg sm:h-96"
					alt="group photo of polytechnique sousse student branch"
				/></div>
					<div className="flex justify-center">
						<Link
							// type="button"
							to={"https://eps.ieee.tn/"}
							target="_blank"
							rel="noreferrer"
							className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
						>
							{/* <div className="flex flex-wrap items-center justify-start gap-2"> */}
							<span className="">Learn more about EPS SB</span>
							{/* </div> */}
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export function AboutCSS(params) {
	return (
		<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
			<div className="col-span-6 mx-auto md:order-last">
<CustomImage src={"/assets/partners/ieee-national/syp.png"} className="mx-auto h-52 object-contain sm:h-96 dark:[filter:brightness(0)_invert(1)]" alt="about syp" />
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

export function AboutTechX() {
	return (
		<section className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28">
			<div className="col-span-6 mx-auto">
				<CustomImage
					src={MainWhite}
					className={`mx-auto mb-8 hidden h-52 object-contain dark:block ${MainBlack ? "" : "dark:invert"
						} sm:h-48`}
					alt="TechX"
				/>

				<CustomImage
					src={MainBlack}
					className="mx-auto h-56 object-contain dark:hidden sm:h-60"
					alt="TechX"
				/>
			</div>
			<div className="col-span-6">
				<h1 className="mb-4 text-4xl font-bold tracking-tight lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
					About TechX.
				</h1>
				<p className="mb-4  text-lg font-medium lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
					IEEE CS SYP TechX is a global event designed to empower students and young professionals through innovation, collaboration, and leadership. It has engaged over <b>6,000</b> participants worldwide, creating a strong link between academia and the technology industry through hands-on workshops, expert-led sessions, and networking opportunities. The 2025 edition, titled <b>TechX Tunisia – Beyond the CloudLine</b>, will take place in <b>Sousse on September 27-28, 2025</b>, organized by <b>IEEE CS EPS SBC and IEEE CS ISET Djerba SBC</b>. This edition will focus on <b> Artificial Intelligence, Cloud Computing, and Web & Mobile Development</b>.				</p>
			</div>
		</section>
	);
}

function Memories() {
	return (
		<div>
			<h2 className="mb-12 text-center text-4xl font-bold">
				Memories from Previous Editions
			</h2>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				<div className="grid gap-6">
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory10}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory2}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory3}
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-6">
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory4}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory5}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory6}
							alt=""
						/>
					</div>
				</div>
				<div className="grid gap-6">
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory7}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="h-full w-full rounded-2xl object-cover"
							src={memory8}
							alt=""
						/>
					</div>
					<div>
						<CustomImage
							className="hidden h-full w-full rounded-2xl object-cover md:block "
							src={memory9}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

function PreviousEditions() {
	return (
		<div className="hadow-xl bbg-white rounded-2xl py-24 sm:py-10">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="mb-12 text-center text-4xl font-bold">
					Previous Editions
				</h2>
				<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2022/"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2022}
								alt="TSYP2022"
							// width={200}
							// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2022</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2021/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2021Dark}
								alt="TSYP2021Dark"
							// width={200}
							// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2021</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2020/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] rounded-full object-cover shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2020}
								alt="TSYP2020"
							// width={200}
							// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2020</h1>
					</div>

					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2019/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2019}
								alt="TSYP2019"
							// width={200}
							// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2019</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2018/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 h-[120px] w-[120px] rounded-full object-contain p-4 shadow-md shadow-gray-200 transition dark:invert sm:col-start-2 md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2018}
								alt="ts"
							// width={200}
							// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2018</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2017/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:invert sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2017}
								alt="TSYP2017"
							// width={200}
							// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2017</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2016/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition dark:invert sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2016}
								alt="TSYP2016"
							// width={200}
							// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2016</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2015/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={"https://i.imgur.com/EpXVkCB.png"}
								alt="IeeeTunisia"
							// width={200}
							// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2015</h1>
					</div>
					<div className="transition hover:scale-105">
						<a
							href={"https://past-tsyp.ieee.tn/2014/index.html"}
							target="_blank"
							rel="noreferrer"
						>
							<CustomImage
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-900 invert transition dark:invert-0 sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={TSYP2014}
								alt="TSYP2014"
							// width={200}
							// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2014</h1>
					</div>
					<div className="transition hover:scale-105">
						<a href="#">
							<CustomImage
								className="col-span-2 col-start-2 h-[120px] w-[120px] rounded-full object-contain shadow-md shadow-gray-200 transition sm:col-start-auto md:h-[200px] md:w-[200px] lg:col-span-1"
								src={"https://i.imgur.com/EpXVkCB.png"}
								alt="IeeeTunisia"
							// width={200}
							// height={200}
							/>
						</a>
						<h1 className="mt-4 text-center font-extrabold">2013</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
function HostedBy() {
	return (
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="text-center text-4xl font-bold">Hosted by</h2>
			<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
				<a
					href="http://www.isetjb.rnu.tn/"
									target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full bg-white p-4 shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[160px] md:w-[160px] lg:col-span-1"

						src={"https://www.ecoles.com.tn/sites/default/files/universite/logo/logo_Iset-djerba.jpg"}
						alt="isetdjerba"
					// width={200}
					// height={200}
					/>
				</a>
				<a
					href="https://computer.ieee.tn/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full bg-white p-4 shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[160px] md:w-[160px] lg:col-span-1"

						src={"/assets/hosting/polytech.jpg"}
						alt="polytechnique sousse"
					// width={200}
					// height={200}
					/>
				</a>
			</div>
		</div>
	);
}

function PoweredBy() {
	return (
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<h2 className="mb-12 text-center text-4xl font-bold">Powered By</h2>
			<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
				<a
					href="https://isetdjerba.ieee.tn/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full bg-white p-4 shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[160px] md:w-[160px] lg:col-span-1"
						src={"/assets/partners/host/ISETJB.png"}
						alt="ISET DJERBA SB"
					// width={200}
					// height={200}
					/>
				</a>
				<a
					href="https://eps.ieee.tn/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full bg-white p-4 shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[160px] md:w-[160px] lg:col-span-1"
						src={"/assets/partners/host/EPS.png"}
						alt="polytec sousse sb"
					// width={200}
					// height={200}
					/>
				</a>
				
			</div>
		</div>
	);
}

function SponsorsPreview() {
	return (
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<Link
				className="flex max-w-7xl items-center justify-center gap-3 px-6 lg:px-8"
				to={`/partners-sponsors#ExclusiveAcademicPartner`}
			>
				<h2 className="text-center text-4xl font-bold">Sponsored by</h2>
				<FontAwesomeIcon icon={faExternalLink} className="h-5 w-5" />
			</Link>
			<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
				<a
					href="https://www.orangedigitalcenters.com/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full bg-white p-4 shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[160px] md:w-[160px] lg:col-span-1"
						src={"https://i.imgur.com/FkG6VVq.png"}
						alt="Orange"
					// width={200}
					// height={200}
					/>
				</a>
				<a
					href="https://www.polytecsousse.tn/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full bg-white p-4 shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[160px] md:w-[160px] lg:col-span-1"
						src={"https://i.imgur.com/2AKS7s7.png"}
						alt="polytecsousse"
					// width={200}
					// height={200}
					/>
				</a>
			</div>
		</div>
	);
}

function IEEEPartners() {
	return (
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<h2 className="mb-12 text-center text-4xl font-bold">IEEE Partners</h2>
			<div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
				<a
					href="https://entrepreneurship.ieee.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
						src={"/assets/partners/ieee-national/entrepreneurship.png"}
						alt="entrepreneurship"
					// width={200}
					// height={200}
					/>
				</a>
				{true && (
					<a
						href="https://yp.ieee.org/"
										target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full bg-white p-4 shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[160px] md:w-[160px] lg:col-span-1"
							src={"/assets/partners/ieee-national/yp.png"}
							alt="YpTunisia"
						// width={200}
						// height={200}
						/>
					</a>
				)}
				<a
					href="https://syp.computer.org/"
										target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full bg-white p-4 shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[160px] md:w-[160px] lg:col-span-1"
						src={"/assets/partners/ieee-national/syp.png"}
						alt="syp"
					// width={200}
					// height={200}
					/>
				</a>
				<a
					href="https://computer.ieee.tn/"
									target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full bg-white p-4 shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[160px] md:w-[160px] lg:col-span-1"

						src={"https://i.imgur.com/88XtjGw.png"}
						alt="university of sousse"
					// width={200}
					// height={200}
					/>
				</a>
				<a
					href="https://computer.ieee.tn/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full bg-white p-4 shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[160px] md:w-[160px] lg:col-span-1"

						src={"https://i.imgur.com/ABdMAlo.png"}
						alt="university of sousse"
					// width={200}
					// height={200}
					/>
				</a>
				{false && (
					<a
						href="https://ieeer8.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full bg-white p-4 shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[160px] md:w-[160px] lg:col-span-1"

							src={"https://i.imgur.com/mFTrYL2.png"}
							alt="IEEE Region 8"
						// width={200}
						// height={200}
						/>
					</a>
				)}
				
				{false && (
					<a
						href="https://www.ieee.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full p-4 shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[120px] w-[120px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[200px] md:w-[200px] lg:col-span-1"
							src={"https://i.imgur.com/mFTrYL2.png"}
							alt="IEEE"
						// width={200}
						// height={200}
						/>
					</a>
				)}
				{false && (
					<a
						href="https://www.ieee.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
							src={"https://i.imgur.com/mFTrYL2.png"}
							alt="IEEE"
						// width={200}
						// height={200}
						/>
					</a>
				)}
				{false && (
					<a
						href="https://yp.ieee.tn/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 dark:invert md:h-[180px] md:w-[180px] lg:col-span-1"
							src={"https://i.imgur.com/0JYgUki.png"}
							alt="YpTunisia"
						// width={200}
						// height={200}
						/>
					</a>
				)}
				<a
					href="https://ieeer8.org/student-activities/sa-committee/sac/"
									target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full bg-white p-4 shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition hover:scale-105 dark:shadow-gray-800 md:h-[160px] md:w-[160px] lg:col-span-1"
						src={"https://i.imgur.com/uO5riCW.png"}
						alt="Transistor"
					// width={200}
					// height={200}
					/>
				</a>
				<a
					href="https://yp.ieee.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"https://i.imgur.com/rJu8XVi.png"}
						alt="Transistor"
					// width={200}
					// height={200}
					/>
				</a>
								<a
					href="https://www.ieeefoundation.org/"
					target="_blank"
					rel="noreferrer"
					className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
				>
					<CustomImage
						className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
						src={"/assets/partners/ieee-global/foundation.png"}
						alt="Transistor"
					// width={200}
					// height={200}
					/>
				</a>
				{false && (
					<a
						href="https://ias.ieee.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
							src={"https://i.imgur.com/y2PtVJQ.png"}
							alt="Transistor"
						// width={200}
						// height={200}
						/>
					</a>
				)}
				{false && (
					<a
						href="https://www.ieeesmc.org/"
						target="_blank"
						rel="noreferrer"
						className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105"
					>
						<CustomImage
							className="col-span-2 h-[115px] w-[115px] bg-white object-contain p-4 transition dark:shadow-gray-800 md:h-[180px] md:w-[180px] lg:col-span-1"
							src={"https://i.imgur.com/ABdMAlo.png"}
							alt="Transistor"
						// width={200}
						// height={200}
						/>
					</a>
				)}
			</div>
		</div>
	);
}

export function SparrowSurvey() {
	useEffect(() => {
		window.sparrowLaunch({
			/*add custom params here*/
		});

		return () => { };
	}, []);

	return (
		<div
			id="ss_survey_widget"
			className="h-[800px]!important mx-auto"
			style={{
				position: "relative",
				width: "100% !important",
				height: "1000px !important",
			}}
		></div>
	);
}
