import type { LucideIcon } from "lucide-react";

import {
  designSystem,
  type IconBoxVariant,
} from "@/lib/design-system";

type IconBoxSize = "sm" | "md" | "lg";

type IconBoxProps = {
  icon: LucideIcon;
  variant?: IconBoxVariant;
  size?: IconBoxSize;
  interactive?: boolean;
  className?: string;
};

const sizeClasses: Record<IconBoxSize, string> = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-14 w-14",
};

const iconSizeClasses: Record<IconBoxSize, string> = {
  sm: "h-5 w-5",
  md: "h-5 w-5",
  lg: "h-7 w-7",
};

export default function IconBox({
  icon: Icon,
  variant = "default",
  size = "md",
  interactive = false,
  className = "",
}: IconBoxProps) {
  const variantClass =
    designSystem.iconBox[variant] ?? designSystem.iconBox.default;

  const interactiveClass = interactive
    ? "transition-all duration-300 group-hover:scale-110 group-hover:bg-[#153B36] group-hover:text-white"
    : "";

  return (
    <div
      aria-hidden="true"
      className={[
        variantClass,
        sizeClasses[size],
        interactiveClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Icon
        className={iconSizeClasses[size]}
        strokeWidth={2}
      />
    </div>
  );
}