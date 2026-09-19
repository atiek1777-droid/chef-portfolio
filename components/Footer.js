export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-cream-100 py-8">
      <div className="container-page flex flex-col items-center gap-2 text-center">
        <p className="text-base font-bold text-ink-900">حبيب هلال محسن</p>
        <p className="text-sm text-ink-700/70">
          شيف عام · معلم مطبخ · معلم مشاوي ووجبات سريعة
        </p>
        <p dir="ltr" className="text-sm text-ink-700/70">
          +967 783 079 291
        </p>
        <p className="mt-4 text-xs text-ink-700/50">
          © {new Date().getFullYear()} حبيب هلال محسن. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
