import "./globals.css";
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-875773979"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-875773979');
          `}
        </Script>
      </head>

      <body className="font-montserrat">
        {children}
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
