import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Provider from "@/components/provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Provider> */}
          {children}
          <Footer />
        {/* </Provider> */}
      </body>
    </html>
  );
}
