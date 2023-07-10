import { Noto_Sans, Cinzel, DM_Serif_Text } from "next/font/google";

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dmSerif",
});
