import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

import { getAuthUser } from "@/backend/utilities/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import Image from "next/image";

type Props = {};

const UserMenu = async (props: Props) => {
  const { user } = await getAuthUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-muted">
          {!user?.picture ? (
            <div className="">
              <Image
                src={user?.picture || "/placeholder.png"}
                alt="profile"
                width={50}
                height={50}
                className="h-8 w-8 rounded-full"
              />
            </div>
          ) : (
            <span className="text-lg font-bold">
              {user?.given_name?.charAt(0).toUpperCase() || "U"}
            </span>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-32 rounded-xl border-none p-4 shadow-xl"
      >
        <DropdownMenuItem asChild className="rounded-lg">
          <Link href="/home" className="">
            <span>Tools</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="rounded-lg">
          <LogoutLink>Logout</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
