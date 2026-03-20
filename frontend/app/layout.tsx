import './globals.css';
import Header from '@/components/layout/Header';
// import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-[#f7f3ef] text-[#1a1a1a]">
        <Header />
        <main className="min-h-screen">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
