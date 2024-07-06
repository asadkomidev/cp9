import { useRef } from "react";
import Image from "next/image";
import { Download, Loader2 } from "lucide-react";

import Empty from "@/components/empty";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { useDisplay } from "./hooks/use-display";

type Props = {};

const MusicBox = (props: Props) => {
  const promptRef = useRef<HTMLDivElement>(null);
  const { music, loading } = useDisplay({ promptRef });
  return (
    <div className="h-full py-12 overflow-auto">
      {!music && !loading ? (
        <div className="h-[60vh]">
          <Empty label="No music generated yet" />
        </div>
      ) : (
        <>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Skeleton className="aspect-square bg-muted relative ">
                <div className="absolute top-4 left-4">
                  <Loader2 size={24} className="animate-spin" />
                </div>
              </Skeleton>
            </div>
          ) : (
            <div className="">
              {music && (
                <audio controls className="w-full">
                  <source src={music} />
                </audio>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MusicBox;
