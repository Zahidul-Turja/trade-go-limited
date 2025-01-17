import { Toaster } from "react-hot-toast";

import "@/app/_styles/globals.css";
import { raleway, poppins } from "@/app/_styles/fonts";

import NavigationTop from "./_components/NavigationTop";
import NavigationMain from "./_components/NavigationMain";

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
      <body className={`${raleway.className} antialiased`}>
        <NavigationTop />
        <NavigationMain />
        {children}

        <Toaster position="bottom-left" toastOptions={{ duration: 3000 }} />
      </body>
    </html>
  );
}
