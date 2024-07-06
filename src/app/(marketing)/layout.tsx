import Container from "@/components/container";
import Footer from "@/global/navigation/footer";
import Logo from "@/global/navigation/logo";
import Navbar from "@/global/navigation/navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="fixed bottom-0 top-0 w-full">
      <Navbar>
        <Logo />
      </Navbar>
      <Container className="min-h-screen">
        {children}
        <Footer className="fixed mt-24" />
      </Container>
    </div>
  );
}
