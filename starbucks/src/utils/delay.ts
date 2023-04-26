export default function delay(s: number) {
  return new Promise<void>((res) => {
    setTimeout(() => {
      res();
    }, s * 1000);
  });
}
