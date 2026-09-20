import Image from "next/image";
import { Target } from "lucide-react";

export default function Goal() {
  return (
    <section id="الهدف" className="section-padding bg-cream-200">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-2xl border border-yellow-100 bg-white p-8 text-center shadow-card sm:p-12">
            <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">
              <Target size={28} strokeWidth={1.8} />
            </span>
            <h2 className="text-2xl font-bold text-brown-800 md:text-3xl">
              الهدف الوظيفي
            </h2>
            <p className="mt-5 text-base leading-7 text-warmgray-600">
              يسعى حبيب هلال محسن للحصول على فرصة عمل مناسبة في مطعم أو مطبخ،
              ليستفيد من خبرته الطويلة في مجال الطبخ، ويساهم في تقديم أطعمة ذات
              جودة عالية، ويطور مهاراته ويكتسب خبرات جديدة ضمن فريق عمل محترف.
            </p>
          </div>

          <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1504674900769-2c8f4a36f55d?w=600&h=500&fit=crop"
              alt="طبق راقٍ من الطعام"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
