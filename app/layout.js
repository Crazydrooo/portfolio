import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: "./fonts/Poppins-SemiBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export const metadata = {
  title: "Shahil - Portfolio",
  description: "Everything What i built can be displayed here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
