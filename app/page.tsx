export default function Home() {
  const equation = "$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$"
  const equation2 = '\\begin{array}{cc} a & b \\\\ c & d \\end{array}'
  return (
    <div>
      {equation}
      {equation2}
    </div>
  );
}
