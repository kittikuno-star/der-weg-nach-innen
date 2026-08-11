import type { ReactNode } from "react";

type StackSpacing =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

type StackAlign =
  | "start"
  | "center"
  | "end";

type StackProps = {
  children: ReactNode;
  spacing?: StackSpacing;
  align?: StackAlign;
  className?: string;
};

const spacingClasses: Record<StackSpacing, string> = {
  xs: "space-y-2",
  sm: "space-y-4",
  md: "space-y-6",
  lg: "space-y-8",
  xl: "space-y-10",
  "2xl": "space-y-14",
};

const alignClasses: Record<StackAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

export default function Stack({
  children,
  spacing = "md",
  align = "start",
  className = "",
}: StackProps) {
  return (
    <div
      className={`flex flex-col ${spacingClasses[spacing]} ${alignClasses[align]} ${className}`}
    >
      {children}
    </div>
  );
}