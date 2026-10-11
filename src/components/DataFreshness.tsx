import React from "react";
import type { FreshnessStatus } from "../utils/dataFreshness";

type Props = {
  satellite: FreshnessStatus;
  cloud: FreshnessStatus;
  compact?: boolean;
};

const STATUS_STYLES = {
  fresh: "text-emerald-300",
  delayed: "text-amber-300",
  stale: "text-rose-300",
  unavailable: "text-slate-400",
} as const;

const StatusDot = ({ status }: { status: FreshnessStatus }) => (
  <span
    aria-hidden="true"
    className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-current ${STATUS_STYLES[status.level]}`}
  />
);

const StatusLine = ({
  name,
  status,
}: {
  name: string;
  status: FreshnessStatus;
}) => (
  <span className="inline-flex min-w-0 items-center gap-1.5">
    <StatusDot status={status} />
    <span className="truncate">{name}</span>
    <span className={STATUS_STYLES[status.level]}>{status.label}</span>
    <span className="text-slate-500">· {status.relativeAge}</span>
  </span>
);

export const DataFreshness: React.FC<Props> = ({
  satellite,
  cloud,
  compact = false,
}) => {
  if (compact) {
    return (
      <div
        aria-label="Data freshness"
        className="flex flex-wrap gap-x-3 gap-y-1 text-[0.68rem] font-semibold text-slate-300"
      >
        <StatusLine name="Satellites" status={satellite} />
        <StatusLine name="Clouds" status={cloud} />
      </div>
    );
  }

  return (
    <section
      aria-label="Data freshness"
      className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3"
    >
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
        Data freshness
      </h3>
      <dl className="mt-3 space-y-3 text-xs">
        <div>
          <dt className="flex items-center gap-2 font-semibold text-slate-200">
            <StatusDot status={satellite} /> Satellite catalog
            <span className={STATUS_STYLES[satellite.level]}>
              {satellite.label}
            </span>
          </dt>
          <dd className="mt-1 pl-3.5 text-slate-400">
            {satellite.sourceTimestamp
              ? `${satellite.relativeAge} · updated ${satellite.localTime}`
              : "No published snapshot timestamp available"}
          </dd>
        </div>
        <div>
          <dt className="flex items-center gap-2 font-semibold text-slate-200">
            <StatusDot status={cloud} /> Cloud analysis
            <span className={STATUS_STYLES[cloud.level]}>{cloud.label}</span>
          </dt>
          <dd className="mt-1 pl-3.5 text-slate-400">
            {cloud.sourceTimestamp
              ? `${cloud.relativeAge} · valid ${cloud.localTime}`
              : "No published cloud analysis timestamp available"}
            {cloud.modelCycle && (
              <span className="block text-slate-500">
                NOAA cycle {cloud.modelCycle}
              </span>
            )}
            {cloud.publishedAt && (
              <span className="block text-slate-500">
                Published {new Date(cloud.publishedAt).toLocaleString()}
              </span>
            )}
          </dd>
        </div>
      </dl>
    </section>
  );
};

export default DataFreshness;
