import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Days since last JS framework",
  description:
    "Counter for the days since the release of the latest JavaScript framework",
  keywords: "javaScript, framework, counter, last, js, days, since, release",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="h-full min-h-screen w-screen font-mono">
        <TRPCReactProvider>
          <Navbar />
          <main className="h-full w-full py-10">{children}</main>
          <Footer />
        </TRPCReactProvider>
        <script
          defer
          data-domain="dayssincelastjsframework.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </body>
    </html>
  );
}
