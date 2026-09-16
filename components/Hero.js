import Image from "next/image";
import PhotoWatermark from "./PhotoWatermark";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-coal-800 text-linen-100">
      {/* ambient texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grain opacity-[0.15]"
      />
      <PhotoWatermark
        position="left-[-3rem] bottom-[-3rem] hidden sm:block"
        size={260}
        opacity="opacity-[0.05]"
        rotate="rotate-6"
      />
      <PhotoWatermark
        position="right-[6%] top-[-4rem] hidden lg:block"
        size={180}
        opacity="opacity-[0.05]"
        rotate="-rotate-12"
      />

      <div className="container-page relative flex flex-col-reverse items-center gap-12 pb-16 pt-14 sm:pb-20 sm:pt-20 lg:flex-row-reverse lg:items-center lg:gap-16 lg:pb-28 lg:pt-24">
        {/* Portrait */}
        <div className="relative shrink-0">
          <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-ember-500/40 via-saffron-500/30 to-transparent blur-md" />
          <div className="relative h-52 w-52 overflow-hidden rounded-[2rem] border-4 border-linen-100/90 shadow-soft sm:h-64 sm:w-64 lg:h-80 lg:w-80">
            <Image
              src="/images/profile-chef.jpg"
              alt="حبيب هلال محسن، شيف عام ومعلم مطبخ"
              fill
              priority
              sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 320px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-right">
          <p className="text-sm font-medium tracking-wide text-ember-300 sm:text-base">
            أكثر من 10 سنوات خبرة في المطاعم والمطابخ
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-linen-100 md:text-5xl">
            حبيب هلال محسن
          </h1>
          <p className="mt-3 text-lg font-medium text-saffron-300 sm:text-xl">
            شيف عام · معلم مطبخ · معلم مشاوي ووجبات سريعة
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-linen-200/90">
            شيف عام ومعلم مطبخ يمتلك خبرة عملية تزيد عن عشر سنوات في مجال
            المطاعم والمطابخ، مع خبرة واسعة في إعداد الدجاج واللحوم والأرز
            المضغوط والكبسة والمندي والشاورما والمشاوي، إضافة إلى الوجبات
            السريعة والمأكولات الصباحية والمسائية.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#تواصل"
              className="rounded-xl bg-ember-500 px-7 py-3 text-center text-base font-bold text-linen-100 shadow-card transition-colors duration-300 hover:bg-ember-600"
            >
              تواصل معي
            </a>
            <a
              href="#الخبرات"
              className="rounded-xl border border-linen-100/30 bg-linen-100/5 px-7 py-3 text-center text-base font-bold text-linen-100 backdrop-blur-sm transition-colors duration-300 hover:bg-linen-100/15"
            >
              عرض الخبرات
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
