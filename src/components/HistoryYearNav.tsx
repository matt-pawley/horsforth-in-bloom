"use client";

import { useEffect, useState } from "react";

export function HistoryYearNav({ years }: { years: string[] }) {
  const [activeYear, setActiveYear] = useState(years[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0])
          setActiveYear(visible[0].target.id.replace("year-", ""));
      },
      { rootMargin: "-112px 0px -60% 0px" },
    );

    for (const year of years) {
      const milestone = document.getElementById(`year-${year}`);
      if (milestone) observer.observe(milestone);
    }
    return () => observer.disconnect();
  }, [years]);

  return (
    <nav aria-label="History by year" className="lg:sticky lg:top-28">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-ink">
        Jump to a year
      </p>
      <ol className="flex flex-wrap lg:grid lg:grid-cols-2 gap-1.5">
        {years.map((year) => (
          <li key={year}>
            <a
              href={`#year-${year}`}
              onClick={() => setActiveYear(year)}
              aria-current={activeYear === year ? "location" : undefined}
              className={`flex min-h-11 items-center justify-center rounded-md px-3 text-sm tabular-nums ${activeYear === year ? "bg-forest text-white font-semibold" : "text-muted-ink hover:bg-white hover:text-forest hover:underline underline-offset-4"}`}
            >
              {year}
            </a>
          </li>
        ))}
      </ol>
      <p className="hidden lg:block mt-6 border-t border-line pt-5 text-sm leading-relaxed text-muted-ink">
        The people, planting and projects that shaped our town.
      </p>
    </nav>
  );
}
