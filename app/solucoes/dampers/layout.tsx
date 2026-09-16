import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dampers corta-fogo | RETEC",
  description:
    "Dampers corta-fogo para compartimentação de sistemas de ventilação e climatização, com opções retangulares e redondas para diferentes classes de resistência ao fogo.",
};

export default function DampersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}