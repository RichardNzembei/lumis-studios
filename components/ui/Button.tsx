import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant: "dark" | "light" | "ghost";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  external?: boolean;
  loading?: boolean;
}

export function Button({
  variant,
  href,
  onClick,
  children,
  className,
  type = "button",
  external,
  loading = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[980px] px-6 py-2.5 text-sm font-medium transition-opacity duration-200 cursor-pointer";
  const variants = {
    dark: "bg-gray-800 text-white hover:opacity-80",
    light: "bg-gray-100 text-gray-800 hover:opacity-80",
    // For dark/inverted surfaces (e.g. the CTA band)
    ghost: "border border-white/20 bg-transparent text-white hover:bg-white/10",
  };
  const cls = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} className={cls} rel="noopener noreferrer" target="_blank">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      aria-busy={loading || undefined}
      className={cn(cls, loading && "opacity-60 cursor-default")}
    >
      {children}
    </button>
  );
}
