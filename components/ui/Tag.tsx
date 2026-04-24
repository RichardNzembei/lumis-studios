interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={`inline-block rounded-[980px] bg-gray-50 px-3 py-1 text-xs text-gray-600 ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
