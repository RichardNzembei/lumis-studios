import { cn } from "@/lib/utils";

interface ContainerProps {
  variant?: "default" | "wide";
  className?: string;
  children: React.ReactNode;
}

export function Container({ variant = "default", className, children }: ContainerProps) {
  const maxWidth = variant === "wide" ? "max-w-[1120px]" : "max-w-[980px]";
  return <div className={cn(maxWidth, "mx-auto px-5", className)}>{children}</div>;
}
