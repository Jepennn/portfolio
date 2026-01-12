"use client";

import { ProgressBar } from "./progressBar";

export function ProgressBarWrapper({ children }: { children: React.ReactNode }) {
  return <ProgressBar>{children}</ProgressBar>;
}
