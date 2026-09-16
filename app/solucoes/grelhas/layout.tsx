import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grelhas de ventilação | RETEC",
  description:
    "Grelhas para insuflamento, retorno, exaustão e captação de ar em sistemas HVAC comerciais, corporativos e residenciais.",
};

export default function GrelhasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}