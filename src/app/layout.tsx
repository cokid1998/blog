import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@src/components/Common/Header/Header";
import Footer from "@src/components/Common/Footer/Footer";
import Sidebar from "@src/components/Common/Sidebar/Sidebar";
import { Toaster } from "@src/components/ui/toaster";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <Header />
        <main className="flex justify-center items-center">
          <div className="container flex mt-[50px] gap-[30px]">
            <Sidebar />
            {children}
            <Toaster />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
