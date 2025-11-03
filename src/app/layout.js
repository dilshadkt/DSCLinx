import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import Image from "next/image";

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
        <div className="relative">
          <Image
            src="/bg_illustraion.jpg"
            alt="bg illustration"
            width={1200}
            height={1200}
            quality={100}
            priority
            className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover"
          />
          <div className="relative z-20 bg-white/70">{children}</div>
        </div>
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
