import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "@src/components/ui/toaster";
import Header from "@src/components/Common/Header/Header";
import Footer from "@src/components/Common/Footer/Footer";
import Search from "@src/components/Common/Header/Search/Search";
import Category from "@src/components/Category/Category";

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
        <main className="w-full">
          <div className="m-auto max-w-[768px] flex flex-col items-center">
            <Search />
            <Category />
            {children}
            <Toaster />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
