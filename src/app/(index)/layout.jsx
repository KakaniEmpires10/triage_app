import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Provider from "@/components/provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
});

export const metadata = {
  title: "Triage App",
  description:
    "A WebApp made with intension and hope to ease triage process for survivor during cathastrope",
  icons : {
    icon: '/favicon2.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Provider> */}
          <Navbar />
          {children}
          <Footer />
        {/* </Provider> */}
      </body>
    </html>
  );
}
