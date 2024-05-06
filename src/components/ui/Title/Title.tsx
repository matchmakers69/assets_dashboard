import { TitleProps } from "./defs";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Rubik",
  weight: ["600", "700", "800"],
});

export function Title({ title }: TitleProps) {
  return (
    <h1
      className={`${rubik.className}text-lg mb-10 font-extrabold text-text-light uppercase leading-[1.2] md:text-lg`}
    >
      {title}
    </h1>
  );
}
