import Container from "@/components/container";

import { Button } from "@/components/ui/button";
import UserMenu from "./user-menu";
import { getAuthUser } from "@/backend/utilities/utils";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Counter from "@/views/upgrade/counter";

import { checkSubscription } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
};

const Navbar = async ({ children }: Props) => {
  const { user, isAuth } = await getAuthUser();
  const isPremium = await checkSubscription();
  return (
    <header className="fixed left-0 right-0 top-0 z-[40] bg-white/5 py-2 backdrop-blur-lg dark:bg-black/5">
      <Container className="flex items-center justify-between">
        <aside className="flex items-center gap-[2px]">
          {children}
          {/* <MobileSidebar /> */}
        </aside>
        <nav className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] transform md:block">
          {/* <Links /> */}
        </nav>
        <aside className="flex items-center gap-4">
          {isAuth ? (
            <div className="flex items-center gap-4">
              {!isPremium && <Counter />}
              <UserMenu />
            </div>
          ) : (
            <LoginLink postLoginRedirectURL="/home">
              <Button className="h-9 w-24 rounded-full">Sign in</Button>
            </LoginLink>
          )}
        </aside>
      </Container>
    </header>
  );
};

export default Navbar;
