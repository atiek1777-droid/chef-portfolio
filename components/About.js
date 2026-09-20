import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="نبذة" className="section-padding bg-cream-100">
      <div className="container-page">
        <SectionHeading title="نبذة عني" />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-stretch">
          <div className="rounded-2xl border border-stone-200 bg-white p-8 sm:p-10">
            <p className="text-base leading-7 text-ink-700">
              شيف عام ومعلم مطبخ يمتلك خبرة عملية تزيد عن عشر سنوات في مجال
              المطاعم والمطابخ. لديه خبرة واسعة في إعداد وتجهيز الدجاج واللحوم
              والأرز المضغوط والكبسة والمندي والشاورما والمشاوي، بالإضافة إلى
              إعداد الوجبات السريعة والمأكولات الصباحية والمسائية.
            </p>
            <p className="mt-5 text-base leading-7 text-ink-700">
              يتميز بالقدرة على العمل تحت الضغط، والالتزام بالنظافة وترتيب
              المطبخ، وسرعة إنجاز الطلبات، والتكيف مع مختلف بيئات العمل. كما
              يمتلك استعدادًا دائمًا لتعلم أي مهارة جديدة وتطوير مستوى العمل
              وجودة الأطعمة المقدمة.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-center gap-3 rounded-2xl bg-gradient-to-br from-royal-600 to-crimson-500 p-8 text-center text-white shadow-soft sm:p-10">
              <span className="text-5xl font-bold text-gold-100 sm:text-6xl">
                +10
              </span>
              <span className="text-lg font-bold">سنوات خبرة</span>
              <p className="mt-2 text-sm leading-7 text-white/85">
                في مجال المطاعم والمطابخ، من الأطباق الشعبية إلى المشاوي
                والمخبوزات
              </p>
            </div>
            <div className="relative h-48 w-full overflow-hidden rounded-2xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=400&fit=crop"
                alt="شيف يعد الطعام"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
