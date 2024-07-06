import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getAuthUser } from "@/backend/utilities/utils";
import { Toaster } from "sonner";
import { ModalProvider } from "@/providers/modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acme.",
  description: "Acme.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, isAuth } = await getAuthUser();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ModalProvider />
        {children}
        <Toaster
          position="top-center"
          style={{
            borderRadius: "100%",
            backgroundColor: "var(--color-primary)",
          }}
        />
      </body>
    </html>
  );
}
