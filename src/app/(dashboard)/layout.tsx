import { getAuthUser } from "@/backend/utilities/utils";
import BackgroundGrid from "@/components/bg-grid";
import Container from "@/components/container";
import Footer from "@/global/navigation/footer";

import Navbar from "@/global/navigation/navbar";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, isAuth } = await getAuthUser();
  if (!isAuth) {
    redirect("/");
  }

  return (
    <div className="fixed bottom-0 top-0 w-full">
      <Navbar />
      <Container className="h-screen">
        <BackgroundGrid />
        {children}
        {/* <Footer /> */}
      </Container>
    </div>
  );
}
