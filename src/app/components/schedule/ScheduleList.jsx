import { useEffect, useState } from "react";
import ScheduleBox from "../ScheduleBox";
import TimelineSchedule from "../timeline-view/TimelineShedule";
import {
	areAllLocationsSame,
	sep27Schedule,
	sep28Schedule,
} from "./scheduleItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChalkboardUser,
	faExternalLink,
	faFilePdf,
	faPlusCircle,
	faTableColumns,
	faTimeline,
} from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";
import StyledButton from "../StyledButton";
import SessionsSchedule from "../SessionsSchedule";
import { useSearchParams } from "react-router-dom";

export default function ScheduleList() {
	return (
		<div>
			{false && (
				<div className="mb-8">
					<div className="mb-4 text-4xl font-bold">Schedule</div>
					<div className="text-gray-600 dark:text-gray-400">
						Learn more about our event schedule.
					</div>
				</div>
			)}

			<ScheduleOverview showTimeline />

			{false && (
				<div className="flex flex-col gap-8">
					{stagesData.map((s) => (
						<div key={s.slug}>
							<div className="mb-4 text-2xl font-bold">{s.name}</div>
							<div className="grid grid-cols-12 gap-y-4 md:auto-rows-fr md:gap-4">
								{s.schedule.map((e) => (
									<div
										className="col-span-12 md:col-span-4 lg:col-span-3"
										key={e.title}
									>
										<ScheduleBox data={e} key={e.title} classNames={"h-full"} />
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}



export function ScheduleOverview({ showTimeline }) {
	const [isSeeMore, setIsSeeMore] = useState(false);
	const [viewMode, setViewMode] = useState("timeline");
	const [searchParams, setSearchParams] = useSearchParams();

	const [sep28ScheduleRevamped, setSep28ScheduleRevamped] = useState([]);
	const [sep27ScheduleRevamped, setSep27ScheduleRevamped] = useState([]);

	useEffect(() => {
		const getData = async () => {
			await fetch("/assets/sep27ScheduleRevamped.json")
				.then((response) => response.json())
				.then((response) => {
					setSep27ScheduleRevamped(response);
				})
				.catch((err) => console.error(err));
			await fetch("/assets/sep28ScheduleRevamped.json")
				.then((response) => response.json())
				.then((response) => {
					setSep28ScheduleRevamped(response);
				})
				.catch((err) => console.error(err));
		};
		getData();
	}, []);

	useEffect(() => {
		if (searchParams.get("speaker")) {
			setViewMode("session");
		}

		return () => {};
	}, [searchParams]);

	function renderDaySchedule(day) {
		return day?.slice(0, isSeeMore ? undefined : 5)?.map((e, idx) => {
			const allLocationsSame = areAllLocationsSame(e.activities);
			const currentLocation = e.activities[0]?.location;

			return (
				<li aria-label="Steven McHail talking about one-time payments at 9:00AM - 10:00AM GMT+1">
					{idx > 0 && (
						<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
					)}
					<p className="mb-2 font-mono text-base text-slate-600">
						{e.timeSlotStart + " - " + e.timeSlotEnd}
					</p>
					{allLocationsSame && currentLocation && (
						<div className="mb-2 font-medium tracking-wide underline">
							{currentLocation}
						</div>
					)}
					<div className="flex flex-col gap-4">
						{e.activities?.map((activity, idx) => {
							return (
								<div className="">
									<h4 className="text-lg font-semibold tracking-tight ">
										{activity.title}
									</h4>
									{!allLocationsSame && (
										<div className="font-medium tracking-wide underline">
											{activity.location}
										</div>
									)}
								</div>
							);
						})}
					</div>

					{/* <p className="mt-1 tracking-tight ">One-time payments</p> */}
				</li>
			);
		});
	}

	return (
		<section>
			<div className="mb-14 flex flex-col items-center justify-center gap-8">
				<div className="flex justify-center gap-2">
					<div className="text-4xl font-bold">Schedule Overview</div>
				</div>

				<div className="flex">
					{/* <StyledButton
						onClick={() => setIsTimeLineView(!isTimeLineView)}
						icon={
							<FontAwesomeIcon
								icon={!isTimeLineView ? faTimeline : faTableColumns}
								className={twMerge(
									`text-lg transition-all`,
									!isTimeLineView ? "-rotate-90" : ""
								)}
							/>
						}
						message={!isTimeLineView ? "Timeline View" : "List View"}
					/> */}
					<StyledButton
						className={twMerge(
							"min-w-[1rem] rounded-l-md rounded-r-none border-r-[1px]"
						)}
						onClick={() => setViewMode("timeline")}
						icon={
							<FontAwesomeIcon
								icon={faTimeline}
								className={twMerge(`-rotate-90 text-base transition-all`)}
							/>
						}
						message={viewMode === "timeline" && "Timeline View"}
					/>
					<StyledButton
						className={twMerge("min-w-[1rem]  rounded-none border-l-[1px]")}
						onClick={() => setViewMode("list")}
						icon={
							<FontAwesomeIcon
								icon={faTableColumns}
								className={twMerge(`text-lg transition-all`)}
							/>
						}
						message={viewMode === "list" && "List View"}
					/>
					<StyledButton
						className={twMerge(
							"min-w-[1rem] rounded-r-md rounded-l-none border-l-[1px]"
						)}
						onClick={() => setViewMode("session")}
						icon={
							<FontAwesomeIcon
								icon={faChalkboardUser}
								className={twMerge(`text-lg transition-all`)}
							/>
						}
						message={viewMode === "session" && "Session View"}
					/>
				</div>

				<a
					href="https://drive.google.com/file/d/13em2dUKV1UZfBJWmuhayoAy0ApT-I-8S/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 font-bold"
				>
					<FontAwesomeIcon className="text-xl" icon={faFilePdf} />
					Download PDF
				</a>
				{/* <button
					className="flex items-center justify-center gap-4 font-medium md:flex"
					onClick={() => setIsTimeLineView(!isTimeLineView)}
				>
					<FontAwesomeIcon
						icon={!isTimeLineView ? faTimeline : faTableColumns}
						className={twMerge(
							`text-2xl transition-all`,
							!isTimeLineView ? "-rotate-90" : ""
						)}
					/>
					{!isTimeLineView ? "Timeline View" : "List View"}
				</button> */}
			</div>
			{/* <button
				className="mb-16 flex flex-col items-center justify-center gap-4 md:flex"
				onClick={() => setIsTimeLineView(!isTimeLineView)}
			>
				<FontAwesomeIcon
					icon={isTimeLineView ? faTimeline : faTableColumns}
					className={twMerge(
						`animate-pulse text-2xl transition-all`,
						isTimeLineView ? "-rotate-90" : ""
					)}
				/>
				{isTimeLineView ? "Timeline View" : "List View"}
			</button> */}
			{viewMode === "timeline" && <TimelineSchedule />}

			{viewMode === "list" && (
				<div className="flex justify-center gap-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
					<section className="flex flex-col">
						<h3 className="sticky top-0 bg-gray-50 py-4 text-center text-2xl font-semibold tracking-tight dark:bg-black">
							<time dateTime="2022-04-04">September 27</time>
						</h3>
						{/* <p className="mt-1.5 text-base tracking-tight">
						The first day of the conference is focused on ecommerce.
					</p> */}
						<ol className="bbackdrop-blur mt-10 flex-1 space-y-8 rounded-xl border-2 bg-white/60 p-2 px-10 py-14 text-center shadow-xl shadow-blue-900/5 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:bg-black dark:hover:border-gray-600 dark:focus:border-gray-500">
							{renderDaySchedule(sep27ScheduleRevamped)}

							{false &&
								sep27Schedule?.map((e, idx) => (
									<li aria-label="Steven McHail talking about one-time payments at 9:00AM - 10:00AM GMT+1">
										{idx > 0 && (
											<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
										)}
										<h4 className="text-lg font-semibold tracking-tight ">
											{e.title}
										</h4>
										{/* <p className="mt-1 tracking-tight ">One-time payments</p> */}
										<p className="mt-1 font-mono text-sm text-slate-500">
											<time dateTime="2022-04-04T9:00AM-08:00">
												{e.startTime}
											</time>{" "}
											{/* */}-{/* */}{" "}
											<time dateTime="2022-04-04T10:00AM-08:00">
												{e.endTime}
											</time>{" "}
											{/* */}
											{e.timeZone}
										</p>
									</li>
								))}

							{!isSeeMore && (
								<li
									className="flex justify-center"
									onClick={() => setIsSeeMore(!isSeeMore)}
								>
									<StyledButton
										message={"Load more"}
										icon={
											<FontAwesomeIcon
												icon={faPlusCircle}
												// icon={faVrCardboard}
											/>
										}
									/>
									{/* <button className="mx-auto mt-4 flex items-center justify-center gap-2 text-center text-gray-500 dark:text-gray-400">
										<FontAwesomeIcon icon={faPlusCircle} />
										Load more
									</button> */}
								</li>
							)}
						</ol>
					</section>

					<section className="flex flex-col">
						<h3 className="sticky top-0 bg-gray-50 py-4 text-center text-2xl font-semibold tracking-tight dark:bg-black ">
							<time dateTime="2022-04-05">September 28</time>
						</h3>
						{/* <p className="mt-1.5 text-base tracking-tight ">
						Next we spend the day talking about people with technology.
					</p> */}
						<ol className="bbackdrop-blur mt-10 flex-1 space-y-8 rounded-xl border-2 bg-white/60 p-2 px-10 py-14 text-center shadow-xl shadow-blue-900/5 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:bg-black dark:hover:border-gray-600 dark:focus:border-gray-500">
							{renderDaySchedule(sep28ScheduleRevamped)}

							{false &&
								sep28Schedule
									?.slice(0, isSeeMore ? undefined : 6)
									?.map((e, idx) => (
										<li aria-label="Steven McHail talking about one-time payments at 9:00AM - 10:00AM GMT+1">
											{idx > 0 && (
												<div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
											)}
											<h4 className="text-lg font-semibold tracking-tight ">
												{e.title}
											</h4>
											{/* <p className="mt-1 tracking-tight ">One-time payments</p> */}
											<p className="mt-1 font-mono text-sm text-slate-500">
												<time dateTime="2022-04-04T9:00AM-08:00">
													{e.startTime}
												</time>{" "}
												{/* */}-{/* */}{" "}
												<time dateTime="2022-04-04T10:00AM-08:00">
													{e.endTime}
												</time>{" "}
												{/* */}
												{e.timeZone}
											</p>
										</li>
									))}
							{!isSeeMore && (
								<li
									className="flex justify-center"
									onClick={() => setIsSeeMore(!isSeeMore)}
								>
									<StyledButton
										message={"Load more"}
										icon={
											<FontAwesomeIcon
												icon={faPlusCircle}
												// icon={faVrCardboard}
											/>
										}
									/>
									{/* <button className="mx-auto mt-4 flex items-center justify-center gap-2 text-center text-gray-500 dark:text-gray-400">
										<FontAwesomeIcon icon={faPlusCircle} />
										Load more
									</button> */}
								</li>
							)}
						</ol>
					</section>

					
				</div>
			)}

			{viewMode === "session" && <SessionsSchedule />}
		</section>
	);
}
