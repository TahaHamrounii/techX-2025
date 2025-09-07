import {
	faAward,
	faGift,
	faHands,
	faMedal,
	faMicrophone,
	faMugHot,
	faPeopleArrows,
	faPersonChalkboard,
	faPersonWalkingArrowRight,
	faPersonWalkingDashedLineArrowRight,
	faTrophy,
	faUsersRectangle,
	faUtensils,
	faLaptopCode,
	faCloud,
	faRobot,
	faDraftingCompass,
	faFlagCheckered,
	faHandshake,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";


export const sep27Schedule = [
  {
    title: "Check-in & Registration",
    startTime: "11:00AM",
    endTime: "2:00PM",
    timeZone: "GMT+1",
    icon: faPersonWalkingArrowRight
  },
  {
    title: "Opening Ceremony",
    startTime: "2:00PM",
    endTime: "2:45PM",
    timeZone: "GMT+1",
    icon: faMicrophone
  },
  {
    title: "Panel: The Future of Scalable AI-Driven Applications",
    startTime: "2:45PM",
    endTime: "3:30PM",
    timeZone: "GMT+1",
    icon: faMicrophone
  },
  {
    title: "Coffee Break",
    startTime: "3:30PM",
    endTime: "3:45PM",
    timeZone: "GMT+1",
    icon: faMugHot
  },
  {
    title: "Workshop Track 1: Web/Mobile Development",
    startTime: "4:00PM",
    endTime: "5:00PM",
    timeZone: "GMT+1",
    icon: faLaptopCode
  },
  {
    title: "Workshop Track 2: Cloud",
    startTime: "4:00PM",
    endTime: "5:00PM",
    timeZone: "GMT+1",
    icon: faCloud
  },
  {
    title: "Workshop Track 3: AI (Part 1)",
    startTime: "4:00PM",
    endTime: "5:30PM",
    timeZone: "GMT+1",
    icon: faRobot
  },
  {
    title: "Workshop Track 4: Certified SolidWorks (Part 1)",
    startTime: "4:00PM",
    endTime: "5:30PM",
    timeZone: "GMT+1",
    icon: faDraftingCompass
  },
  {
    title: "Industry Booth Networking",
    startTime: "5:15PM",
    endTime: "6:15PM",
    timeZone: "GMT+1",
    icon: faHandshake
  },
  {
    title: "CS Benefits Session",
    startTime: "6:15PM",
    endTime: "7:00PM",
    timeZone: "GMT+1",
    icon: faUsers
  },
  {
    title: "Student-to-YP Transition Session",
    startTime: "6:15PM",
    endTime: "7:00PM",
    timeZone: "GMT+1",
    icon: faUsers
  },
  {
    title: "MTTS Session",
    startTime: "6:15PM",
    endTime: "7:00PM",
    timeZone: "GMT+1",
    icon: faUsers
  },
  {
    title: "SMC Session",
    startTime: "6:15PM",
    endTime: "7:00PM",
    timeZone: "GMT+1",
    icon: faUsers
  },
  {
    title: "Workshop Track 3: AI (Part 2)",
    startTime: "6:15PM",
    endTime: "7:45PM",
    timeZone: "GMT+1",
    icon: faRobot
  },
  {
    title: "Workshop Track 4: Certified SolidWorks (Part 2)",
    startTime: "6:15PM",
    endTime: "7:45PM",
    timeZone: "GMT+1",
    icon: faDraftingCompass
  },
  {
    title: "Dinner",
    startTime: "7:30PM",
    endTime: "9:00PM",
    timeZone: "GMT+1",
    icon: faUtensils
  },
  {
    title: "Leadership Bootcamp (Injaz Tunisia)",
    startTime: "9:15PM",
    endTime: "10:15PM",
    timeZone: "GMT+1",
    icon: faMicrophone
  },
  {
    title: "Hackathon: Challenge Launch & Ideation",
    startTime: "10:15PM",
    endTime: "10:30PM",
    timeZone: "GMT+1",
    icon: faFlagCheckered
  },
  {
    title: "Hotel Party & Networking",
    startTime: "11:00PM",
    endTime: "1:00AM",
    timeZone: "GMT+1",
    icon: faHandshake
  }
];

export const sep28Schedule = [
  {
    title: "Breakfast & Networking",
    startTime: "7:00AM",
    endTime: "9:00AM",
    timeZone: "GMT+1",
    icon: faUtensils
  },
  {
    title: "IEEE Mentoring Session",
    startTime: "9:30AM",
    endTime: "10:30AM",
    timeZone: "GMT+1",
    icon: faUsers
  },
  {
    title: "Hackathon Finale & Pitches",
    startTime: "10:30AM",
    endTime: "12:00PM",
    timeZone: "GMT+1",
    icon: faFlagCheckered
  },
  {
    title: "Lunch with Industry Mentors",
    startTime: "12:00PM",
    endTime: "1:00PM",
    timeZone: "GMT+1",
    icon: faUtensils
  },
  {
    title: "Check-out Process",
    startTime: "1:00PM",
    endTime: "1:30PM",
    timeZone: "GMT+1",
    icon: faPersonWalkingArrowRight
  },
  {
    title: "Awards Ceremony",
    startTime: "1:30PM",
    endTime: "2:00PM",
    timeZone: "GMT+1",
    icon: faTrophy
  },
  {
    title: "Closing Ceremony",
    startTime: "2:00PM",
    endTime: "2:30PM",
    timeZone: "GMT+1",
    icon: faMicrophone
  }
];


export const areAllLocationsSame = (activities) => {
	if (activities.length <= 1) {
		// If there's only one or zero activities, they are considered to have the same location.
		return true;
	}

	const firstLocation = activities[0].location;

	for (let i = 1; i < activities.length; i++) {
		if (activities[i].location !== firstLocation) {
			return false;
		}
	}

	return true;
};
