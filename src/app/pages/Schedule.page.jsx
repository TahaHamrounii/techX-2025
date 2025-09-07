import ScheduleList from "../components/schedule/ScheduleList";
import { useState } from "react";
import DetailedAgenda from "../components/schedule/DetailedAgenda";

export default function SchedulePage() {
	const [showDetailed, setShowDetailed] = useState(false);
	return (
		<>
			<DetailedAgenda />
		</>
	);
}
