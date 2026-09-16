import Image from "next/image";

/**
 * Subtle decorative use of the personal photo as a background texture.
 * Kept low-opacity and grayscale so it never competes with real content
 * or the primary hero portrait — purely an ambient signature touch.
 */
export default function PhotoWatermark({
  position = "left-[-4rem] top-10",
  size = 220,
  opacity = "opacity-[0.06]",
  rotate = "-rotate-6",
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${position} ${opacity} ${rotate} select-none`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/profile-chef.jpg"
        alt=""
        fill
        sizes="220px"
        className="rounded-[2.5rem] object-cover grayscale"
      />
    </div>
  );
}
