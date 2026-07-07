import React, { ErrorInfo, ReactNode } from "react";
import { ShieldAlert, RefreshCw } from "lucide-react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught exception in Subhauler domain tree:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center p-6 bg-slate-50" id="error-boundary-viewport">
          <div className="text-center max-w-md p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-6 border border-red-100">
              <ShieldAlert size={32} />
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3">
              Corridor Access Exception
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 font-medium">
              We encountered an unexpected script or routing transition exception within our digital gateway. Click below to reload your digital terminal.
            </p>
            {this.state.error?.message && (
              <div className="w-full text-left p-4 bg-slate-50 border border-slate-100 rounded-2xl mb-8 overflow-x-auto">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                  Exception Log
                </span>
                <code className="text-xs font-mono text-slate-600 block whitespace-pre-wrap">
                  {this.state.error.message}
                </code>
              </div>
            )}
            <button
              onClick={this.handleReset}
              className="w-full max-w-xs bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest transition-transform hover:-translate-y-0.5 shadow-md shadow-slate-900/10"
            >
              <RefreshCw size={14} className="animate-spin-slow" /> Re-Initialize Session
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
