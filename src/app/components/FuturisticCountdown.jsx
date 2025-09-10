import { useEffect, useState } from 'react';

// targetDate must be a parsable date string (UTC recommended)
export default function FuturisticCountdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    if (!targetDate) return; // nothing if no date
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (!targetDate) return null;

  if (timeLeft.total <= 0) {
    return (
      <div className="mx-auto mt-10 w-full max-w-5xl text-center">
        <p className="text-lg font-semibold tracking-wide text-[#ffa800]">Event Started</p>
      </div>
    );
  }

  const blocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="mx-auto mt-10 w-full max-w-6xl px-4">
      <div className="flex flex-wrap items-stretch justify-center gap-36">
        {blocks.map((b, i) => (
          <>
            <TimeBlock key={b.label} label={b.label} value={b.value} />
          </>
        ))}
      </div>
    </div>
  );
}

function TimeBlock({ label, value }) {
  const padded = String(value).padStart(2, '0');
  return (
    <div className="flex flex-col items-center ">
      <div
        className="relative flex items-center justify-center "
        style={{
          // Glow ring
        }}
      >
        <span
          className="select-none leading-none text-white dark:text-white"
          style={{
            fontFamily: 'var(--font-mono, ui-monospace, SFMono-Regular, Menlo, monospace)',
            fontWeight: 800,
            letterSpacing: '-2px',
            // Responsive sizing via clamp
            fontSize: 'clamp(3rem, 9vw, 7rem)',
            WebkitTextStroke: '4px #ffa800',
            color: 'white',
            textShadow: '0 0 6px rgba(255,168,0,0.35), 0 0 18px rgba(255,168,0,0.25)'
          }}
          aria-hidden="true"

        >
          {padded}
        </span>
        <span className="sr-only">{padded} {label}</span>
      </div>
      <span className="mt-3 text-sm font-semibold uppercase tracking-wide text-[#ffa800]">{label}</span>
    </div>
  );
}

function getTimeLeft(targetDate) {
  const end = new Date(targetDate).getTime();
  const now = Date.now();
  const total = end - now;
  if (Number.isNaN(end)) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { total, days, hours, minutes, seconds };
}
