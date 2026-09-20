import "./globals.css";
import PwaRegister from "./PwaRegister";
import InstallPrompt from "./InstallPrompt";

export const metadata = {
  title: "حبيب هلال محسن | شيف عام ومعلم مطبخ",
  description:
    "موقع شخصي احترافي لشيف عام ومعلم مطبخ يمتلك خبرة تزيد عن عشر سنوات في المطاعم والمطابخ",
  keywords: [
    "شيف",
    "معلم مطبخ",
    "معلم مشاوي",
    "مندي",
    "كبسة",
    "شاورما",
    "وظيفة شيف",
    "مطبخ يمني",
  ],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon-180x180.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#5400DE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" style={{ fontFamily: 'Tajawal, system-ui, sans-serif' }}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="حبيب هلال" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon-180x180.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#5400DE" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="font-sans" style={{ fontFamily: 'Tajawal, system-ui, sans-serif' }}>
        <PwaRegister />
        <InstallPrompt />
        {children}
      </body>
    </html>
  );
}
