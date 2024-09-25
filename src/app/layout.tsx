import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Incentive Plus",
  description:
    "A Incentive Plus é uma empresa de Marketing de Incentivo que trabalha com um conjunto de ações objetivando motivar equipes a alcançarem melhores resultados. Nossos consultores desenvolvem ferramentas e estratégias de Marketing de Incentivo sob medida para sua empresa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${poppins.className} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
