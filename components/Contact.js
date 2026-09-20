import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import PhotoWatermark from "./PhotoWatermark";

export default function Contact() {
  return (
    <section
      id="تواصل"
      className="relative overflow-hidden section-padding bg-gradient-to-br from-royal-600 to-crimson-500 text-white"
    >
      <PhotoWatermark
        position="left-[8%] top-[-2rem] hidden sm:block"
        size={200}
        opacity="opacity-[0.08]"
        rotate="rotate-3"
      />

      <div className="container-page relative flex flex-col gap-8 lg:flex-row-reverse lg:items-center">
        <div className="flex flex-1 flex-col items-center gap-6 text-center lg:items-start lg:text-right">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            جاهز للانضمام إلى فريق عمل محترف
          </h2>
          <p className="max-w-xl text-base leading-7 text-white/85">
            للتواصل المباشر بخصوص فرص العمل، يمكنكم الاتصال أو مراسلتي عبر
            واتساب في أي وقت
          </p>

          <div
            dir="ltr"
            className="mt-2 text-lg font-bold tracking-wide text-gold-100"
          >
            +967 783 079 291
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+967783079291"
              className="flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-8 py-3 text-base font-bold text-ink-900 shadow-card transition-colors duration-300 hover:bg-gold-600"
            >
              <Phone size={20} />
              اتصل الآن
            </a>
            <a
              href="https://wa.me/967783079291"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/10 px-8 py-3 text-base font-bold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
            >
              <MessageCircle size={20} />
              واتساب
            </a>
          </div>
        </div>

        <div className="relative hidden h-80 w-full lg:block lg:w-[45%]">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop"
            alt="مطبخ احترافي"
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
