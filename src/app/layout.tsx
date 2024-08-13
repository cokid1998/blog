import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@src/components/Common/Header/Header";
import Footer from "@src/components/Common/Footer/Footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Cokid.Dev.Story",
  description: "cokid dev blog",
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
        <main className="w-full pb-[80px]">
          <div className="m-auto max-w-[768px] flex flex-col items-center mobile:px-[20px]">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
