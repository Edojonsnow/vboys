import localFont from "next/font/local";
import "./globals.css";
import {} from "next/font/google";

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
const helv = localFont({
  src: "./fonts/HelveticaRoundedLTStd-Bd.woff",
  variable: "--font-helv",
  weight: "100 900",
});

export const metadata = {
  title: "VogueBoys4Life",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${helv.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
