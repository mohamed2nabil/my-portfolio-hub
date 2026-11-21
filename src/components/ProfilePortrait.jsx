import Image from "next/image";

// The profile setting is the single source of truth. Intrinsic dimensions keep
// the original 1122 × 1402 composition intact and reserve the final layout.
export default function ProfilePortrait({ src, priority = false, className = "" }) {
  return (
    <div className={`portrait-shell ${className}`}>
      <Image
        src={src || "/professional-portrait.png"}
        alt="Mohamed Nabil"
        width={1122}
        height={1402}
        priority={priority}
        sizes="(max-width: 1024px) 220px, 400px"
        className="portrait-image"
      />
    </div>
  );
}
