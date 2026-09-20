import Image from "next/image";
import PhotoWatermark from "./PhotoWatermark";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-6rem] h-72 w-72 rounded-full bg-yellow-50 blur-3xl lg:h-96 lg:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-4rem] right-1/3 h-56 w-56 rounded-full bg-amber-50 blur-3xl"
      />
      <PhotoWatermark
        position="left-6 top-6 hidden lg:block"
        size={140}
        opacity="opacity-[0.08]"
        rotate="-rotate-6"
      />

      <div className="relative flex flex-col lg:min-h-[640px] lg:flex-row">
        <div className="container-page relative z-10 flex flex-1 flex-col items-center justify-center gap-5 py-14 text-center lg:items-start lg:py-24 lg:text-right">
          <p className="text-sm font-bold tracking-wide text-amber-600 sm:text-base">
            أكثر من 10 سنوات خبرة في المطاعم والمطابخ
          </p>
          <h1 className="text-3xl font-bold leading-tight text-brown-800 md:text-5xl">
            حبيب هلال محسن
          </h1>
          <p className="text-lg font-bold text-yellow-600 sm:text-xl">
            شيف عام · معلم مطبخ · معلم مشاوي ووجبات سريعة
          </p>
          <p className="max-w-xl text-base leading-7 text-warmgray-700">
            شيف عام ومعلم مطبخ يمتلك خبرة عملية تزيد عن عشر سنوات في مجال
            المطاعم والمطابخ، مع خبرة واسعة في إعداد الدجاج واللحوم والأرز
            المضغوط والكبسة والمندي والشاورما والمشاوي، إضافة إلى الوجبات
            السريعة والمأكولات الصباحية والمسائية.
          </p>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href="#تواصل"
              className="rounded-lg bg-amber-500 px-7 py-3 text-center text-base font-bold text-white shadow-card transition-colors duration-300 hover:bg-amber-600"
            >
              تواصل معي
            </a>
            <a
              href="#الخبرات"
              className="rounded-lg border border-warmgray-300 bg-white px-7 py-3 text-center text-base font-bold text-amber-600 transition-colors duration-300 hover:border-amber-600 hover:bg-amber-50"
            >
              عرض الخبرات
            </a>
          </div>
        </div>

        <div className="relative h-[360px] w-full sm:h-[440px] lg:h-auto lg:w-[46%]">
          <Image
            src="/images/profile-chef.jpg"
            alt="حبيب هلال محسن، شيف عام ومعلم مطبخ"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-cover"
          />
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-cream to-transparent lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-cream to-transparent lg:hidden" />
        </div>
      </div>
    </header>
  );
}
