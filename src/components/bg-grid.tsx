import { HTMLProps } from "react";

interface BackgroundGridProps {
  color: string;
  cellSize: string | number;
  strokeWidth: number | string;
  className?: string;
  fade?: boolean;
  children?: React.ReactNode;
}

const BackgroundGrid = ({
  color = "#d7d7d8",
  cellSize = "50px",
  strokeWidth = "1px",
  className,
  fade = true,
  children,
  ...props
}: Partial<BackgroundGridProps> & HTMLProps<HTMLDivElement>) => {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' stroke='${color}' stroke-width='${strokeWidth}' fill-opacity='0.4' >
      <path d='M 100 0 L 100 200'/>
      <path d='M 0 100 L 200 100'/>
    </svg>
  `;
  const svgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  return (
    <div className="">
      <div
        className={`pointer-events-none absolute inset-0 left-0 top-0 flex h-full w-full ${className}`}
        style={{
          backgroundImage: `url("${svgDataUrl}")`,
          backgroundRepeat: "repeat",
          backgroundSize: cellSize,
          maskImage: fade
            ? `radial-gradient(ellipse at center, white, transparent 70%) `
            : undefined,
          WebkitMaskImage: fade
            ? `radial-gradient(ellipse at center, white, transparent 70%)`
            : undefined,
        }}
        {...props}
      ></div>
    </div>
  );
};

export default BackgroundGrid;
