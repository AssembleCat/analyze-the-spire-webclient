import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | Analyze the Spire",
    default: "Analyze the Spire",
  },
  description: "Slay the Spire with a deep learning model",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen flex flex-col">
          <Header />

          <main className="flex-1 overflow-auto"> {children}</main>
        </div>
      </body>
    </html>
  );
}
