import type { Metadata } from "next";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
export const metadata: Metadata = {
  title: "Lapti.js",
  description: "This Laptop Online Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-[1320px]">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
