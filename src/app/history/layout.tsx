import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest JS framework releases",
  description: "History of JavaScript frameworks and their release dates.",
  keywords: "javaScript, framework, counter, last, js, days, since, release",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
