import type { Metadata } from "next";
import "../index.css";
import { ProgressBarWrapper } from "@/components/progressBarWrapper";

export const metadata: Metadata = {
  title: "Jesper Hesselgren - Portfolio",
  description: "Portfolio of Jesper Hesselgren, tech student at KTH",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ProgressBarWrapper>
          <div id="root">{children}</div>
        </ProgressBarWrapper>
      </body>
    </html>
  );
}
