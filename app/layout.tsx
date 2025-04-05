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
        {children}
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
