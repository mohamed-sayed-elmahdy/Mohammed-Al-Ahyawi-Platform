"use client";

import { useMemo, useState } from "react";
import { journeys } from "@/data/journeys";
import type { JourneyCityFilter, JourneyScopeFilter } from "@/types/website";
import JourneysFilters from "./JourneysFilters";
import JourneysGrid from "./JourneysGrid";
import JourneysMetaRow from "./JourneysMetaRow";

export default function JourneysPageContent() {
  const [scope, setScope] = useState<JourneyScopeFilter>("saudi");
  const [location, setLocation] = useState<JourneyCityFilter>("all");

  const filteredJourneys = useMemo(
    () =>
      journeys.filter((journey) => {
        if (journey.scope !== scope) return false;
        if (location === "all") return true;

        return scope === "saudi"
          ? journey.city === location
          : journey.country === location;
      }),
    [location, scope],
  );

  const handleScopeChange = (nextScope: JourneyScopeFilter) => {
    setScope(nextScope);
    setLocation("all");
  };

  return (
    <section className="bg-(--color-background) py-8 pb-16 sm:py-10 sm:pb-24 lg:py-12">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10">
        <JourneysFilters
          scope={scope}
          location={location}
          onScopeChange={handleScopeChange}
          onLocationChange={setLocation}
        />
        <div className="mt-6 sm:mt-8">
          <JourneysMetaRow
            count={filteredJourneys.length}
            scope={scope}
            location={location}
          />
        </div>
        <div className="mt-6 sm:mt-8">
          {filteredJourneys.length > 0 ? (
            <JourneysGrid journeys={filteredJourneys} />
          ) : (
            <div className="rounded-[24px] border border-dashed border-(--color-accent)/30 bg-(--color-surface)/35 px-6 py-16 text-center">
              <h2 className="font-alexandria text-xl font-bold text-(--color-text)">
                لا توجد جولات مطابقة
              </h2>
              <p className="mt-3 text-sm leading-7 text-(--color-secondary-text)">
                جرّب اختيار مدينة أو دولة أخرى.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
