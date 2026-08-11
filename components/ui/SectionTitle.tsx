type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-4xl text-center">

      <p className="text-sm font-medium uppercase tracking-[0.45em] text-[#B08D57]">
        {eyebrow}
      </p>

      <h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#153B36] sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600 lg:text-xl">
          {subtitle}
        </p>
      )}

    </div>
  );
}