import { Noto_Sans, Cinzel } from "next/font/google";

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
