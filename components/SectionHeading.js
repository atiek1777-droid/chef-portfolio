export default function SectionHeading({ title, description, align = "center" }) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-right items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment} mb-12 sm:mb-16`}>
      <h2 className="text-3xl md:text-4xl font-bold text-coal-800">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-ash-600">{description}</p>
      ) : null}
      <span className="h-1 w-16 rounded-full bg-gradient-to-l from-ember-500 to-saffron-500" />
    </div>
  );
}
