import { useRef } from "react";
import { Loader2 } from "lucide-react";

import Empty from "@/components/empty";
import { Skeleton } from "@/components/ui/skeleton";

import { useDisplay } from "./hooks/use-display";

type Props = {};

const VideoBox = (props: Props) => {
  const promptRef = useRef<HTMLDivElement>(null);
  const { video, loading } = useDisplay({ promptRef });

  return (
    <div className="h-full py-12 overflow-auto">
      {!video && !loading ? (
        <div className="h-[60vh]">
          <Empty label="No video generated yet" />
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
              {video && (
                <video
                  controls
                  className="w-full aspect-video rounded-lg border p-2 bg-muted"
                >
                  <source src={video} />
                </video>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default VideoBox;
