import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Tattoo Studio",
  description:
    "Tattoo studio website built from figma design by Giorgi Matsukatovi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen max-w-full overflow-x-hidden bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
