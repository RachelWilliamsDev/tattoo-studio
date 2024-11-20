import { SITE_CONFIG } from "@/config";
import "../styles/globals.css";

export const metadata = SITE_CONFIG;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen max-w-full overflow-x-hidden bg-background text-foreground antialiased font-satoshi">
        {children}
      </body>
    </html>
  );
}
