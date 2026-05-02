import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/provider/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import AnimatedFavicon from "@/components/AnimatedFav";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opurbo || Portfolio",
  description: "A portfolio website for Opu Pal (Opurbo)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedFavicon />
          <Navbar />
          <Toaster position="top-center" />
          {children}
          <Footer /> <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
