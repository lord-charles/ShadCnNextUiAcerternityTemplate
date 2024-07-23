import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import { ThemeProvider } from "@/components/theme-provider";
import DesktopNav from "@/components/layout/Header/desktop";
import MobileNav from "@/components/layout/Header/Mobile";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CarePulse - Hospital Management System",
  description:
    "CarePulse: Streamlining hospital operations for better patient care.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <div className="block md:hidden">
              <MobileNav />
            </div>
            <div className="hidden md:block">
              <DesktopNav />
            </div>

            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
