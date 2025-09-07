import { useState } from 'react';
import { days } from './detailedAgendaData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faClock, faLocationDot, faUsers } from '@fortawesome/free-solid-svg-icons';
import { twMerge } from 'tailwind-merge';

function Slot({ slot, index }) {
  const [open, setOpen] = useState(index < 4); // open first few by default
  const hasChildren = !!slot.subItems?.length;
  return (
    <div className={twMerge('rounded-xl border border-gray-200 bg-white/70 p-4 backdrop-blur transition dark:border-gray-700 dark:bg-gray-900/60', open ? 'shadow-md' : 'hover:shadow')}>      
      <button
        onClick={() => setOpen(o => !o)}
        className="flex w-full items-start gap-4 text-left"
        aria-expanded={open}
      >
        <div className="flex flex-col items-center pt-1 text-xs font-mono text-gray-500 dark:text-gray-400 min-w-[4.5rem]">
          <span>{slot.start}</span>
          <span className="leading-none">⇣</span>
          <span>{slot.end}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold tracking-tight md:text-lg">{slot.title}</h3>
            {hasChildren && (
              <span className={twMerge('inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide', 'border-amber-300/60 bg-amber-400/10 text-amber-700 dark:border-amber-600/50 dark:text-amber-300')}>Structured</span>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 max-w-prose">{slot.description}</p>
          <div className="mt-2 flex flex-wrap gap-4 text-[11px] font-medium text-gray-500 dark:text-gray-500">
            {slot.room && <span className="inline-flex items-center gap-1"><FontAwesomeIcon icon={faLocationDot}/> {slot.room}</span>}
            {slot.participants && <span className="inline-flex items-center gap-1"><FontAwesomeIcon icon={faUsers}/> {slot.participants}</span>}
          </div>
        </div>
        <div className="pl-2 pt-1">
          <FontAwesomeIcon className={twMerge('transition text-sm', open ? 'rotate-180' : '')} icon={faChevronDown} />
        </div>
      </button>
      {hasChildren && open && (
        <div className="mt-4 space-y-3 border-t border-dashed border-gray-300 pt-4 dark:border-gray-600">
          {slot.subItems.map((s, i) => (
            <div key={i} className="rounded-lg bg-gray-50/80 p-3 text-xs leading-relaxed dark:bg-gray-800/60">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-mono text-[11px] text-gray-500 dark:text-gray-400"><FontAwesomeIcon icon={faClock} className="mr-1" />{s.time}</span>
                <span className="font-semibold text-gray-800 dark:text-gray-200">{s.title}</span>
                {s.speaker && <span className="text-gray-600 dark:text-gray-400">— {s.speaker}</span>}
              </div>
              {s.notes && <div className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">{s.notes}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DetailedAgenda() {
  const [activeDay, setActiveDay] = useState(days[0].id);
  const [expandAll, setExpandAll] = useState(false);

  return (
    <section className="mt-20" id="detailed-agenda">
      <div className="mx-auto mb-10 flex max-w-6xl flex-col items-center gap-6 text-center">
        <h2 className="text-[#ffa800]  text-3xl font-extrabold tracking-tight text-transparent md:text-4xl">Detailed Agenda</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {days.map(d => (
            <button
              key={d.id}
              onClick={() => setActiveDay(d.id)}
              className={twMerge('rounded-full px-4 py-1.5 text-sm font-semibold transition', activeDay === d.id ? 'bg-amber-500 text-white shadow' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700')}
            >{d.label}</button>
          ))}
         
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {days.filter(d => d.id === activeDay).map(day => (
          <div key={day.id} className="col-span-full space-y-4">
            {day.slots.map((slot, idx) => (
              <Slot key={slot.id} slot={slot} index={expandAll ? 0 : idx} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
