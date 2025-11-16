import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Goofyji - Emoji Guessing Game",
  description: "Guess the word from emojis! Gets harder as you go!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
