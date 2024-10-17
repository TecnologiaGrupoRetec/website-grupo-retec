import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Grupo RETEC",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
      <script async type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"></script>
    </html>
  );
}
