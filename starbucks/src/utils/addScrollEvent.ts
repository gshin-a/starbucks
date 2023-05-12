export function addScrollEvent({
  scrollRef,
  setIsVisible,
}: {
  scrollRef: React.RefObject<HTMLDivElement>;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const curElement = scrollRef.current;
  window.addEventListener("scroll", () => {
    if (curElement) {
      setIsVisible(curElement.getBoundingClientRect().bottom <= screen.height);
    }
  });
}
