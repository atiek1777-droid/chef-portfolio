export default function Footer() {
  return (
    <footer className="bg-coal-900 py-8 text-linen-200">
      <div className="container-page flex flex-col items-center gap-2 text-center">
        <p className="text-base font-bold text-linen-100">حبيب هلال محسن</p>
        <p className="text-sm text-linen-200/75">
          شيف عام · معلم مطبخ · معلم مشاوي ووجبات سريعة
        </p>
        <p dir="ltr" className="text-sm text-linen-200/75">
          +967 783 079 291
        </p>
        <p className="mt-4 text-xs text-linen-200/50">
          © {new Date().getFullYear()} حبيب هلال محسن. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
