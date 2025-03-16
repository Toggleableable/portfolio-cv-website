import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Zac's Portfolio / CV Site",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
