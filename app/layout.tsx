import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brides&Grooms | Dress for the occasion",
  description:
    "Thoughtfully chosen dresses for your best-dressed moments. Find your occasion dress at Brides&Grooms.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
