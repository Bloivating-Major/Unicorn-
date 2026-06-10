import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, MapPin, Calendar } from "lucide-react";
import { tournaments } from "../../lib/constants/tournaments";
import {
  fadeUp,
  staggerContainer,
  statItem,
  viewportOnce,
} from "../../lib/animations";

const badgeColors = {
  "FIDE Rated": "bg-amber-50 border-amber-200 text-amber-700",
  "GM Camp": "bg-purple-50 border-purple-200 text-purple-700",
  "National": "bg-blue-50 border-blue-200 text-blue-700",
  "All India": "bg-green-50 border-green-200 text-green-700",
  "Workshop": "bg-rose-50 border-rose-200 text-rose-700",
  "Organized by Unicorn Chess Academy": "bg-royal-50 border-royal/20 text-royal",
};

// Shared predicates — used for both counting and filtering so they can never disagree.
const isGmCamp     = (e) => e.type === "gm-camp"  || e.badge === "GM Camp";
const isWorkshop   = (e) => e.type === "workshop" || e.badge === "Workshop";
const isTournament = (e) => !isGmCamp(e) && !isWorkshop(e);

const filterFns = {
  all:        () => true,
  "gm-camp":  isGmCamp,
  workshop:   isWorkshop,
  tournament: isTournament,
};

