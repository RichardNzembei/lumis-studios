interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={`rounded-[16px] border border-gray-100 bg-white p-6 ${
        hover ? "transition-colors duration-200 hover:border-gray-200" : ""
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
