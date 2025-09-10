// Structured detailed agenda derived from provided specification.
// Times kept as strings for simplicity. Each slot can have nested items.

export const day1 = [
  {
    id: 'checkin',
    start: '11:00 AM',
    end: '2:00 PM',
    title: 'Check‑in & Registration',
    room: 'Hotel',
    participants: '≈300',
    description: 'Name check & badge collection, welcome pack desk, hotel registration support.',
  },
  {
    id: 'opening',
    start: '2:00 PM',
    end: '2:45 PM',
    title: 'Opening Ceremony',
    room: 'Conference Room',
    participants: '≈250',
    description: 'National anthems, welcomes, interventions by leads, chairs, counselors, directors, sponsors & partners.',
    subItems: [
      { time: '2:00 – 2:10 PM', title: 'Special Opening & Welcoming', speaker: 'Moderator', notes: 'Tunisia National Anthem + Palestine National Anthem + Welcome + transitions.' },
      { time: '2:10 – 2:12 PM', title: 'Intervention', speaker: 'Leads: Aziz Bouassida & Med Aziz Achouri' },
      { time: '2:13 – 2:15 PM', title: 'Intervention', speaker: 'Chairs: Mohamed Mehdi Ben Ameur & Maha Benzrig' },
      { time: '2:16 – 2:20 PM', title: 'Intervention', speaker: 'Counselors: Mr. Salah Gontara & Mr. Wajdi Bouajila' },
      { time: '2:23 – 2:25 PM', title: 'Intervention', speaker: 'Directors: Nadhem Sayari & Dhaw Brini' },
      { time: '2:26 – 2:34 PM', title: 'Intervention', speaker: 'Sponsors' },
      { time: '2:34 – 2:44 PM', title: 'Partners Segment', speaker: 'Moderator + Partners (CS Tunisia, YP Tunisia, SMC, Tunisia Section)' },
      { time: '2:44 – 2:45 PM', title: 'Transition to Panel', speaker: 'Moderator' }
    ]
  },
  {
    id: 'panel-ai',
    start: '2:45 PM',
    end: '3:32 PM',
    title: 'Panel: The Future of Scalable AI‑Driven Applications',
    room: 'Conference Room',
    participants: '≈250',
    description: 'Discussion: AI in Humanities, Education, Industry, Humanitarians.',
    subItems: [
      { time: '2:45 – 3:32 PM', title: 'Panel Session', speaker: 'Panelists (TBA) + Moderator', notes: '45 min panel; 2 min moderator segments.' }
    ]
  },
  { id: 'coffee', start: '3:32 PM', end: '3:45 PM', title: 'Coffee Break', room: 'Hotel', participants: '≈250', description: 'Networking over coffee.' },
  { id: 'ws-web', start: '4:00 PM', end: '5:00 PM', title: 'Workshop Track 1: Web/Mobile Development', room: 'Room 1', participants: '≈85', description: 'Full‑stack web & mobile UI development.' },
  { id: 'ws-cloud', start: '4:00 PM', end: '5:00 PM', title: 'Workshop Track 2: Cloud', room: 'Room 2', participants: '≈85', description: 'Containerization & orchestration fundamentals.' },
  { id: 'ws-ai1', start: '4:00 PM', end: '5:30 PM', title: 'Workshop Track 3: AI (Part 1)', room: 'Room 3', participants: '≈40', description: 'Foundational ML concepts & hands‑on model building.' },
  { id: 'ws-solid1', start: '4:00 PM', end: '5:30 PM', title: 'Workshop Track 4: Certified SolidWorks (Part 1)', room: 'Room 4', participants: '≈40', description: 'SolidWorks for beginners.' },
  { id: 'industry-network', start: '5:15 PM', end: '6:15 PM', title: 'Industry Booth Networking', room: 'Conference Room', participants: '≈250', description: 'Facilitated industry networking & informal discussions.' },
  { id: 'cs-benefits', start: '6:15 PM', end: '7:00 PM', title: 'CS Benefits Session', room: 'Room 1', participants: '≈42', description: 'Computer Society benefits overview.' },
  { id: 'student-yp', start: '6:15 PM', end: '7:00 PM', title: 'Student‑to‑YP Transition Session', room: 'Room 2', participants: '≈42', description: 'Mentorship with IEEE YP members.' },
  { id: 'mtts', start: '6:15 PM', end: '7:00 PM', title: 'MTTS Session', room: 'Room 5', participants: '≈42', description: 'MTTS technical session.' },
  { id: 'smc', start: '6:15 PM', end: '7:00 PM', title: 'SMC Session', room: 'Conference Room', participants: '≈42', description: 'Systems, Man & Cybernetics focused session.' },
  { id: 'ws-ai2', start: '6:15 PM', end: '7:45 PM', title: 'Workshop Track 3: AI (Part 2)', room: 'Room 3', participants: '≈40', description: 'Continuation of AI workshop.' },
  { id: 'ws-solid2', start: '6:15 PM', end: '7:45 PM', title: 'Workshop Track 4: Certified SolidWorks (Part 2)', room: 'Room 4', participants: '≈40', description: 'Continuation of SolidWorks workshop.' },
  { id: 'dinner', start: '7:30 PM', end: '9:00 PM', title: 'Dinner', room: 'Resto', participants: '≈300', description: 'Buffet dinner & relaxed networking.' },
  { id: 'leadership', start: '9:15 PM', end: '10:15 PM', title: 'Leadership Bootcamp (Injaz Tunisia)', room: 'Conference Room', participants: '≈250', description: 'Entrepreneurial leadership & project management training.' },
  {
    id: 'hackathon-launch',
    start: '10:15 PM',
    end: '10:30 PM',
    title: 'Hackathon: Challenge Launch & Ideation',
    room: 'Conference Room',
    participants: '≈250',
    description: 'Moderator introduction, flow overview, ideation guidelines & challenge reveal.',
    subItems: [
      { time: '10:15 – 10:16 PM', title: 'Welcome & Transition', speaker: 'Moderator' },
      { time: '10:16 – 10:19 PM', title: 'Hackathon Flow & Format', speaker: 'TBA' },
      { time: '10:19 – 10:22 PM', title: 'Ideation Guidelines', speaker: 'TBA' },
      { time: '10:22 – 10:24 PM', title: 'Introducing the Challenge', speaker: 'Moderator' },
      { time: '10:24 – 10:30 PM', title: 'Challenge Launch', speaker: 'TBA' }
    ]
  },
  { id: 'party', start: '11:00 PM', end: '1:00 AM', title: 'Hotel Party & Networking', room: 'Conference Room', participants: '≈250', description: 'Informal networking & community building.' }
];

