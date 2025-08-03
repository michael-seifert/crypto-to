import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export const BrandLogo = ({ className, showText = true, size = "md" }: BrandLogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl"
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* PSQ Logo - Gradient Square */}
      <div className={cn(
        "bg-brand-gradient rounded-lg flex items-center justify-center",
        sizeClasses[size]
      )}>
        <div className="w-1/2 h-1/2 bg-white rounded-sm" />
      </div>
      
      {showText && (
        <div className="flex items-center gap-1">
          <span className={cn("font-bold text-foreground", textSizes[size])}>
            PSQ
          </span>
          <span className={cn("font-bold text-muted-foreground", textSizes[size])}>
            /
          </span>
          <span className={cn("font-bold border border-foreground px-2 py-1 rounded text-sm", size === "sm" ? "text-xs px-1" : "")}>
            PAY
          </span>
        </div>
      )}
    </div>
  );
};