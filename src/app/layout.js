import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import "./globals.css";

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
  title: "Foto Folio",
  description: "A photo Feed by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Navbar />
        <div className="container my-4 lg:my-8">
          {children}
        </div>
        
        {/* modal */}
        <div id="modal-root-content"/>

      </body>
    </html>
  );
}
