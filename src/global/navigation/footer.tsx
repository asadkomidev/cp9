import Link from "next/link";

import Container from "@/components/container";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Footer = ({ className }: Props) => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="font-inter w-full max-w-7xl"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container className={cn("bottom-0 w-full", className)}>
        <div className="flex flex-col items-center justify-between border-t border-gray-900/10 py-2 lg:flex-row">
          <div className="flex items-center gap-4">
            <span className="text-xs">
              Build with ❤️ by <Link href="/">Asad Komi</Link>
            </span>
          </div>
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; 2024 Asad Komi. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
