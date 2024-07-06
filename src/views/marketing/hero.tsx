import { Button } from "@/components/ui/button";
import SectionWrapper from "../../components/section";
import HeroLabel from "./hero/hero-label";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Avatar from "./avatar-carousel";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="">
      <SectionWrapper className="flex h-screen flex-col items-center justify-center">
        <section className="">
          <div className="z-10 flex items-center justify-center pb-6">
            <HeroLabel>
              🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#696969] via-[#ffaa40] to-[#696969] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                )}
              >
                Ultimate AI Tools
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </HeroLabel>
          </div>
          <div className="mx-auto flex-col px-4 lg:flex lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-neutral-300 via-neutral-500 to-neutral-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Intelligent productivity booster.
                <span className="sm:block"> Smart efficiency solutions </span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-muted-foreground sm:text-xl/relaxed">
                A suite of powerful AI tools to help you work smarter, not
                harder. Get started today and experience the future.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button className="h-9 w-32 rounded-full" asChild>
                  <Link href="/home">Explore</Link>
                </Button>
              </div>
            </div>
            <div className="py-32">
              <Avatar />
            </div>
          </div>
        </section>
      </SectionWrapper>
    </div>
  );
};

export default Hero;
