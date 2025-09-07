import React, { useRef, useState } from "react";
import { SparrowSurvey } from "./Home.page";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import CustomImage from "../components/CustomImage";
export default function ContactPage() {
	return (
		<div className="h-full">
			<ContactForm />

			{/* <ContactDetails /> */}

			<section className="py-8 lg:py-8">
				<div className="max-w-8xl mx-auto">
					<div className="xl:mx-64 2xl:mx-60">
						<h1 className="mb-4 text-4xl font-bold lg:mb-7 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
							Have feedback or suggestions?
						</h1>
						<p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl">
							Fill the appropriate form below and we'll do our best to make it
							happen!
						</p>
					</div>
				</div>
				<div className="mb-6 flex flex-wrap justify-center gap-4">
					<Link
						to={
							"https://docs.google.com/forms/d/e/1FAIpQLSdWzT28HrTniMtPlQetXLeG9hBr6ccADzIYM4GunDost_5TxQ/viewform"
						}
						target="_blank"
						rel="noreferrer"
						className="inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
					>
						<span className="">Speaker Suggestions</span>
					</Link>
					<Link
						to={
							"https://docs.google.com/forms/d/e/1FAIpQLSfBAlWQwYjahd0VwbCtPcLZjZsIpXsDArmE8VyQq6-vw-gAKw/viewform"
						}
						target="_blank"
						rel="noreferrer"
						className="inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
					>
						<span className="">Sponsor Suggestions</span>
					</Link>
					<Link
						to={
							"https://docs.google.com/forms/d/e/1FAIpQLSfZLf1IajhxhCG89BGdzBye6t6HGNvYqJmGQ4I2bgyGcfvloQ/viewform"
						}
						target="_blank"
						rel="noreferrer"
						className="inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black  dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
					>
						<span className="">Feedback & Ideas</span>
					</Link>
				</div>
			</section>

			{false && <SparrowSurvey />}
		</div>
	);
}

export function ContactDetails({ title = "Reach us" }) {
	return (
		<section className="py-8 lg:py-8">
			<div className="max-w-8xl mx-auto">
				<div className="xl:mx-64 2xl:mx-80">
					<h1 className="mb-4 text-4xl font-bold lg:mb-7 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
						{title}
					</h1>
					<p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl">
						Where to find us.
					</p>
				</div>
			</div>

			<div className="grid gap-y-6 md:grid-cols-12 md:gap-12">
				<div className="flex flex-col justify-center md:col-span-6">
					<iframe
						title="ISET Djerba"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.7524635018663!2d10.970674776169737!3d33.81870053002507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13aabd5d8c1c4e53%3A0xb473115a0ed492ae!2sHigher%20Institute%20of%20Technological%20Studies%20of%20Djerba!5e0!3m2!1sen!2stn!4v1757273914416!5m2!1sen!2stn"
						className="aspect-video w-full rounded-2xl shadow-lg"
						// height="400"
						style={{
							border: 0,
							// width: "100%",
						}}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>

				<div className="md:col-span-6">
					<iframe
						title="EPS"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.9265684927414!2d10.58699887623615!3d35.82627732199195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b3a0237010f%3A0x4418fc1f1a3cb73f!2sPolytechnique%20Sousse!5e0!3m2!1sen!2stn!4v1757273838259!5m2!1sen!2stn"
						className="aspect-video w-full rounded-2xl shadow-lg"
						// height="400"
						style={{
							border: 0,
							// width: "100%",
						}}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>

			<div className="mt-20 flex justify-center gap-6">


				<a
					href="https://www.facebook.com/share/17NzgSazdZ/"
					target="_blank"
					rel="noreferrer"
					className=" bg-transparent transition hover:scale-105"
				>
					<CustomImage
					className="h-16 w-16"
						src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"}
						alt="Facebook"
					// width={200}
					// height={200}
					/>
				</a>
				<a
					href="https://www.instagram.com/techx_tunisia2025?igsh=cGl6cXk0emFtZWll"
					target="_blank"
					rel="noreferrer"
					className=" transition hover:scale-105"
				>
					<CustomImage
					className="h-16 w-16"
						src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"}
						alt="Instagram"
					// width={200}
					// height={200}
					/>
				</a>

								<a
								href="https://www.linkedin.com/company/techx-tunisia-beyond-the-cloudline/"
									target="_blank"
									rel="noreferrer"
									className=" transition hover:scale-105"
								>
					<CustomImage
					className="h-16 w-16"
						src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"}
						alt="LinkedIn"
					// width={200}
					// height={200}
					/>
				</a>

			</div>
		</section>
	);
}

