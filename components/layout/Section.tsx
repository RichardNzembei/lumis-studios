import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "white" | "gray";
  id?: string;
}

export function Section({ children, className, bg = "white", id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20", bg === "gray" ? "bg-gray-50" : "bg-white", className)}>
      {children}
    </section>
  );
}
