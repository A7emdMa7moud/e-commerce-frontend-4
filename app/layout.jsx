import Nav_bar from "./_components/Navbar";
import Footer from "./_components/Footer";
import localFont from "next/font/local";

import "./globals.css";
import StoreProvider from "./_redux/providers";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata = {
  title: "home",
  description: "commerce bouid by ahmed mahmoud",
};
export default function RootLayout({ children }) {
  return (
    <html data-theme="dark" id="html" lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-dvh`}>
        <StoreProvider>
          <Nav_bar />
          <div className="container mx-auto pt-20 p-4 *:min-h-[90dvh]">
            {children}
          </div>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