export function ContactForm({ title = "Contact us" }) {
	const form = useRef();

	const [isSuccess, setIsSuccess] = useState(false);
	const [isSending, setIsSending] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		setIsSuccess(false);
		setIsSending(true);
		emailjs
			.sendForm("___", "___", form.current, "___")
			.then(
				(result) => {
					console.log(result.text);
					setIsSuccess(true);
					form.current.reset();
				},
				(error) => {
					console.log(error.text);
				}
			)
			.finally(() => {
				setIsSending(false);
			});
	};

	return (
		<section className="py-8 lg:py-16">
			<div className="max-w-8xl mx-auto px-4 lg:px-4">
				<div className="xl:mx-64 2xl:mx-80">
					<h1 className="mb-4 text-4xl font-bold   lg:mb-7 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
						{title}
					</h1>
					<p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl">
						Let us know what you need and we will get back to you in no time. either through the form below
						or by sending us an email at <br/> <b>techx-tunisia-25@ieee.tn</b>
					</p>
				</div>
			</div>
			<div className="max-w-8xl mx-auto px-4 lg:px-4">
				<div className="mx-auto max-w-3xl rounded-2xl border-2 border-gray-50 p-4 shadow-md dark:border-gray-800 lg:p-8">
					<form ref={form} onSubmit={sendEmail}>
						<div className="grid md:grid-cols-2 md:gap-8">
							<div className="mb-6">
								<label
									htmlFor="first_name"
									className="mb-2 block text-sm font-medium  dark:text-gray-300"
								>
									First name
								</label>
								<input
									required
									type="text"
									id="first_name"
									name="first_name"
									placeholder="John"
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
									defaultValue=""
								/>
							</div>
							<div className="mb-6">
								<label
									htmlFor="last_name"
									className="mb-2 block text-sm font-medium  dark:text-gray-300"
								>
									Last name
								</label>
								<input
									required
									type="text"
									id="last_name"
									name="last_name"
									placeholder="Doe"
									className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
									defaultValue=""
								/>
							</div>
						</div>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="mb-2 block text-sm font-medium  dark:text-gray-300"
							>
								Email address
							</label>
							<input
								required
								type="email"
								id="email"
								name="email"
								placeholder="john.doe@company.com"
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								defaultValue=""
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="subject"
								className="mb-2 block text-sm font-medium  dark:text-gray-300"
							>
								Subject
							</label>
							<input
								required
								type="text"
								id="subject"
								name="subject"
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								placeholder="Subject name"
								defaultValue=""
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="message"
								className="mb-2 block text-sm font-medium  dark:text-gray-400"
							>
								Message
							</label>
							<textarea
								required
								id="message"
								name="message"
								rows={4}
								className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-black  dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								placeholder="Your message..."
								defaultValue={""}
							/>
						</div>

						{/* <p className="mb-6 text-sm text-gray-500">
						By submitting this form you agree to our{" "}
						<a
							className="text-blue-600 hover:underline dark:text-blue-500"
							href="/terms-and-conditions/"
						>
							Terms &amp; conditions
						</a>{" "}
						and our{" "}
						<a
							className="text-blue-600 hover:underline dark:text-blue-500"
							href="/privacy-policy/"
						>
							Privacy Policy
						</a>{" "}
						which explains how we may collect, use and disclose your
						personal information including to third parties.
					</p> */}
						<div className="g-recaptcha" data-sitekey="---"></div>

						<button
							className={`w-full rounded-lg bg-[#ffa800] px-5 py-3 text-center text-base font-medium text-white sm:w-auto ${isSending ? "opacity-50" : ""
								}`}
							type="submit"
							disabled={isSending}
						>
							<span className="flex items-center justify-center">
								Send message
							</span>
						</button>
						{isSuccess && (
							<div
								className="mt-4 rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-gray-800 dark:text-green-400"
								role="alert"
							>
								<span className="font-medium">Message sent!</span> Thank you, we
								highly value your feedback.
							</div>
						)}
					</form>
				</div>
			</div>
			{/* <iframe
				src="https://docs.google.com/forms/d/e/1FAIpQLSfZLf1IajhxhCG89BGdzBye6t6HGNvYqJmGQ4I2bgyGcfvloQ/viewform?embedded=true"
				width="640"
				height="1561"
			loading="lazy"
				frameBorder="0"
				marginHeight="0"
				marginWidth="0"
			>
				Loading…
			</iframe> */}
		</section>
	);
}
