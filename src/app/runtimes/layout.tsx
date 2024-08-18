import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "JS runtimes",
  description: "History of JavaScript runtimes and their release dates.",
  keywords: "javaScript, runtime, counter, last, js, days, since, release",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
