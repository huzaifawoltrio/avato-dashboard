import "../../app/globals.css";
import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AvatoAI - AI-Powered Marketing Platform",
  description:
    "Complete AI marketing platform with tools for content creation, video generation, and campaign automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <body className="font-inter bg-gray-50 min-h-screen">
        <Header />
        <div className="flex pt-16">
          <Sidebar />
          <main className="flex-1 ml-0 lg:ml-64 transition-all duration-300">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