const EventCard = ({ event }) => {
  // A date string that doesn't start with a digit is treated as a location label.
  const isLocation = !event.date.match(/^\d/);

  return (
    <div className="group flex gap-4 items-start py-3 px-4 rounded-xl hover:bg-surface-alt transition-colors duration-200">
      <div className="w-7 h-7 rounded-lg bg-royal-50 border border-royal/15 flex items-center justify-center text-royal flex-shrink-0 mt-0.5 group-hover:bg-royal-100 transition-colors duration-200">
        <Trophy size={13} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-ink leading-snug">{event.name}</p>
        <div className="flex flex-wrap items-center gap-3 mt-1">
          <span className="flex items-center gap-1 text-xs text-ink-muted">
            {isLocation ? <MapPin size={11} /> : <Calendar size={11} />}
            {event.date}
          </span>
          {event.badge && (
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${
                badgeColors[event.badge] ?? "bg-royal-50 border-royal/20 text-royal"
              }`}
            >
              {event.badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const TournamentsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const totalEvents  = tournaments.reduce((acc, y) => acc + y.events.length, 0);
  const totalYears   = tournaments.length;
  const latestYear   = Math.max(...tournaments.map((t) => Number(t.year)));

  // Counts use the same predicates as the filter — guaranteed to be consistent.
  const gmCampCount     = tournaments.reduce((acc, y) => acc + y.events.filter(isGmCamp).length,     0);
  const workshopCount   = tournaments.reduce((acc, y) => acc + y.events.filter(isWorkshop).length,   0);
  const tournamentCount = tournaments.reduce((acc, y) => acc + y.events.filter(isTournament).length, 0);

  const filteredTournaments = tournaments
    .map((yearGroup) => ({
      ...yearGroup,
      events: yearGroup.events.filter(filterFns[activeFilter] ?? (() => true)),
    }))
    .filter((yearGroup) => yearGroup.events.length > 0);

  return (
    <section className="bg-white section-wrapper">
      {/* Header */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <span className="eyebrow-text block mb-3">Our Tournaments</span>
        <h1 className="heading-text mb-4">
          Unicorn Chess{" "}
          <em className="italic text-royal">Events</em>
        </h1>
        <p className="body-text">
          Over a decade of organizing, participating in, and championing chess competitions
          across Madhya Pradesh and all of India.
        </p>

        {/* Quick stats */}
        <motion.div
          className="flex justify-center gap-8 mt-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {[
            { num: `${totalEvents}+`, label: "Events Organized" },
            { num: `${totalYears}`,   label: "Years Active" },
            { num: "MP & Beyond",     label: "Reach" },
          ].map((s) => (
            <motion.div key={s.label} variants={statItem} className="flex flex-col items-center">
              <span className="font-playfair text-2xl font-bold text-royal">{s.num}</span>
              <span className="text-xs text-ink-muted mt-0.5">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Filter pills */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mt-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {[
          { id: "all",        label: `Events (${totalEvents})`          },
          { id: "tournament", label: `Tournaments (${tournamentCount})` },
          { id: "gm-camp",    label: `GM Camp (${gmCampCount})`         },
          { id: "workshop",   label: `Workshops (${workshopCount})`     },
        ].map((filter) => (
          <motion.button
            key={filter.id}
            variants={statItem}
            onClick={() => setActiveFilter(filter.id)}
            className={`
              px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200
              ${
                activeFilter === filter.id
                  ? "bg-royal text-white shadow-brand-sm"
                  : "bg-surface-alt border border-border-light text-ink hover:bg-royal-50"
              }
            `}
          >
            {filter.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-[72px] md:left-[88px] top-0 bottom-0 w-px bg-border-light hidden sm:block" />

        {/*
          KEY FIX: key={activeFilter} forces this container to fully unmount and
          remount whenever the filter changes. Without it, Framer Motion's
          whileInView fires once (once: true) and disconnects the
          IntersectionObserver. Year groups that mount later (from a different
          filter) start at opacity: 0 / hidden and are never told to animate
          to visible — they occupy DOM space but stay invisible.
          Re-keying gives each filter a fresh observer and a clean animation run.
        */}
        <motion.div
          key={activeFilter}
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {filteredTournaments.map((yearGroup) => {
            const isCurrentYear = Number(yearGroup.year) === latestYear;

            return (
              <motion.div
                key={yearGroup.year}
                variants={{
                  hidden:  { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="flex gap-4 sm:gap-6"
              >
                {/* Year badge */}
                <div className="flex-shrink-0 w-[60px] sm:w-[76px]">
                  <div
                    className={`
                      flex flex-col items-center justify-center w-full py-2 rounded-xl border
                      font-playfair font-bold text-sm leading-tight text-center
                      ${
                        isCurrentYear
                          ? "bg-royal text-white border-royal shadow-brand-sm"
                          : "bg-surface-alt border-border-light text-royal"
                      }
                    `}
                  >
                    <span className="text-[10px] font-sans font-semibold tracking-widest uppercase opacity-70">
                      Year
                    </span>
                    {yearGroup.year}
                  </div>
                </div>

                {/* Events card */}
                <div className="flex-1 premium-card overflow-hidden">
                  <div className="px-4 py-3 border-b border-border-light flex items-center justify-between bg-surface-alt">
                    <span className="text-xs font-bold tracking-widest uppercase text-ink-muted">
                      {yearGroup.year} · {yearGroup.events.length} event
                      {yearGroup.events.length > 1 ? "s" : ""}
                    </span>
                    {isCurrentYear && (
                      <span className="text-xs font-semibold text-royal bg-royal-50 border border-royal/20 px-2.5 py-0.5 rounded-full">
                        Current Year
                      </span>
                    )}
                  </div>

                  <div className="divide-y divide-border-light/50">
                    {yearGroup.events.map((event, ei) => (
                      <EventCard
                        key={`${yearGroup.year}-${event.name}-${ei}`}
                        event={event}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-royal-50 border border-royal/15 rounded-2xl px-8 py-6">
          <div className="text-left">
            <p className="font-playfair font-bold text-ink text-lg">
              Want to participate in our next tournament?
            </p>
            <p className="text-sm text-ink-muted mt-1">
              Follow us on Instagram or join our WhatsApp community for updates.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="https://www.instagram.com/unicorn_chess_academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-royal-light to-royal text-white text-sm font-semibold shadow-brand-sm hover:shadow-brand-md transition-all duration-200"
            >
              Follow us
            </a>
            <a
              href="https://chat.whatsapp.com/Eq3e80MewtWER9ecUJ4Hj9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition-all duration-200"
            >
              Join Community
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TournamentsSection;