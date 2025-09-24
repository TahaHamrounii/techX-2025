// Structured detailed agenda derived from provided specification.
// Times kept as strings for simplicity. Each slot can have nested items.

export const day1 = [
  {
    id: 'checkin',
    start: '11:00 AM',
    end: '2:00 PM',
    title: 'Check-in & Registration',
    description: 'Name check & badge collection, welcome pack desk, hotel registration support.',
  },
  {
    id: 'opening',
    start: '2:00 PM',
    end: '2:45 PM',
    title: 'Opening Ceremony',
    description: 'National anthems, welcomes, interventions by leads, chairs, counselors, directors, sponsors & partners.',
  },
  {
    id: 'panel-ai',
    start: '2:45 PM',
    end: '3:30 PM',
    title: 'Panel: The Future of Scalable AI-Driven Applications',
    description: 'Expert discussion on AI in humanities, education, industry & humanitarian efforts.',
  },
  {
    id: 'coffee',
    start: '3:30 PM',
    end: '4:00 PM',
    title: 'Coffee Break',
    description: 'Networking over coffee.',
  },
  {
    id: 'ws-web',
    start: '4:00 PM',
    end: '5:30 PM',
    title: 'Workshop Track 1: Web/Mobile Development',
    description: 'Hands-on session on full-stack web & mobile UI development.',
  },
  {
    id: 'ws-cloud',
    start: '4:00 PM',
    end: '5:30 PM',
    title: 'Workshop Track 2: Cloud & DevOps',
    description: 'Best practices for containerization, orchestration & automation.',
  },
  {
    id: 'ws-ai1',
    start: '4:00 PM',
    end: '5:30 PM',
    title: 'Workshop Track 3: Nvidia Deep Learning (Part 1)',
    description: 'Introduction to deep learning with Nvidia tools & frameworks.',
  },
  {
    id: 'ws-solid1',
    start: '4:00 PM',
    end: '5:30 PM',
    title: 'Workshop Track 4: SolidWorks CSWA (Part 1)',
    description: 'Getting started with SolidWorks design fundamentals.',
  },
  {
    id: 'industry-network',
    start: '5:30 PM',
    end: '6:30 PM',
    title: 'Industry Booth Networking',
    description: 'Meet industry professionals, explore booths & network.',
  },
  {
    id: 'cs-benefits',
    start: '6:30 PM',
    end: '7:30 PM',
    title: 'CS Benefits Session',
    description: 'Overview of IEEE Computer Society benefits & opportunities.',
  },
  {
    id: 'student-yp',
    start: '6:30 PM',
    end: '7:30 PM',
    title: 'Student-to-YP Transition Session',
    description: 'Mentorship & insights from IEEE Young Professionals.',
  },
  {
    id: 'mtts',
    start: '6:30 PM',
    end: '7:30 PM',
    title: 'IEEE MTT-S Workshop',
    description: 'Hands-on IoT with smart sensors & RF control.',
  },
  {
    id: 'smc',
    start: '6:30 PM',
    end: '7:30 PM',
    title: 'SMC Session',
    description: 'AI approaches for cooperative, connected & automated mobility.',
  },
  {
    id: 'ws-ai2',
    start: '6:30 PM',
    end: '8:00 PM',
    title: 'Workshop Track 3: Nvidia Deep Learning (Part 2)',
    description: 'Continuation of deep learning workshop with hands-on labs.',
  },
  {
    id: 'ws-solid2',
    start: '6:30 PM',
    end: '8:00 PM',
    title: 'Workshop Track 4: SolidWorks CSWA (Part 2)',
    description: 'Advanced SolidWorks training & exercises.',
  },
  {
    id: 'dinner',
    start: '7:30 PM',
    end: '9:00 PM',
    title: 'Dinner',
    description: 'Buffet dinner & relaxed networking.',
  },
  {
    id: 'entrepreneurship',
    start: '9:15 PM',
    end: '10:15 PM',
    title: 'Entrepreneurship 101',
    description: 'Introduction to entrepreneurship & startup fundamentals.',
  },
  {
    id: 'hackathon-launch',
    start: '10:15 PM',
    end: '10:30 PM',
    title: 'Hackathon: Challenge Launch & Ideation',
    description: 'Moderator introduction, flow overview, ideation guidelines & challenge reveal.',
  },
  {
    id: 'party',
    start: '11:00 PM',
    end: '1:00 AM',
    title: 'Hotel Party & Networking',
    description: 'Informal networking, music & community building.',
  },
];

export const day2 = [
  {
    id: 'breakfast',
    start: '7:00 AM',
    end: '9:00 AM',
    title: 'Breakfast',
    description: 'Morning refreshments & networking.',
  },
  {
    id: 'ws-solid3',
    start: '9:00 AM',
    end: '12:00 PM',
    title: 'Workshop Track 4: SolidWorks CSWA (Part 3 – Certification)',
    description: 'Final certification workshop & exam preparation.',
  },
  {
    id: 'mentoring',
    start: '9:00 AM',
    end: '10:30 AM',
    title: 'Round Tables: Mentoring Session',
    description: 'Interactive mentoring discussions with industry & academic leaders.',
  },
  {
    id: 'hackathon-finale',
    start: '10:30 AM',
    end: '12:00 PM',
    title: 'Hackathon Finale & Pitches',
    description: 'Team pitches & jury Q&A; closing deliberation.',
  },
  {
    id: 'checkout',
    start: '12:00 PM',
    end: '12:30 PM',
    title: 'Check-out Process',
    description: 'Departure logistics before lunch & awards.',
  },
  {
    id: 'lunch',
    start: '12:30 PM',
    end: '2:00 PM',
    title: 'Lunch',
    description: 'Networking lunch with peers & industry mentors.',
  },
  {
    id: 'awards',
    start: '2:00 PM',
    end: '2:30 PM',
    title: 'Awards and Closing Ceremony',
    description: 'Honorable mentions, top placements & final reflections.',
  },
];


export const days = [
  { label: 'Day 1 – Sep 27, 2025', id: 'day1', slots: day1 },
  { label: 'Day 2 – Sep 28, 2025', id: 'day2', slots: day2 }
];
