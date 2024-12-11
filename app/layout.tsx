import type {Metadata} from "next";
import "./globals.css";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
    title: {
        template: "%s | Analyze the Spire",
        default: "Analyze the Spire"
    },
    description: "Slay the Spire with a deep learning model",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Navigation></Navigation>
        {children}
        </body>
        </html>
    );
}
