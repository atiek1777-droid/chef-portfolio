import { Target } from "lucide-react";

export default function Goal() {
  return (
    <section id="الهدف" className="section-padding bg-cream-200">
      <div className="container-page">
        <div className="mx-auto max-w-3xl rounded-3xl border border-gold-100 bg-white p-8 text-center shadow-card sm:p-12">
          <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-100 text-gold-600">
            <Target size={28} strokeWidth={1.8} />
          </span>
          <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">
            الهدف الوظيفي
          </h2>
          <p className="mt-5 text-base leading-7 text-ink-700/80">
            يسعى حبيب هلال محسن للحصول على فرصة عمل مناسبة في مطعم أو مطبخ،
            ليستفيد من خبرته الطويلة في مجال الطبخ، ويساهم في تقديم أطعمة ذات
            جودة عالية، ويطور مهاراته ويكتسب خبرات جديدة ضمن فريق عمل محترف.
          </p>
        </div>
      </div>
    </section>
  );
}