export const day2 = [
  { id: 'breakfast', start: '7:00 AM', end: '9:00 AM', title: 'Breakfast', room: 'Resto', participants: '≈250', description: 'Morning refreshments & networking.' },
  { id: 'ieee-mentoring', start: '9:30 AM', end: '10:30 AM', title: 'IEEE Mentoring', room: 'Conference Room', participants: '≈300', description: 'Promoting mentoring program.' },
  {
    id: 'hackathon-finale',
    start: '10:30 AM',
    end: '12:00 PM',
    title: 'Hackathon Finale & Pitches',
    room: 'Conference Room',
    participants: '≈250',
    description: 'Team pitches & jury Q&A; closing deliberation.',
    subItems: [
      { time: '10:30 – 10:33 AM', title: 'Welcome & Pitch Rules', speaker: 'Moderator' },
      { time: '10:33 – 11:57 AM', title: 'Team Pitches & Jury Q&A', speaker: 'Teams + Jury', notes: '2.5 min/team pitch + 1.5 min jury Q&A.' },
      { time: '11:57 – 12:00 PM', title: 'Closing (Deliberation Start)', speaker: 'Moderator' }
    ]
  },
  { id: 'lunch', start: '12:00 PM', end: '1:00 PM', title: 'Lunch with Industry Mentors', room: 'Resto', participants: '≈300', description: 'Informal career discussions.' },
  { id: 'checkout', start: '1:00 PM', end: '1:30 PM', title: 'Check‑out Process', room: 'Hotel', participants: '≈300', description: 'Departure logistics before afternoon sessions.' },
  {
    id: 'awards',
    start: '1:30 PM',
    end: '2:00 PM',
    title: 'Awards Ceremony',
    room: 'Conference Room',
    participants: '≈250',
    description: 'Honorable mentions and top 3 placements.',
    subItems: [
      { time: '1:30 – 1:43 PM', title: 'Opening & Honorable Mentions', speaker: 'Moderator + Jury' },
      { time: '1:43 – 1:48 PM', title: '3rd Place Announcement & Prize', speaker: 'Moderator + Team 1' },
      { time: '1:48 – 1:53 PM', title: '2nd Place Announcement & Prize', speaker: 'Moderator + Team 2' },
      { time: '1:53 – 1:57 PM', title: '1st Place Announcement & Prize', speaker: 'Moderator + Team 3' },
      { time: '1:57 – 2:00 PM', title: 'Group Photo (All Winners)', speaker: 'Moderator' }
    ]
  },
  {
    id: 'closing',
    start: '2:00 PM',
    end: '2:20 PM',
    title: 'Closing Ceremony',
    room: 'Conference Room',
    participants: '≈250',
    description: 'Final reflections, coordinator highlights, final words.',
    subItems: [
      { time: '2:00 – 2:01 PM', title: 'Welcome & Transition', speaker: 'Moderator' },
      { time: '2:01 – 2:05 PM', title: 'Words from Special Guests', speaker: 'Moderator + Guests' },
      { time: '2:05 – 2:10 PM', title: 'Coordinators Words', speaker: 'Coordinators: Aziz Bouassida & Med Aziz Achouri' },
      { time: '2:10 – 2:15 PM', title: 'OC Team Highlight', speaker: 'Moderator' },
      { time: '2:15 – 2:20 PM', title: 'Thanking + Final Words & Goodbye', speaker: 'Moderator' }
    ]
  }
];

export const days = [
  { label: 'Day 1 – Sep 28, 2025', id: 'day1', slots: day1 },
  { label: 'Day 2 – Sep 29, 2025', id: 'day2', slots: day2 }
];
