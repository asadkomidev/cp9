type Props = {
  draw: () => void;
  animate: (start: number) => void;
  setAnimating: (animating: boolean) => void;
  inputRef: React.RefObject<HTMLTextAreaElement>;
  newDataRef: React.RefObject<any[]>;
};

export const useVanishSubmit = ({
  draw,
  animate,
  setAnimating,
  inputRef,
  newDataRef,
}: Props) => {
  const vanishAndSubmit = () => {
    setAnimating(true);
    draw();

    const value = inputRef.current?.value || "";
    if (value && inputRef.current) {
      const maxX =
        newDataRef.current?.reduce(
          (prev, current) => (current.x > prev ? current.x : prev),
          0,
        ) || 0;
      animate(maxX);
    }
  };

  return vanishAndSubmit;
};
