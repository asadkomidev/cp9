import { useRef } from "react";
import Image from "next/image";
import { Download, Loader2 } from "lucide-react";

import Empty from "@/components/empty";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { useDisplay } from "./hooks/use-display";

type Props = {};

const ImagesBox = (props: Props) => {
  const promptRef = useRef<HTMLDivElement>(null);
  const { images, loading, isLast } = useDisplay({ promptRef });
  return (
    <div className="no-scrollbar h-full overflow-auto py-12">
      {images.length === 0 && !loading ? (
        <div className="h-[60vh]">
          <Empty label="No images generated yet" />
        </div>
      ) : (
        <>
          {loading ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <Skeleton className="relative aspect-square bg-muted">
                <div className="absolute left-4 top-4">
                  <Loader2 size={24} className="animate-spin" />
                </div>
              </Skeleton>
              <Skeleton className="relative aspect-square bg-muted">
                <div className="absolute left-4 top-4">
                  <Loader2 size={24} className="animate-spin" />
                </div>
              </Skeleton>
              <Skeleton className="relative aspect-square bg-muted">
                <div className="absolute left-4 top-4">
                  <Loader2 size={24} className="animate-spin" />
                </div>
              </Skeleton>
              <Skeleton className="relative aspect-square bg-muted">
                <div className="absolute left-4 top-4">
                  <Loader2 size={24} className="animate-spin" />
                </div>
              </Skeleton>
            </div>
          ) : (
            <div
              ref={isLast ? promptRef : null}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
            >
              {images.map((image, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden rounded-md border shadow-none transition duration-300"
                >
                  <div className="relative aspect-square">
                    <Image alt="image" src={image} fill />
                  </div>
                  <div
                    className="absolute right-4 top-4 hidden cursor-pointer rounded-lg bg-primary p-2 text-background transition duration-100 group-hover:flex"
                    onClick={() => window.open(image)}
                  >
                    <Download size={24} />
                  </div>
                </Card>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ImagesBox;
