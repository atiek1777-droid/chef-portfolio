import { Phone, MessageCircle } from "lucide-react";
import PhotoWatermark from "./PhotoWatermark";

export default function Contact() {
  return (
    <section
      id="تواصل"
      className="relative overflow-hidden section-padding bg-coal-800 text-linen-100"
    >
      <PhotoWatermark
        position="left-[8%] top-[-2rem] hidden sm:block"
        size={200}
        opacity="opacity-[0.05]"
        rotate="rotate-3"
      />

      <div className="container-page relative flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold text-linen-100 md:text-4xl">
          جاهز للانضمام إلى فريق عمل محترف
        </h2>
        <p className="max-w-xl text-base leading-7 text-linen-200/85">
          للتواصل المباشر بخصوص فرص العمل، يمكنكم الاتصال أو مراسلتي عبر
          واتساب في أي وقت
        </p>

        <div
          dir="ltr"
          className="mt-2 text-lg font-bold tracking-wide text-saffron-300"
        >
          +967 783 079 291
        </div>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:+967783079291"
            className="flex items-center justify-center gap-2 rounded-xl bg-ember-500 px-8 py-3 text-base font-bold text-linen-100 shadow-card transition-colors duration-300 hover:bg-ember-600"
          >
            <Phone size={20} />
            اتصل الآن
          </a>
          <a
            href="https://wa.me/967783079291"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-linen-100/25 bg-linen-100/5 px-8 py-3 text-base font-bold text-linen-100 backdrop-blur-sm transition-colors duration-300 hover:bg-linen-100/15"
          >
            <MessageCircle size={20} />
            واتساب
          </a>
        </div>
      </div>
    </section>
  );
}
