import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ModalContextWrapper } from "./context/index-modal";
import TrailerModal from "./components/trailerModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Significa challenge",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalContextWrapper>
          <TrailerModal />
          {children}
        </ModalContextWrapper>
      </body>
    </html>
  );
}
