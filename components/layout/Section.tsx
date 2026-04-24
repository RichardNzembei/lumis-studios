interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "white" | "gray";
  id?: string;
}

export function Section({ children, className, bg = "white", id }: SectionProps) {
  const bgClass = bg === "gray" ? "bg-gray-50" : "bg-white";
  return (
    <section id={id} className={`py-20 ${bgClass} ${className ?? ""}`}>
      {children}
    </section>
  );
}
