import { useEffect, useRef, useState } from "react";

type Props = {
  isPaused: boolean;
  isTimeLapseActive: boolean;
  getTime: () => Date;
};

const LocalClock = ({ isPaused, isTimeLapseActive, getTime }: Props) => {
  const [time, setTime] = useState(() => getTime());
  const getTimeRef = useRef(getTime);
  getTimeRef.current = getTime;

  useEffect(() => {
    const update = () => {
      const next = getTimeRef.current();
      setTime((previous) =>
        previous.getTime() === next.getTime() ? previous : next,
      );
    };
    update();
    const timer = window.setInterval(update, 100);
    return () => window.clearInterval(timer);
  }, []);

  const fraction = isTimeLapseActive
    ? `.${Math.floor(time.getUTCMilliseconds() / 100)}`
    : "";
  const label = isPaused
    ? "Paused local"
    : isTimeLapseActive
      ? "Simulation local"
      : "Live local";

  return (
    <div className="pointer-events-none absolute right-3 top-3 z-20 rounded-lg border border-white/15 bg-slate-950/75 px-2.5 py-1.5 text-right text-white shadow-lg backdrop-blur-md sm:right-5 sm:top-5">
      <div className="flex items-center gap-2">
        <p className="hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-300 sm:block">
          {label}
        </p>
        <time
          className="text-[11px] font-semibold tabular-nums sm:text-xs"
          dateTime={time.toISOString()}
        >
          <span className="sm:hidden">
            {time.toLocaleTimeString(undefined, {
              timeStyle: "medium",
            })}
            {fraction}
          </span>
          <span className="hidden sm:inline">
            {time.toLocaleString(undefined, {
              dateStyle: "short",
              timeStyle: "medium",
            })}
            {fraction}
          </span>
        </time>
      </div>
    </div>
  );
};

export default LocalClock;
