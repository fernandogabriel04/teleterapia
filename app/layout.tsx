import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./_components/FixedWhatsapp";
import Image from "next/image";

const openSans = Open_Sans({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Teleterapia",
  description: "Saúde Mental Para Todos",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} antialiased max-w-[1400px] px-[2.5rem] mx-auto text-white text-[1.44rem] bg-primary-blue`}
      >
        <main>
        {children}
        </main>
        {/* Imagem de fundo simbólica (fixa na lateral direita) */}
        <div className="absolute top-0 right-0 z-0">
          <Image
            priority
            src="/BG-Symbol.png"
            alt="Hero Image"
            width={406}
            height={854}
            className="object-cover max-w-64 sm:max-w-full sm:min-h-full"
          />
        </div>
        {/* Imagem de fundo simbólica (fixa na lateral direita) */}
        <div className="absolute top-full right-0 left-0 z-0">
          <Image
            priority
            src="/Line-Transversal.png"
            alt=""
            width={1920}
            height={1080}
            className="object-cover max-w-64 sm:max-w-full sm:min-h-full"
          />
        </div>
        {/* <div className="min-w-[200%] h-1 bg-green-500 transform rotate-12 absolute top-[150%] left-0 z-0"></div> */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
