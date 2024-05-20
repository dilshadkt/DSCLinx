import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "DSCLINX",
  description: "We Picturesque, We Design, We Renovate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css"
        />
      </head>

      <body className="font-montserrat">
        <Header />
        {children}
        <Footer />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js"
          async
        ></Script>
        <Script
          src="https://web3forms.com/client/script.js"
          async
          defer
        ></Script>
      </body>
    </html>
  );
}
