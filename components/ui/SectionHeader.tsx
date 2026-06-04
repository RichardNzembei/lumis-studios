import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col", align === "center" && "text-center items-center")}>
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      <Tag className="mt-3 text-3xl font-semibold tracking-tight text-gray-800 md:text-4xl">
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-gray-600",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
