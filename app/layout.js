import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata = {
  title: "حبيب هلال محسن | شيف عام ومعلم مطبخ",
  description:
    "حبيب هلال محسن، شيف عام ومعلم مطبخ يمتلك خبرة عملية تزيد عن عشر سنوات في مجال المطاعم والمطابخ، متخصص في المندي والكبسة والمشاوي والوجبات السريعة.",
  keywords: [
    "شيف",
    "معلم مطبخ",
    "معلم مشاوي",
    "مندي",
    "كبسة",
    "شاورما",
    "وظيفة شيف",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
