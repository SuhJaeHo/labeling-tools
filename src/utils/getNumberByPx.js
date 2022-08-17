export default function getNumberByPx(left, top, width, height) {
  const Left = Number(left.slice(0, left.indexOf("p")));
  const Top = Number(top.slice(0, top.indexOf("p")));
  const Width = Number(width.slice(0, width.indexOf("p")));
  const Height = Number(height.slice(0, height.indexOf("p")));

  return { Left, Top, Width, Height };
}
