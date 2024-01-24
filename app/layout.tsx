import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/modal-provider";
import { ToasterProvider } from "@/components/toaster-provider";
import { CrispProvider } from "@/components/crisp-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CAVIC AI",
  description:
    "CAVIC AI is an innovative AI-powered SaaS platform designed to serve as your conversation companion and generate diverse media types including audio, video, code, and images based on your prompts. Whether you are looking for engaging conversations or creative content generation, CAVIC AI has you covered.",
  verification: { google: "w3roI87t-dIyKe7ReAdSWUVpWCe7K1pP_EXUidsZ3xI" },
  keywords: [
    "cavic",
    "cavic ai",
    "ai",
    "abhishek kumar",
    "kmaar",
    "abhishek kmaar",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
