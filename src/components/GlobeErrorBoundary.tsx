import React from "react";

type Props = { children: React.ReactNode; onRetry: () => void };
type State = { hasError: boolean };

export default class GlobeErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("The globe could not be rendered:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-950 px-6 text-center text-white"
          role="alert"
        >
          <p className="text-lg font-bold">The 3D globe is unavailable.</p>
          <p className="max-w-sm text-sm text-slate-300">
            Satellite data and controls are still available. Check graphics
            acceleration, then try the globe again.
          </p>
          <button
            className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950"
            onClick={this.props.onRetry}
            type="button"
          >
            Retry globe
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
