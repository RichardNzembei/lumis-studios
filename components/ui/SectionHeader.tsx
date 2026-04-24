interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "";
  return (
    <div className={`flex flex-col ${alignClass}`}>
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-800 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed text-gray-600 ${align === "center" ? "max-w-2xl" : "max-w-xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
