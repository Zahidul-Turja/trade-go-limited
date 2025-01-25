import { Toaster } from "react-hot-toast";

import "@/app/_styles/globals.css";
import { raleway, poppins } from "@/app/_styles/fonts";

import NavigationTop from "./_components/NavigationTop";
import NavigationMain from "./_components/NavigationMain";
import Footer from "./_components/sections/Footer";

import LocoScrollProvider from "./_components/LocoScrollProvider";

export const metadata = {
  title: {
    template: "%s | Trade Go",
    default: "Welcome to Trade Go",
  },
  description:
    "Landing page for Trade Go chemical supply company based in the United Kingdom.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${raleway.className} antialiased`}>
        <NavigationTop />
        <NavigationMain />
        {/* <LocoScrollProvider>{children}</LocoScrollProvider> */}
        {children}
        <Footer />

        <Toaster position="bottom-center" toastOptions={{ duration: 3000 }} />
      </body>
    </html>
  );
}
