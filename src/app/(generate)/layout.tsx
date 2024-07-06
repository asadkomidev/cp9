import { redirect } from "next/navigation";
import { getAuthUser } from "@/backend/utilities/utils";
import BackgroundGrid from "@/components/bg-grid";
import Container from "@/components/container";
import Footer from "@/global/navigation/footer";
import Logo from "@/global/navigation/logo";
import Navbar from "@/global/navigation/navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuth } = await getAuthUser();
  if (!isAuth) {
    redirect("/api/auth/login");
  }
  return (
    <div className="fixed bottom-0 top-0 w-full">
      <Navbar>
        <Logo />
      </Navbar>
      <Container className="min-h-screen">
        <BackgroundGrid />
        {children}
        <Footer className="fixed" />
      </Container>
    </div>
  );
}
